import { Props } from '@/components/utilities/types';
import { GatsbyLinkProps } from 'gatsby';

export const TagName = 'a' satisfies React.ElementType;
type TagName = typeof TagName;

type LinkVariant = 'content' | 'navigation' | 'skipLink' | 'overline';

type LinkColor = 'primary' | 'inherit';

type LinkOptions<
  T extends React.ElementType = TagName,
  TState extends object = object,
> = GatsbyLinkProps<TState> & {
  as?: T;
  variant?: LinkVariant;
  color?: LinkColor;
  isActive?: boolean;
};

export type LinkProps<T extends React.ElementType = TagName> = Props<
  T,
  LinkOptions<T>
>;
