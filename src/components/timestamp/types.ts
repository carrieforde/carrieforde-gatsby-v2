export type TimestampTextVariant = 'body1' | 'finePrint';
export type TimestampFormat = 'full' | 'long' | 'medium' | 'short';

export type TimestampProps = {
  date: Date | string | null;
  updatedAt?: Date | string | null;
  format?: TimestampFormat;
  variant?: TimestampTextVariant;
};
