import clsx from 'clsx';
import * as React from 'react';
import * as s from '@/styles/utilities.module.css';

import { Box } from '@/components/box/box';
import {
  ListComposition,
  ListItemTagName,
  ListTagName,
} from '@/components/list/types';
import { forwardRef } from '@/components/utilities/react';

const ListComponent = forwardRef(function List(
  { as = ListTagName, children, className, variant, ...props },
  ref,
) {
  const classes = clsx('list', className, {
    [s.listReset]: variant === 'reset',
  });

  return (
    <Box as={as} ref={ref} className={classes} {...props}>
      {children}
    </Box>
  );
});

const Item = forwardRef(function ListItem(
  { as = ListItemTagName, children, className, ...props },
  ref,
) {
  const classes = clsx('list__item', className);

  return (
    <Box {...props} as={as} className={classes} ref={ref}>
      {children}
    </Box>
  );
});

export const List: ListComposition = Object.assign(ListComponent, { Item });
