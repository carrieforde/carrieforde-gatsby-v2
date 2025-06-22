import clsx from 'clsx';
import * as React from 'react';

import { Text } from '@/components/text/text';
import * as s from '@/components/timestamp/timestamp.module.css';
import { TimestampProps } from '@/components/timestamp/types';
import { getFormattedDate, getIsoDate } from '@/components/timestamp/utils';

export const Timestamp: React.FC<TimestampProps> = ({
  date,
  format = 'long',
  updatedAt,
  variant = 'body1',
}) => {
  const formattedDate = getFormattedDate(date, format);
  const formattedUpdatedAt = updatedAt
    ? getFormattedDate(updatedAt, format)
    : null;
  const timestampClasses = clsx(s.timestamp, {
    [s.body1]: variant === 'body1',
  });

  return (
    <Text
      as="time"
      dateTime={getIsoDate(date)}
      className={timestampClasses}
      variant={variant}
    >
      {formattedDate}
      {updatedAt && (
        <>
          <Text as="strong">&#9656;</Text>
          <Text as="strong">Updated:</Text>
          <Text as="span">{formattedUpdatedAt}</Text>
        </>
      )}
    </Text>
  );
};
