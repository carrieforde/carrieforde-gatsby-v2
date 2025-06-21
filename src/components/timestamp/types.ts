export type TimestampTextVariant = "default" | "finePrint";
export type TimestampFormat = "full" | "long" | "medium" | "short";

export type TimestampProps = {
  date: Date | string;
  updatedAt?: Date | string;
  format?: TimestampFormat;
  variant?: TimestampTextVariant;
};
