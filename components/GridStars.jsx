'use client';

import { useEffect, useRef } from 'react';

const GRID = 40;
const MAX_STARS = 5;
const SPAWN_MIN_MS = 900;
const SPAWN_MAX_MS = 2200;
const HOVER_RADIUS = 140;
const HOVER_LERP = 0.12;

function createStar(width, height) {
  const cols = Math.max(1, Math.floor(width / GRID));
  const rows = Math.max(1, Math.floor(height / GRID));
  const horizontal = Math.random() > 0.5;
  const pathCells = 2 + Math.floor(Math.random() * 3);
  const speed = GRID * (0.4 + Math.random() * 0.4);
  const life = pathCells * (GRID / speed) + 0.45;
  const hue = Math.random() > 0.45 ? 'purple' : 'cyan';

  if (horizontal) {
    const row = Math.floor(Math.random() * (rows + 1));
    const y = row * GRID + 0.5;
    const leftToRight = Math.random() > 0.5;
    const startCol = Math.floor(Math.random() * Math.max(1, cols - pathCells));
    const x = leftToRight ? startCol * GRID : (startCol + pathCells) * GRID;
    return {
      x,
      y,
      vx: leftToRight ? speed : -speed,
      vy: 0,
      horizontal: true,
      pathLen: pathCells * GRID,
      traveled: 0,
      life,
      age: 0,
      hue,
    };
  }

  const col = Math.floor(Math.random() * (cols + 1));
  const x = col * GRID + 0.5;
  const topToBottom = Math.random() > 0.5;
  const startRow = Math.floor(Math.random() * Math.max(1, rows - pathCells));
  const y = topToBottom ? startRow * GRID : (startRow + pathCells) * GRID;
  return {
    x,
    y,
    vx: 0,
    vy: topToBottom ? speed : -speed,
    horizontal: false,
    pathLen: pathCells * GRID,
    traveled: 0,
    life,
    age: 0,
    hue,
  };
}

function rgba(r, g, b, a) {
  const alpha = Math.min(1, Math.max(0, a));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function starColors(hue, opacity) {
  const o = Math.min(1, Math.max(0, opacity)) * 0.42;
  if (hue === 'purple') {
    return {
      core: rgba(230, 220, 255, 0.55 * o),
      body: rgba(181, 106, 255, 0.5 * o),
      trail: rgba(168, 85, 247, 0.4 * o),
      trailMid: rgba(168, 85, 247, 0.1 * o),
      soft: rgba(168, 85, 247, 0.12 * o),
    };
  }
  return {
    core: rgba(230, 250, 255, 0.55 * o),
    body: rgba(34, 211, 238, 0.5 * o),
    trail: rgba(34, 211, 238, 0.38 * o),
    trailMid: rgba(34, 211, 238, 0.1 * o),
    soft: rgba(34, 211, 238, 0.1 * o),
  };
}

export default function GridStars({ className = '', style = {} }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    const ctx = canvas.getContext('2d');

    let stars = [];
    let raf = 0;
    let last = performance.now();
    let nextSpawn = 0;
    let running = true;

    // mouse hover state (smoothed)
    let pointerActive = false;
    let rawX = 0;
    let rawY = 0;
    let smoothX = 0;
    let smoothY = 0;
    let glowStrength = 0; // 0..1 animated in/out

    const finePointer =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    const resize = () => {
      const { width, height } = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const scheduleSpawn = (now) => {
      nextSpawn = now + SPAWN_MIN_MS + Math.random() * (SPAWN_MAX_MS - SPAWN_MIN_MS);
    };

    const onMove = (e) => {
      if (!finePointer) return;
      const rect = parent.getBoundingClientRect();
      rawX = e.clientX - rect.left;
      rawY = e.clientY - rect.top;
      if (rawX >= 0 && rawY >= 0 && rawX <= rect.width && rawY <= rect.height) {
        pointerActive = true;
      } else {
        pointerActive = false;
      }
    };

    const onLeave = () => {
      pointerActive = false;
    };

    const drawHoverGlow = (width, height) => {
      if (glowStrength < 0.01) return;

      const mx = smoothX;
      const my = smoothY;
      const radius = HOVER_RADIUS;
      const strength = glowStrength;

      const minCol = Math.max(0, Math.floor((mx - radius) / GRID));
      const maxCol = Math.min(Math.ceil(width / GRID), Math.ceil((mx + radius) / GRID));
      const minRow = Math.max(0, Math.floor((my - radius) / GRID));
      const maxRow = Math.min(Math.ceil(height / GRID), Math.ceil((my + radius) / GRID));

      ctx.lineCap = 'round';

      // brighten vertical lines near cursor
      for (let c = minCol; c <= maxCol; c++) {
        const x = c * GRID + 0.5;
        const dist = Math.abs(x - mx);
        if (dist > radius) continue;
        const t = 1 - dist / radius;
        const alpha = t * t * 0.42 * strength;
        if (alpha < 0.01) continue;

        const grad = ctx.createLinearGradient(x, my - radius, x, my + radius);
        grad.addColorStop(0, 'rgba(255,255,255,0)');
        grad.addColorStop(0.35, rgba(196, 181, 253, alpha * 0.2));
        grad.addColorStop(0.5, rgba(255, 255, 255, alpha));
        grad.addColorStop(0.65, rgba(165, 243, 252, alpha * 0.2));
        grad.addColorStop(1, 'rgba(255,255,255,0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1 + t * 0.8;
        ctx.shadowBlur = 6 * t * strength;
        ctx.shadowColor = rgba(168, 85, 247, 0.35 * strength);
        ctx.beginPath();
        ctx.moveTo(x, Math.max(0, my - radius));
        ctx.lineTo(x, Math.min(height, my + radius));
        ctx.stroke();
      }

      // brighten horizontal lines near cursor
      for (let r = minRow; r <= maxRow; r++) {
        const y = r * GRID + 0.5;
        const dist = Math.abs(y - my);
        if (dist > radius) continue;
        const t = 1 - dist / radius;
        const alpha = t * t * 0.42 * strength;
        if (alpha < 0.01) continue;

        const grad = ctx.createLinearGradient(mx - radius, y, mx + radius, y);
        grad.addColorStop(0, 'rgba(255,255,255,0)');
        grad.addColorStop(0.35, rgba(196, 181, 253, alpha * 0.2));
        grad.addColorStop(0.5, rgba(255, 255, 255, alpha));
        grad.addColorStop(0.65, rgba(165, 243, 252, alpha * 0.2));
        grad.addColorStop(1, 'rgba(255,255,255,0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1 + t * 0.8;
        ctx.shadowBlur = 6 * t * strength;
        ctx.shadowColor = rgba(34, 211, 238, 0.28 * strength);
        ctx.beginPath();
        ctx.moveTo(Math.max(0, mx - radius), y);
        ctx.lineTo(Math.min(width, mx + radius), y);
        ctx.stroke();
      }

      ctx.shadowBlur = 0;

      // small crosshair node at nearest intersection
      const nx = Math.round(mx / GRID) * GRID + 0.5;
      const ny = Math.round(my / GRID) * GRID + 0.5;
      const nd = Math.hypot(nx - mx, ny - my);
      if (nd < radius * 0.55) {
        const a = (1 - nd / (radius * 0.55)) * 0.55 * strength;
        ctx.fillStyle = rgba(255, 255, 255, a);
        ctx.beginPath();
        ctx.arc(nx, ny, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const draw = (now) => {
      if (!running) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      const { width, height } = parent.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      // smooth pointer + glow strength
      if (finePointer) {
        if (pointerActive) {
          if (glowStrength < 0.05) {
            smoothX = rawX;
            smoothY = rawY;
          }
          smoothX += (rawX - smoothX) * HOVER_LERP;
          smoothY += (rawY - smoothY) * HOVER_LERP;
          glowStrength += (1 - glowStrength) * 0.14;
        } else {
          glowStrength += (0 - glowStrength) * 0.08;
        }
        drawHoverGlow(width, height);
      }

      if (now >= nextSpawn && stars.length < MAX_STARS) {
        stars.push(createStar(width, height));
        scheduleSpawn(now);
      }

      stars = stars.filter((star) => {
        const step = Math.hypot(star.vx, star.vy) * dt;
        star.age += dt;
        star.traveled += step;
        star.x += star.vx * dt;
        star.y += star.vy * dt;

        if (star.horizontal) {
          star.y = Math.round((star.y - 0.5) / GRID) * GRID + 0.5;
        } else {
          star.x = Math.round((star.x - 0.5) / GRID) * GRID + 0.5;
        }

        const t = star.age / star.life;
        const pathT = star.traveled / star.pathLen;
        if (t >= 1 || pathT >= 1) return false;
        if (star.x < -20 || star.x > width + 20 || star.y < -20 || star.y > height + 20) return false;

        let opacity = 1;
        if (t < 0.12) opacity = t / 0.12;
        else if (pathT > 0.75) opacity = (1 - pathT) / 0.25;
        else if (t > 0.85) opacity = (1 - t) / 0.15;
        opacity = Math.min(1, Math.max(0, opacity));
        if (opacity <= 0.001) return true;

        const c = starColors(star.hue, opacity);
        const dirX = star.horizontal ? Math.sign(star.vx) : 0;
        const dirY = star.horizontal ? 0 : Math.sign(star.vy);
        const tailLen = 16 + Math.min(28, star.traveled * 0.5);

        ctx.save();
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        const tx = star.x - dirX * tailLen;
        const ty = star.y - dirY * tailLen;

        ctx.strokeStyle = c.soft;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(star.x, star.y);
        ctx.stroke();

        const grad = ctx.createLinearGradient(tx, ty, star.x, star.y);
        grad.addColorStop(0, 'rgba(255,255,255,0)');
        grad.addColorStop(0.35, c.trailMid);
        grad.addColorStop(0.75, c.trail);
        grad.addColorStop(1, c.body);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(star.x, star.y);
        ctx.stroke();

        ctx.shadowBlur = 4;
        ctx.shadowColor = c.body;
        ctx.fillStyle = c.body;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 1.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.fillStyle = c.core;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 0.6, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
        return true;
      });

      raf = requestAnimationFrame(draw);
    };

    resize();
    scheduleSpawn(performance.now() + 600);
    const { width, height } = parent.getBoundingClientRect();
    stars.push(createStar(width, height));

    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave);
    document.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={style}
      aria-hidden
    />
  );
}
