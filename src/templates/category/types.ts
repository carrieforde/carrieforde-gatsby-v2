import { PageProps } from 'gatsby';

type CategoryTemplatePageContext = {
  category: string;
  limit: number;
  skip: number;
  pageCount: number;
  currentPage: number;
};

export type CategoryTemplateProps = PageProps<
  Queries.CategoryQuery,
  CategoryTemplatePageContext
>;

export type CategoryTemplateHeadProps = PageProps<
  Queries.CategoryQuery,
  CategoryTemplatePageContext
>;
