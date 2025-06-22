import clsx from 'clsx';
import * as React from 'react';

import { IconArrowLeft } from '@/components/icons/icon-arrow-left';
import { IconArrowRight } from '@/components/icons/icon-arrow-right';
import { Link } from '@/components/link/link';
import * as s from '@/components/post-navigation/post-navigation.module.css';
import {
  PostNavigationComposition,
  PostNavigationLinkProps,
  PostNavigationProps,
} from '@/components/post-navigation/types';

export const PostNavigation: React.FC<PostNavigationProps> &
  PostNavigationComposition = ({ children }) => (
  <nav className={s.postNavigation}>{children}</nav>
);

const PostNavigationLink: React.FC<PostNavigationLinkProps> = ({
  children,
  className,
  direction,
  ...props
}) => {
  const linkClasses = clsx(
    s.link,
    s[direction],
    'post-navigation__link',
    className,
  );

  return (
    <Link {...props} className={linkClasses} variant="navigation">
      {children}
      <Icon direction={direction} />
    </Link>
  );
};

const Icon: React.FC<Pick<PostNavigationLinkProps, 'direction'>> = ({
  direction,
}) => {
  if (direction === 'next') {
    return <IconArrowRight className={s.icon} />;
  }

  if (direction === 'previous') {
    return <IconArrowLeft className={s.icon} />;
  }

  return null;
};

PostNavigation.Link = PostNavigationLink;
