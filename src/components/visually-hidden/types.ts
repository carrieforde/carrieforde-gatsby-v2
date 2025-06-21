import { Props } from "@/components/utilities/types";

export const TagName = "span" satisfies React.ElementType;
type TagName = typeof TagName;

type VisuallyHiddenOptions<T extends React.ElementType = TagName> = {
  as?: T;
  focusable?: boolean;
};

export type VisuallyHiddenProps<T extends React.ElementType = TagName> = Props<
  T,
  VisuallyHiddenOptions<T>
>;
