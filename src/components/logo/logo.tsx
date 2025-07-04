import * as s from '@/components/logo/logo.module.css';
import * as React from 'react';

export const Logo = () => (
  <svg
    id="Layer_2"
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 157 157"
    className={s.logo}
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="34.98"
        y1="42.44"
        x2="145.41"
        y2="106.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="var(--logo-gradient-start)" />
        <stop
          offset="0.12"
          stopColor="var(--logo-gradient-1)"
          stopOpacity="0.97"
        />
        <stop
          offset="0.3"
          stopColor="var(--logo-gradient-2)"
          stopOpacity="0.88"
        />
        <stop
          offset="0.52"
          stopColor="var(--logo-gradient-3)"
          stopOpacity="0.74"
        />
        <stop
          offset="0.76"
          stopColor="var(--logo-gradient-4)"
          stopOpacity="0.54"
        />
        <stop
          offset="1"
          stopColor="var(--logo-gradient-end)"
          stopOpacity="0.3"
        />
      </linearGradient>
      <clipPath id="clip-path">
        <polygon
          points="53.87 37.71 37.71 37.71 37.71 53.87 37.71 70.32 37.71 86.48 37.71 119.09 53.87 119.09 53.87 86.48 156.8 86.48 156.8 70.32 53.87 70.32 53.87 53.87 156.8 53.87 156.8 37.71 53.87 37.71"
          style={{ fill: 'url(#linear-gradient)' }}
        />
      </clipPath>
      <linearGradient
        id="linear-gradient-3"
        x1="34.98"
        y1="42.44"
        x2="159.53"
        y2="114.35"
        xlinkHref="#linear-gradient"
      />
    </defs>
    <title>Carrie Forde logo</title>
    <polygon
      points="156.8 21.55 156.8 0 21.55 0 0 0 0 21.55 0 135.25 0 156.8 21.55 156.8 156.8 156.8 156.8 135.25 21.55 135.25 21.55 21.55 156.8 21.55"
      style={{ fill: 'var(--logo-c)' }}
    />
    <polygon
      points="53.87 37.71 37.71 37.71 37.71 53.87 37.71 70.32 37.71 86.48 37.71 119.09 53.87 119.09 53.87 86.48 156.8 86.48 156.8 70.32 53.87 70.32 53.87 53.87 156.8 53.87 156.8 37.71 53.87 37.71"
      style={{ fill: 'url(#linear-gradient)' }}
    />
    <g style={{ clipPath: 'url(#clip-path)' }}>
      <rect
        x="37.71"
        y="37.71"
        width="119.09"
        height="81.38"
        style={{ fill: 'url(#linear-gradient-3)' }}
      />
    </g>
    <rect
      x="70.4"
      y="102.13"
      width="86.4"
      height="16.16"
      style={{ fill: 'var(--logo-bar)' }}
    />
  </svg>
);
