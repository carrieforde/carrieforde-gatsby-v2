import clsx from 'clsx';
import * as React from 'react';

import * as s from '@/components/spinner/spinner.module.css';
import { SpinnerProps } from '@/components/spinner/types';
import { useTheme } from '@/components/theme/use-theme';

export const Spinner: React.FC<SpinnerProps> = ({
  size,
  color = 'neutral',
  className,
}) => {
  const spinnerClasses = clsx(
    s.spinner,
    size && [s[size]],
    color && [s[color]],
    'spinner',
    `spinner--${color}`,
    `spinner--${size}`,
    className,
  );

  const {
    components: { spinner },
  } = useTheme();

  return (
    <span className={spinnerClasses} title="Loading">
      {spinner.icon}
    </span>
  );
};
