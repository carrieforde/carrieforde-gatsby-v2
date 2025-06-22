import parse from 'html-react-parser';

import { Site } from '@/components/site/site';

import { graphql } from 'gatsby';
import * as React from 'react';
import { Head as Seo } from '@/components/head/head';
import { Page } from '@/components/page/page';
import {
  BlogTemplateHeadProps,
  BlogTemplateProps,
} from '@/templates/blog/types';
import { Card } from '@/components/card/card';
import { List } from '@/components/list/list';
import { Link } from '@/components/link/link';
import * as s from './blog.module.css';
import { Pagination } from '@/components/pagination/pagination';

const BlogTemplate: React.FC<BlogTemplateProps> = ({
  children,
  data,
  pageContext,
}) => (
  <Site>
    <Page>
      <Page.Title>Blog</Page.Title>
      <Page.Description
        description={[
          'Occasional posts on JavaScript, WordPress, and front end development.',
        ]}
      />
    </Page>

    <List as="ul" variant="reset">
      {data.blogData.nodes.map((node) => {
        if (!node.fields?.slug || !node.frontmatter) {
          return null;
        }

        const { slug, timeToRead } = node.fields;
        const { category, title, description, date } = node.frontmatter;
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
                <Link color="primary" href="/" variant="overline">
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
      basePath="/blog"
      currentPage={pageContext.currentPage}
      totalPages={pageContext.pageCount}
    />
  </Site>
);

export default BlogTemplate;

export const Head: React.FC<BlogTemplateHeadProps> = ({ data }) => (
  <Seo
    title="Blog"
    description={[
      'Occasional posts on JavaScript, WordPress, and front end development.',
    ]}
    siteData={data.siteData}
  />
);

export const query = graphql`
  query Blog($limit: Int!, $skip: Int!) {
    blogData: allMdx(
      filter: { internal: { contentFilePath: { regex: "/posts/" } } }
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        frontmatter {
          title
          category
          date(formatString: "MMMM D, YYYY")
          description
        }
        id
        excerpt
        fields {
          slug
          timeToRead {
            minutes
          }
        }
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
