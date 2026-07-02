import { HeadProps, PageProps } from "gatsby";

type CatsTemplatePageContext = {
    pageCount: number;
    currentPage: number;
}

export type CatsTemplateProps = PageProps<Queries.CatsQuery, CatsTemplatePageContext>;

export type CatsTemplateHeadProps = HeadProps<Queries.CatsQuery>;
