import parse from 'html-react-parser';
import { Site } from '@/components/site/site';
import { graphql } from 'gatsby';
import * as React from 'react';
import { Head as Seo } from '@/components/head/head';
import {
  CategoryTemplateHeadProps,
  CategoryTemplateProps,
} from '@/templates/category/types';
import { Page } from '@/components/page/page';
import { List } from '@/components/list/list';
import { Card } from '@/components/card/card';
import { Link } from '@/components/link/link';
import { Pagination } from '@/components/pagination/pagination';
import * as s from './category.module.css';
import { getCategoryLink } from '@/utils/utils';

const CategoryTemplate: React.FC<CategoryTemplateProps> = ({
  data,
  pageContext,
}) => (
  <Site>
    <Page>
      <Page.Title>{pageContext.category}</Page.Title>

      <List as="ul" variant="reset" className={s.entries}>
        {data.categoryData.nodes.map((node) => {
          if (!node.fields?.slug || !node.frontmatter) {
            return null;
          }

          const { slug, timeToRead } = node.fields;
          const { category, title, description, date } = node.frontmatter;
          const categorySlug = getCategoryLink(category);
          const excerpt = description
            ? `${parse(
                `${description?.join('').substring(0, 140).trim()}&hellip;`,
              )}`
            : node.excerpt;
          const timeToReadMinutes = Math.ceil(timeToRead?.minutes ?? 0);

          return (
            <List.Item key={node.id} className={s.entry}>
              <Card>
                <Card.Header>
                  <Link color="primary" href={categorySlug} variant="overline">
                    {category}
                  </Link>

                  {title && <Card.Title href={slug}>{parse(title)}</Card.Title>}
                  <Card.Meta date={date} timeToRead={timeToReadMinutes} />
                </Card.Header>

                {excerpt}
              </Card>
            </List.Item>
          );
        })}
      </List>

      <Pagination
        basePath={`/category/${pageContext.category}`}
        currentPage={pageContext.currentPage}
        totalPages={pageContext.pageCount}
      />
    </Page>
  </Site>
);

export default CategoryTemplate;

export const Head: React.FC<CategoryTemplateHeadProps> = ({
  data,
  pageContext,
}) => <Seo title={pageContext.category} siteData={data.siteData} />;

export const query = graphql`
  query Category($category: String!, $limit: Int!, $skip: Int!) {
    categoryData: allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        frontmatter {
          category
          date(formatString: "MMMM D, YYYY")
          description
          title
        }
        excerpt
        fields {
          slug
          timeToRead {
            minutes
          }
        }
        id
      }
    }
    siteData: site {
      siteMetadata {
        author
        title
        description
      }
    }
  }
`;
