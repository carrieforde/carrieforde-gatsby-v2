import clsx from 'clsx';
import * as React from 'react';

import { Link } from '@/components/link/link';
import { List } from '@/components/list/list';
import * as s from '@/components/menu/menu.module.css';
import {
  MenuComposition,
  MenuItemProps,
  MenuProps,
} from '@/components/menu/types';

export const Menu: React.FC<MenuProps> & MenuComposition = ({
  children,
  variant = 'default',
  className,
}) => {
  const menuClasses = clsx(s.menu, { [s.icon]: variant === 'icon' }, className);

  return (
    <List as="ul" className={menuClasses}>
      {children}
    </List>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ children, href, isActive }) => {
  return (
    <List.Item as="li">
      <Link href={href} isActive={isActive} variant="navigation">
        {children}
      </Link>
    </List.Item>
  );
};

Menu.Item = MenuItem;
