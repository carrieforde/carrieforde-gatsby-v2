import clsx from 'clsx';
import * as React from 'react';

import * as s from '@/components/text/text.module.css';
import { TagName } from '@/components/text/types';
import { forwardRef } from '@/components/utilities/react';

export const Text = forwardRef(function Text(
  { as = TagName, children, className, variant = 'body', ...props },
  ref,
) {
  const tagName = variant === 'title' && !as ? 'h1' : (as ?? 'p');
  const classes = clsx(
    s.text,
    s[variant],
    'text',
    variant && `text--${variant}`,
    className,
  );

  return React.createElement(
    tagName,
    {
      ref,
      className: classes,
      ...props,
    },
    children,
  );
});
