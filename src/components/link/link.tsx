import clsx from 'clsx';
import * as React from 'react';

import { TagName } from '@/components/link/types';
import { forwardRef } from '@/components/utilities/react';

import * as s from './link.module.css';

export const Link = forwardRef(function Link(
  { as = TagName, children, className, color, isActive, variant, ...props },
  ref,
) {
  const linkClasses = clsx('link', s.link, className, {
    [s.navigation]: variant === 'navigation',
    [s.skipLink]: variant === 'skipLink',
    [s.content]: variant === 'content',
    [s.primary]: color === 'primary' || variant === 'navigation',
    [s.overline]: variant === 'overline',
    [s.inherit]: color === 'inherit',
    [s.navigationActive]: variant === 'navigation' && isActive,
  });

  return React.createElement(
    as,
    {
      ...props,
      ...((props.href?.startsWith('http') || props.target === '_blank') && {
        rel: 'noopener noreferrer',
      }),
      className: linkClasses,
      ref,
    },
    children,
  );
});
