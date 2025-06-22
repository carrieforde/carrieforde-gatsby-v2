import { Site } from '@/components/site/site';
import { graphql } from 'gatsby';
import * as React from 'react';
import { Head as Seo } from '@/components/head/head';

const PostTemplate = () => <Site>Post</Site>;

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
