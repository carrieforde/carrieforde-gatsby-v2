import * as React from 'react';

import { HeadProps } from '@/components/head/types';

export const Head: React.FC<HeadProps> = ({
  children,
  title,
  description,
  siteData: site,
}) => {
  const titleText = [title, site?.siteMetadata?.title].join(' | ');
  const metaTitle = title ?? site?.siteMetadata?.title ?? '';
  const metaDescription = description?.join(' ') ?? '';
  const author = site?.siteMetadata?.author ?? '';

  return (
    <>
      <link href="https://fonts.gstatic.com" rel="preconnect" />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Libre+Franklin:ital,wght@0,300;0,400;0,500;1,400&display=swap"
        rel="stylesheet"
      />

      <title>{titleText}</title>

      <meta content={metaDescription} name="description" />
      <meta content={metaTitle} name="og:title" />
      <meta content={metaDescription} name="og:description" />
      <meta content="website" name="og:type" />
      <meta content="summary" name="twitter:card" />
      <meta content={author} name="twitter:creator" />
      <meta content={metaTitle} name="twitter:title" />
      <meta content={metaDescription} name="twitter:description" />

      <html lang="en" />

      {children}
    </>
  );
};
