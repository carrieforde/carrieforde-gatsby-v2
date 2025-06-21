import { Props } from "@/components/utilities/types";

export const TagName = "p" satisfies React.ElementType;
type TagName = typeof TagName;

type TextVariant =
  | "title"
  | "subtitle"
  | "body1"
  | "body2"
  | "overline"
  | "finePrint";

type TextOptions<T extends React.ElementType = TagName> = {
  as?: T;
  variant?: TextVariant;
};

export type TextProps<T extends React.ElementType = TagName> = Props<
  T,
  TextOptions<T>
>;
