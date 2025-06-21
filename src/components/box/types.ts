import { Props } from "@/components/utilities/types";

export const TagName = "div" satisfies React.ElementType;
type TagName = typeof TagName;

type BoxOptions<T extends React.ElementType = TagName> = {
  as?: T;
};

export type BoxProps<T extends React.ElementType = TagName> = Props<
  T,
  BoxOptions<T>
>;
