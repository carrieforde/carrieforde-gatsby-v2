import { Props } from '@/components/utilities/types';

const TagName = 'img' satisfies React.ElementType;
type TagName = typeof TagName;

type ImageVariant = 'default' | 'circle';

type ImageOptions = {
  caption?: string;
  float?: 'left' | 'right' | 'none';
  loading?: 'eager' | 'lazy';
  variant?: ImageVariant;
};

export type ImageProps<T extends React.ElementType = TagName> = Props<
  T,
  ImageOptions
>;
