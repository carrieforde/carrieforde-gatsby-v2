import { Props } from "@/components/utilities/types";

export const TagName = "button" satisfies React.ElementType;
type TagName = typeof TagName;

type ButtonType = "button" | "reset" | "submit";
type ButtonVariant = "filled" | "outline" | "text" | "icon";
type ButtonColor = "primary" | "secondary" | "tertiary" | "error";

type ButtonOptions<T extends React.ElementType = TagName> = {
  as?: T;
  type: ButtonType;
  variant?: ButtonVariant;
  color?: ButtonColor;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  spinnerClassName?: string;
};

export type ButtonProps<T extends React.ElementType = TagName> = Props<
  T,
  ButtonOptions<T>
>;
