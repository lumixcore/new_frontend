'use client';

import React from 'react';

/**
 * TopShade - Creates a smooth gradient shade effect at the top of a section.
 * Height is fixed in pixels (not relative to parent). Width fills container.
 * Drop this as the first child inside any relative-positioned container.
 */
const TopShade = ({
  color = 'rgba(12, 20, 80, 0.45)',   // Core glow color
  fadeColor = 'transparent',            // Outer fade color
  height = 300,                         // Fixed height in pixels
  blur = '80px',                        // Blur amount for softness
  opacity = 1,                          // Overall intensity
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 top-0 ${className}`}
      style={{
        height: typeof height === 'number' ? `${height}px` : height,
        opacity,
        background: `radial-gradient(ellipse at 50% 0%, ${color} 0%, ${fadeColor} 70%)`,
        filter: `blur(${blur})`,
        zIndex: 0,
        ...style,
      }}
    />
  );
};

export default TopShade;