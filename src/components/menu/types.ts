import { LinkProps } from "@/components/link/types";

type MenuVariant = "default" | "icon";

export type MenuProps = React.PropsWithChildren<{
  variant?: MenuVariant;
  className?: string;
}>;

export type MenuLinkProps = Pick<LinkProps, "href" | "color" | "isActive">;

export type MenuItemProps = React.PropsWithChildren<MenuLinkProps>;

export type MenuComposition = {
  Item: React.FC<MenuItemProps>;
};
