export type HeadProps = React.PropsWithChildren<{
  title?: string | null;
  description?: readonly (string | null)[] | null;
  readonly siteData: {
    readonly siteMetadata: {
      readonly title: string | null;
      readonly author: string | null;
      readonly description?: string | null;
    } | null;
  } | null;
}>;
