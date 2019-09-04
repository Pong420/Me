import React, { CSSProperties, useMemo } from 'react';

interface Props {
  color?: string;
  width?: number;
  style?: CSSProperties;
}

export function Telegram({ color = '#fff', width = 40, style }: Props) {
  const mergedStyle = useMemo<CSSProperties>(
    () => ({ marginTop: '3px', ...style }),
    [style]
  );

  return (
    <svg width={width} viewBox="0 0 54 54" fill="none" style={mergedStyle}>
      <g>
        <rect x="-0.2" y="0.1" />
        <path
          fill={color}
          d="M49.7,16.5c1.3,3.1,2,6.3,2,9.7s-0.7,6.6-2,9.7c-1.3,3.1-3.1,5.7-5.3,8c-2.2,2.2-4.9,4-8,5.3c-3.1,1.3-6.3,2-9.7,2
		c-3.4,0-6.6-0.7-9.7-2s-5.7-3.1-8-5.3c-2.2-2.2-4-4.9-5.3-8c-1.3-3.1-2-6.3-2-9.7s0.7-6.6,2-9.7c1.3-3.1,3.1-5.7,5.3-8
		c2.2-2.2,4.9-4,8-5.3s6.3-2,9.7-2c3.4,0,6.6,0.7,9.7,2c3.1,1.3,5.7,3.1,8,5.3C46.6,10.8,48.3,13.5,49.7,16.5z M34.8,37.7l4.1-19.3
		c0.2-0.8,0.1-1.4-0.3-1.8c-0.4-0.4-0.8-0.4-1.4-0.2l-24.1,9.3c-0.5,0.2-0.9,0.4-1.1,0.7c-0.2,0.3-0.2,0.5-0.1,0.7
		c0.1,0.2,0.4,0.4,0.9,0.5l6.2,1.9l14.3-9c0.4-0.3,0.7-0.3,0.9-0.2c0.1,0.1,0.1,0.2-0.1,0.4L22.5,31.3L22,37.7
		c0.4,0,0.8-0.2,1.3-0.6l3-2.9l6.2,4.6C33.8,39.5,34.5,39.1,34.8,37.7z"
        />
      </g>
    </svg>
  );
}
