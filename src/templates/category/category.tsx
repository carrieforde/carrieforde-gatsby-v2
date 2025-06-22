import { Site } from '@/components/site/site';
import { graphql } from 'gatsby';
import * as React from 'react';
import { Head as Seo } from '@/components/head/head';

const CategoryTemplate = () => <Site>Category</Site>;

export default CategoryTemplate;

export const Head: React.FC<{ data: any }> = ({ data }) => (
  <Seo
    title={data.pageData?.frontmatter?.title}
    description={data.pageData?.frontmatter?.description}
    siteData={data.siteData}
  />
);

export const query = graphql`
  query Category($category: String!) {
    categoryData: allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { frontmatter: { date: DESC } }
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
