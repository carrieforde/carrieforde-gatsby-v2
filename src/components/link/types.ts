import { Props } from "@/components/utilities/types";

export const TagName = "a" satisfies React.ElementType;
type TagName = typeof TagName;

type LinkVariant = "content" | "navigation" | "skipLink" | "overline";

type LinkColor = "primary" | "inherit";

type LinkOptions<T extends React.ElementType = TagName> = {
  as?: T;
  variant?: LinkVariant;
  color?: LinkColor;
  isActive?: boolean;
};

export type LinkProps<T extends React.ElementType = TagName> = Props<
  T,
  LinkOptions<T>
>;
