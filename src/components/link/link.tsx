import clsx from 'clsx';
import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import { LinkProps, TagName } from '@/components/link/types';
import { forwardRef } from '@/components/utilities/react';

import * as s from './link.module.css';

export const Link: React.FC<LinkProps> = forwardRef(function Link(
  {
    as = TagName,
    activeClassName,
    children,
    className,
    color,
    isActive,
    variant,
    ...props
  },
  ref,
) {
  const { href } = props;
  const linkClasses = clsx(
    'link',
    s.link,
    {
      [s.navigation]: variant === 'navigation',
      [s.skipLink]: variant === 'skipLink',
      [s.content]: variant === 'content',
      [s.primary]: color === 'primary' || variant === 'navigation',
      [s.overline]: variant === 'overline',
      [s.inherit]: color === 'inherit',
    },
    className,
  );
  const activeClasses = clsx('active', activeClassName, {
    [s.navigationActive]: variant === 'navigation',
  });

  const isExternalLink = href?.includes('http') || href?.includes('mailto');

  if (isExternalLink || as !== TagName) {
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
  }

  return (
    <GatsbyLink
      activeClassName={activeClasses}
      className={linkClasses}
      to={href || ''}
      ref={ref}
      {...props}
    >
      {children}
    </GatsbyLink>
  );
});
