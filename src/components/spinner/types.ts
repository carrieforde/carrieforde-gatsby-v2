type SpinnerSize = "small" | "medium" | "large";

export type SpinnerProps = {
  color?: "default" | "primary" | "secondary";
  size?: SpinnerSize;
  className?: string;
};
