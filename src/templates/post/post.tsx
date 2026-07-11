import { Head as Seo } from '@/components/head/head';
import { Link } from '@/components/link/link';
import { Page } from '@/components/page/page';
import { PostNavigation } from '@/components/post-navigation/post-navigation';
import { Site } from '@/components/site/site';
import { TableOfContents } from '@/components/table-of-contents/table-of-contents';
import { TableOfContentsItem } from '@/components/table-of-contents/types';
import { usePortalState } from '@/hooks/use-portal-state';
import { PostTemplateProps } from '@/templates/post/types';
import { getCategoryLink } from '@/utils/utils';
import { graphql } from 'gatsby';
import * as React from 'react';

const PostTemplate: React.FC<PostTemplateProps> = ({
  children,
  data,
  location,
  pageContext,
}) => {
  if (!data.postData?.frontmatter) {
    return null;
  }

  const { category, title, description, date, updated, showToc } =
    data.postData.frontmatter;
  const categorySlug = getCategoryLink(category);

  return (
    <Site location={location}>
      <Page>
        <Link href={categorySlug} color="primary" variant="overline">
          {category}
        </Link>
        <Page.Title>{title}</Page.Title>
        <Page.Description description={description} />
        <Page.Meta date={date} updatedDate={updated} />
        {data.postData.tableOfContents && (
            <TableOfContents
              items={
                data.postData.tableOfContents.items as TableOfContentsItem[]
              }
            />
        )}

        {children}

        <PostNavigation>
          {pageContext.previous?.fields.slug && (
            <PostNavigation.Link
              href={pageContext.previous.fields.slug}
              direction="previous"
            >
              {pageContext.previous.frontmatter.title ?? 'Previous'}
            </PostNavigation.Link>
          )}
          {pageContext.next?.fields.slug && (
            <PostNavigation.Link
              href={pageContext.next.fields.slug}
              direction="next"
            >
              {pageContext.next.frontmatter.title ?? 'Next'}
            </PostNavigation.Link>
          )}
        </PostNavigation>
      </Page>
    </Site>
  );
};

export default PostTemplate;

export const Head: React.FC<{ data: any }> = ({ data }) => (
  <Seo
    title={data.postData?.frontmatter?.title}
    description={data.postData?.frontmatter?.description}
    siteData={data.siteData}
  />
);

export const query = graphql`
  query Post($slug: String!) {
    postData: mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        category
        showToc
        description
        updated
      }
      tableOfContents
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
