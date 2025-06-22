export type PageProps = React.PropsWithChildren;

export type PageTitleProps = React.PropsWithChildren;

export type PageDescriptionProps = {
  description?: ReadonlyArray<string | null> | null;
};

export type PageMetaProps = {
  date: string | null;
  updatedDate?: string | null;
};

export interface PageComposition extends React.FC<PageProps> {
  Title: React.FC<PageTitleProps>;
  Description: React.FC<PageDescriptionProps>;
  Meta: React.FC<PageMetaProps>;
}
