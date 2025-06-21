import { LinkProps } from "@/components/link/types";
import { Direction } from "@/types/direction";

export type PostNavigationProps = React.PropsWithChildren;

export type PostNavigationLinkProps = LinkProps & {
  direction: Direction;
};

export interface PostNavigationComposition {
  Link: React.FC<PostNavigationLinkProps>;
}
