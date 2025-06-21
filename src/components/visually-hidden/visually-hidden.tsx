import clsx from 'clsx';
import * as React from 'react';

import { forwardRef } from '@/components/utilities/react';
import { TagName } from '@/components/visually-hidden/types';
import * as s from '@/components/visually-hidden/visually-hidden.module.css';

export const VisuallyHidden = forwardRef(function VisuallyHidden(
  { as = TagName, children, className, focusable, ...props },
  ref,
) {
  const classes = clsx(
    {
      [s.visuallyHidden]: !focusable,
      [s.visuallyHiddenFocusable]: focusable,
    },
    'visually-hidden',
    className,
  );

  return React.createElement(
    as,
    {
      ref,
      className: classes,
      ...props,
    },
    children,
  );
});
