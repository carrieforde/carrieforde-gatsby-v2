type BannerVariant = "default" | "error" | "info" | "success" | "warning";

export type BannerProps = React.PropsWithChildren<{
  variant?: BannerVariant;
  icon?: React.ReactNode;
  className?: string;
  iconClassName?: string;
}>;

export type BannerIconProps = React.PropsWithChildren<
  Pick<BannerProps, "variant"> & { className?: string }
>;

export type BannerIconConfig = Record<BannerVariant, React.ReactNode>;
