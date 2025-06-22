import { PageProps } from 'gatsby';

type PaginationField = {
  fields: {
    slug: string | null;
  };
  frontmatter: {
    title: string | null;
  };
};

type PostTemplatePageContext = {
  next?: PaginationField;
  previous?: PaginationField;
  slug: string;
};

export type PostTemplateProps = PageProps<
  Queries.PostQuery,
  PostTemplatePageContext
>;

export type PostTemplateHeadProps = PageProps<Queries.PostQuery>;
