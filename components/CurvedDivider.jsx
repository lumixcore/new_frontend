'use client';

import React from 'react';

/**
 * CurvedDivider - Smooth responsive curved line(s).
 * Direction 'down' = valley (U facing down), 'up' = hill (arch facing up).
 * Stack multiple curves with the `lines` prop.
 */
const CurvedDivider = ({
  color = '#ffffff',
  opacity = 0.2,
  strokeWidth = 1,
  curveDepth = 20,
  lines = 1,
  lineGap = 8,
  direction = 'down',
  className = '',
  style = {},
}) => {
  const vbHeight = 100 + (lines - 1) * lineGap;
  const svgHeight = Math.max(16, curveDepth * 0.6 + (lines - 1) * lineGap * 0.5);

  const paths = Array.from({ length: lines }, (_, i) => {
    const offset = i * lineGap;
    if (direction === 'up') {
      return `M0,${100 + offset} Q600,${offset} 1200,${100 + offset}`;
    }
    return `M0,${offset} Q600,${100 + offset} 1200,${offset}`;
  });

  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      style={{ lineHeight: 0, ...style }}
    >
      <svg
        viewBox={`0 0 1200 ${vbHeight}`}
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: `${svgHeight}px` }}
      >
        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            opacity={opacity}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
    </div>
  );
};

export default CurvedDivider;