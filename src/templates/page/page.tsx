import { Site } from '@/components/site/site';
import {
  PageTemplateHeadProps,
  PageTemplateProps,
} from '@/templates/page/types';
import { graphql } from 'gatsby';
import * as React from 'react';
import { Head as Seo } from '@/components/head/head';
import { Page } from '@/components/page/page';

const PageTemplate: React.FC<PageTemplateProps> = ({ children, data }) => (
  <Site>
    <Page>
      <Page.Title>{data.pageData?.frontmatter?.title}</Page.Title>
      <Page.Description description={data.pageData?.frontmatter?.description} />
    </Page>

    {children}
  </Site>
);

export default PageTemplate;

export const Head: React.FC<PageTemplateHeadProps> = ({ data }) => (
  <Seo
    title={data.pageData?.frontmatter?.title}
    description={data.pageData?.frontmatter?.description}
    siteData={data.siteData}
  />
);

export const query = graphql`
  query Page($slug: String!) {
    pageData: mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
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
