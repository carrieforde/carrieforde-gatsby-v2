import { Site } from '@/components/site/site';
import { graphql } from 'gatsby';
import * as React from 'react';
import { Head as Seo } from '@/components/head/head';
import { PostTemplateProps } from '@/templates/post/types';
import { Page } from '@/components/page/page';
import { Link } from '@/components/link/link';
import { getCategoryLink, parseQueryString } from '@/utils/utils';
import { MergeFieldProvider } from '@/components/merge-field/merge-field-provider';
import { PostNavigation } from '@/components/post-navigation/post-navigation';

const PostTemplate: React.FC<PostTemplateProps> = ({
  children,
  data,
  location,
  pageContext,
}) => {
  if (!data.postData?.frontmatter) {
    return null;
  }

  const { category, title, description, date, updated } =
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
        {children}
        <PostNavigation>
          {pageContext.previous?.fields.slug && (
            <PostNavigation.Link
              href={pageContext.previous.fields.slug}
              direction="previous"
            >
              Previous
            </PostNavigation.Link>
          )}
          {pageContext.next?.fields.slug && (
            <PostNavigation.Link
              href={pageContext.next.fields.slug}
              direction="next"
            >
              Next
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
