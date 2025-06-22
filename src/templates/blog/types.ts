import { HeadProps, PageProps } from 'gatsby';

type BlogTemplatePageContext = {
  limit: number;
  skip: number;
  pageCount: number;
  currentPage: number;
};

export type BlogTemplateProps = PageProps<
  Queries.BlogQuery,
  BlogTemplatePageContext
>;

export type BlogTemplateHeadProps = HeadProps<Queries.BlogQuery>;
``;
