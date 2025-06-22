import { TextProps } from '@/components/text/types';
import { Props } from '@/components/utilities/types';

export const TagName = 'article' satisfies React.ElementType;
type TagName = typeof TagName;

type CardOptions<T extends React.ElementType = TagName> = {
  as?: T;
};

export type CardProps<T extends React.ElementType = TagName> = Props<
  T,
  CardOptions<T>
>;

export type CardHeaderProps = React.PropsWithChildren;

export type CardTitleProps = React.PropsWithChildren<
  Pick<TextProps, 'as' | 'className'> & {
    href?: string;
  }
>;

export type CardMetaProps = {
  date: string | null;
  timeToRead: number;
};

export interface CardComposition extends React.FC<CardProps> {
  Header: React.FC<CardHeaderProps>;
  Title: React.FC<CardTitleProps>;
  Meta: React.FC<CardMetaProps>;
}
