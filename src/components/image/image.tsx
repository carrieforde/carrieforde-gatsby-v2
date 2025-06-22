import { Box } from '@/components/box/box';
import { ImageProps } from '@/components/image/types';
import { forwardRef } from '@/components/utilities/react';
import clsx from 'clsx';
import * as React from 'react';
import * as s from '@/components/image/image.module.css';

export const Image: React.FC<ImageProps> = forwardRef(
  ({ alt, caption, float = 'none', src, height, variant, width }) => {
    const imgClasses = clsx('image', [s[float]], {
      [s.circle]: variant === 'circle',
    });

    return (
      <Box as="figure">
        <img
          alt={alt}
          src={src}
          height={height}
          width={width}
          className={imgClasses}
        />
        {caption && <Box as="figcaption">{caption}</Box>}
      </Box>
    );
  },
);
