import * as React from 'react';
import { Head as Seo } from '@/components/head/head';
import { graphql, Link } from 'gatsby';
import {
  CatsTemplateHeadProps,
  CatsTemplateProps,
} from '@/templates/cats/types';
import { Page } from '@/components/page/page';
import { Site } from '@/components/site/site';
import { List } from '@/components/list/list';
import { Card } from '@/components/card/card';
import * as s from '@/templates/cats/cats.module.css';

const CatsTemplate: React.FC<CatsTemplateProps> = ({ data }) => {
  return (
    <Site>
      <Page>
        <Page.Title>Cats</Page.Title>
        <Page.Description
          description={['Learn about the furry members of the Forde family.']}
        />

        <List as="ul" variant="reset">
          {data.catData.nodes.map((node) => {
            if (!node.fields?.slug || !node.frontmatter) {
              return null;
            }

            const { slug } = node.fields;
            const { name, nicknames, adoptionDate, coverImage } =
              node.frontmatter;

            return (
              <List.Item key={node.id} className={s.entry}>
                <Card image={coverImage?.publicURL}>
                  <Card.Header>
                    {name && <Card.Title href={slug}>{name}</Card.Title>}
                  </Card.Header>
                </Card>
              </List.Item>
            );
          })}
        </List>
      </Page>
    </Site>
  );
};

export default CatsTemplate;

export const Head: React.FC<CatsTemplateHeadProps> = ({ data }) => (
  <Seo
    title="Cats"
    description={['Learn about the furry members of the Forde family.']}
    siteData={data.siteData}
  />
);

export const query = graphql`
  query Cats {
    catData: allMdx(
      filter: { internal: { contentFilePath: { regex: "/cats/" } } }
      sort: { frontmatter: { adoptionDate: ASC } }
    ) {
      nodes {
        frontmatter {
          adoptionDate
          coverImage {
            publicURL
          }
          name
          nicknames
        }
        id
        excerpt
        fields {
          slug
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
