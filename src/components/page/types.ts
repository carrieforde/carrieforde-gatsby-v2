export type PageProps = React.PropsWithChildren;

export type PageTitleProps = React.PropsWithChildren;

export type PageDescriptionProps = {
  description?: (string | null)[] | null;
};

export interface PageComposition extends React.FC<PageProps> {
  Title: React.FC<PageTitleProps>;
  Description: React.FC<PageDescriptionProps>;
}
