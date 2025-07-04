import { Button } from '@/components/button/button';
import { Drawer } from '@/components/drawer/drawer';
import { Head as Seo } from '@/components/head/head';
import { Link } from '@/components/link/link';
import { Page } from '@/components/page/page';
import { PostNavigation } from '@/components/post-navigation/post-navigation';
import { Site } from '@/components/site/site';
import { TableOfContents } from '@/components/table-of-contents/table-of-contents';
import { TableOfContentsItem } from '@/components/table-of-contents/types';
import { Text } from '@/components/text/text';
import { usePortalState } from '@/hooks/use-portal-state';
import { PostTemplateProps } from '@/templates/post/types';
import { getCategoryLink } from '@/utils/utils';
import { graphql } from 'gatsby';
import * as React from 'react';
import * as s from '@/templates/post/post.module.css';
import { VisuallyHidden } from '@/components/visually-hidden/visually-hidden';
import { IconList } from '@/components/icons/icon-list';

const PostTemplate: React.FC<PostTemplateProps> = ({
  children,
  data,
  location,
  pageContext,
}) => {
  const { close, isOpen, open } = usePortalState();
  const buttonRef = React.useRef<HTMLButtonElement>(null);

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
        {showToc && data.postData.tableOfContents && (
          <>
            <Button
              ref={buttonRef}
              variant="icon"
              color="primary"
              onClick={open}
              className={s.tocButton}
            >
              <IconList />
              <VisuallyHidden>Table of Contents</VisuallyHidden>
            </Button>
            <Drawer buttonRef={buttonRef} isOpen={isOpen} onClose={close}>
              <Text as="h2">Table of Contents</Text>
              <TableOfContents
                items={
                  data.postData.tableOfContents.items as TableOfContentsItem[]
                }
                onClick={close}
              />
            </Drawer>
          </>
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
