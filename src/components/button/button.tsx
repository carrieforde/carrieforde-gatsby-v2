import clsx from 'clsx';
import * as React from 'react';

import * as s from '@/components/button/button.module.css';
import { TagName } from '@/components/button/types';
import { Spinner } from '@/components/spinner/spinner';
import { forwardRef } from '@/components/utilities/react';

export const Button = forwardRef(
  (
    {
      as = TagName,
      children,
      className,
      color = 'tertiary',
      type,
      variant = 'text',
      loading,
      disabled,
      spinnerClassName,
      ...props
    },
    ref,
  ) => {
    const buttonClasses = clsx(
      s.button,
      [s[color]],
      [s[variant]],
      'button',
      `button--${color}`,
      `button--${variant}`,
      className,
    );
    const buttonSpinnerClasses = clsx(
      s.spinner,
      'button__spinner',
      spinnerClassName,
    );

    return React.createElement(
      as,
      { ...props, type, ref, className: buttonClasses, disabled },
      loading
        ? React.createElement(Spinner, { className: buttonSpinnerClasses })
        : children,
    );
  },
);
