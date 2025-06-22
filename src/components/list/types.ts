import { Props } from '@/components/utilities/types';

type ListVariant = 'default' | 'reset';

export const ListTagName = 'ul' satisfies React.ElementType;
type ListTagName = 'ul' | 'ol';

type ListOptions<T extends React.ElementType = ListTagName> = {
  as?: T;
  ordered?: boolean;
  variant?: ListVariant;
};

export type ListProps<T extends React.ElementType = ListTagName> = Props<
  T,
  ListOptions<T>
>;

export const ListItemTagName = 'li' satisfies React.ElementType;
type ListItemTagName = typeof ListItemTagName;

type ListItemOptions<T extends React.ElementType = ListItemTagName> = {
  as?: T;
};

type ListItemProps<T extends React.ElementType = 'li'> = Props<
  T,
  ListItemOptions<T>
>;

export interface ListComposition extends React.FC<ListProps> {
  Item: React.FC<ListItemProps>;
}
