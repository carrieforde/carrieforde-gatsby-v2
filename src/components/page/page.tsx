import parse from 'html-react-parser';
import * as React from 'react';

import { Box } from '@/components/box/box';
import {
  PageComposition,
  PageDescriptionProps,
  PageMetaProps,
  PageProps,
  PageTitleProps,
} from '@/components/page/types';
import { Text } from '@/components/text/text';
import { Timestamp } from '@/components/timestamp/timestamp';

const PageComponent: React.FC<PageProps> = ({ children }) => {
  return <Box as="main">{children}</Box>;
};

const Title: React.FC<PageTitleProps> = ({ children }) => {
  return (
    <Text as="h1" variant="title">
      {children}
    </Text>
  );
};

const Description: React.FC<PageDescriptionProps> = ({ description }) => {
  if (!description) {
    return null;
  }

  if (Array.isArray(description) && description.length > 0) {
    return (
      <>
        {description.map((desc, index) => (
          <Text as="p" variant="subtitle" key={index}>
            {desc && parse(desc)}
          </Text>
        ))}
      </>
    );
  }

  return (
    <Text as="p" variant="subtitle">
      {typeof description === 'string' && parse(description)}
    </Text>
  );
};

const Meta: React.FC<PageMetaProps> = ({ date, updatedDate }) => {
  if (!date) {
    return null;
  }

  return <Timestamp date={date} updatedAt={updatedDate} />;
};

export const Page: PageComposition = Object.assign(PageComponent, {
  Title,
  Description,
  Meta,
});
