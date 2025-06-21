import * as React from 'react';

import { Box } from '@/components/box/box';
import { Link } from '@/components/link/link';
import { Menu } from '@/components/menu/menu';
import * as s from '@/components/site/site.module.css';
import {
  SiteBrandingProps,
  SiteComposition,
  SiteFooterProps,
  SiteHeaderProps,
  SiteMainProps,
  SiteNavigationProps,
  SiteProps,
} from '@/components/site/types';
import { VisuallyHidden } from '@/components/visually-hidden/visually-hidden';
import { Text } from '@/components/text/text';
import { IconEnvelope } from '@/components/icons/icon-envelope';
import { IconLinkedin } from '@/components/icons/icon-linkedin';
import { IconGithub } from '@/components/icons/icon-github';
import { Logo } from '@/components/logo/logo';

/**
 * @todo Move skip link here.
 * @todo Add main
 * @todo Add footer
 */

export const Site: React.FC<SiteProps> & SiteComposition = ({ children }) => (
  <Box className={s.site}>
    <Site.Header>
      <Site.Branding siteName="Carrie Forde">
        <Logo />
      </Site.Branding>
      <Site.Navigation>
        <Menu.Item href="/about">About</Menu.Item>
        <Menu.Item href="/experience">Experience</Menu.Item>
        <Menu.Item href="/blog">Blog</Menu.Item>
      </Site.Navigation>
    </Site.Header>
    <Site.Main>{children}</Site.Main>
    <Site.Footer key="footer">
      <Text variant="finePrint">
        <Link href="/privacy">Privacy</Link> &bull; Copyright © 2013 &ndash;{' '}
        {new Date().getFullYear()} Carrie Forde.
      </Text>
      <Menu>
        <Menu.Item key="email" href="mailto:carrie@carrieforde.com">
          <IconEnvelope />
          <VisuallyHidden>Email</VisuallyHidden>
        </Menu.Item>

        <Menu.Item key="linkedIn" href="https://linkedin.com/in/carrieforde">
          <IconLinkedin />
          <VisuallyHidden>LinkedIn</VisuallyHidden>
        </Menu.Item>

        <Menu.Item key="github" href="https://github.com/carrieforde">
          <IconGithub />
          <VisuallyHidden>GitHub</VisuallyHidden>
        </Menu.Item>
      </Menu>
    </Site.Footer>
  </Box>
);

const Header: React.FC<SiteHeaderProps> = ({ children }) => (
  <Box as="header" className={s.header}>
    {children}
  </Box>
);

const Branding: React.FC<SiteBrandingProps> = ({
  children,
  homepagePath = '/',
  siteName,
}) => (
  <Box className={s.branding}>
    <Link href={homepagePath}>{children}</Link>
    <VisuallyHidden>{siteName}</VisuallyHidden>
  </Box>
);

const Navigation: React.FC<SiteNavigationProps> = ({ children }) => (
  <Box as="nav" className={s.navigation}>
    <Menu>{children}</Menu>
  </Box>
);

const Main: React.FC<SiteMainProps> = ({ children }) => (
  <Box as="main" className={s.main}>
    {children}
  </Box>
);

const Footer: React.FC<SiteFooterProps> = ({ children }) => (
  <Box as="footer" className={s.footer}>
    {children}
  </Box>
);

Site.Branding = Branding;
Site.Header = Header;
Site.Navigation = Navigation;
Site.Main = Main;
Site.Footer = Footer;
