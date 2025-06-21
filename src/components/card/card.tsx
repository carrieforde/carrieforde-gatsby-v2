import clsx from 'clsx';
import * as React from 'react';

import { Box } from '@/components/box/box';
import * as s from '@/components/card/card.module.css';
import {
  CardComposition,
  CardHeaderProps,
  CardMetaProps,
  CardTitleProps,
  TagName,
} from '@/components/card/types';
import { Link } from '@/components/link/link';
import { Text } from '@/components/text/text';
import { Timestamp } from '@/components/timestamp/timestamp';
import { forwardRef } from '@/components/utilities/react';

const CardComponent = forwardRef(function Card(
  { as = TagName, children, ...props },
  ref,
) {
  return (
    <Box {...props} as={as} ref={ref}>
      {children}
    </Box>
  );
});

const Header: React.FC<CardHeaderProps> = ({ children }) => {
  return <header>{children}</header>;
};

const Title: React.FC<CardTitleProps> = ({ as = 'h2', children, href }) => {
  const classes = clsx(s.title, 'card__title');

  if (href) {
    return (
      <Link href={href} className={s.link}>
        <Text as={as} variant="title" className={classes}>
          {children}
        </Text>
      </Link>
    );
  }

  return (
    <Text as={as} variant="title" className={classes}>
      {children}
    </Text>
  );
};

const Meta: React.FC<CardMetaProps> = ({ date, timeToRead }) => (
  <Text as="span" className={s.meta} variant="finePrint">
    <Timestamp date={date} variant="finePrint" />
    <Text as="span">&#9656;</Text>
    <Text>{timeToRead} minute read</Text>
  </Text>
);

export const Card: CardComposition = Object.assign(CardComponent, {
  Header,
  Title,
  Meta,
});
