'use client';

import clsx from 'clsx';
import * as React from 'react';

import * as s from '@/components/banner/banner.module.css';
import { BannerIconProps, BannerProps } from '@/components/banner/types';
import { useTheme } from '@/components/theme/use-theme';
import { MergeField } from '@/components/merge-field/merge-field';

const Icon: React.FC<BannerIconProps> = ({
  children,
  className,
  variant = 'default',
}) => {
  const {
    components: { banner },
  } = useTheme();
  const iconClasses = clsx(s.icon, 'banner__icon', className);

  if (children === null) {
    return null;
  }

  return React.createElement(
    'span',
    { className: iconClasses },
    children || banner.icons[variant],
  );
};

export const Banner: React.FC<BannerProps> = ({
  children,
  className,
  icon,
  variant,
}) => {
  const bannerClasses = clsx(
    s.banner,
    variant && [s[variant]],
    'banner',
    `banner--${variant}`,
    className,
  );

  return (
    <section className={bannerClasses}>
      <Icon variant={variant} className={s.icon}>
        {icon}
      </Icon>
      {typeof children === 'string' ? <MergeField text={children} /> : children}
    </section>
  );
};
