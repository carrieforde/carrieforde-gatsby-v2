'use client';

import clsx from 'clsx';
import * as React from 'react';

import * as s from '@/components/banner/banner.module.css';
import { BannerIconProps, BannerProps } from '@/components/banner/types';
import { useTheme } from '@/components/theme/use-theme';

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

export function Banner({ children, className, icon, variant }: BannerProps) {
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
      {children}
    </section>
  );
}
