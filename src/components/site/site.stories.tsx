import { Meta, StoryObj } from "@storybook/react";

import { Logo } from "@/assets/logo/logo";
import { IconEnvelope } from "@/components/icons/icon-envelope";
import { IconGithub } from "@/components/icons/icon-github";
import { IconLinkedin } from "@/components/icons/icon-linkedin";
import { Link } from "@/components/link/link";
import { List } from "@/components/list/list";
import { Menu } from "@/components/menu/menu";
import { Site } from "@/components/site/site";
import { Tabs } from "@/components/tabs/tabs";
import { Text } from "@/components/text/text";
import { VisuallyHidden } from "@/components/visually-hidden/visually-hidden";

const meta: Meta<typeof Site> = {
  title: "Components/Site",
  component: Site,
};

export default meta;

type Story = StoryObj<typeof Site>;

export const Primary: Story = {
  args: {
    children: [
      <Site.Header key="header">
        <Link href="#main" variant="skipLink">
          Skip to content
        </Link>
        <Site.Branding siteName="Carrie Forde">
          <Logo />
        </Site.Branding>
        <Site.Navigation>
          <Menu.Item key="about" href="/about">
            About
          </Menu.Item>

          <Menu.Item key="experience" href="/experience">
            Experience
          </Menu.Item>

          <Menu.Item key="blog" href="/blog">
            Blog
          </Menu.Item>
        </Site.Navigation>
      </Site.Header>,
      <Site.Main key="main">
        <Text variant="title">Hello, I&apos;m Carrie 👋</Text>
        <Text variant="subtitle">
          I am a front end software engineer in San Mateo, California. With a
          background in business analysis, I bring a unique set of skills that
          helps me understand how the features I build bring value to end users.
        </Text>
        <Text variant="subtitle">
          Send me a message{" "}
          <Link href="mailto:carrie@carrieforde.com">
            carrie@carrieforde.com
          </Link>
        </Text>
        <Text>
          My background in business analysis has equipped me with a unique set
          of skills that allows me to understand the business impact of our
          features. Before implementation begins, I work with product management
          to understand the hypothesis (e.g. decrease in drop-off at point x),
          how we&apos;ll be tracking metrics, and the definition of success.
          Teasing out this information ensures we&apos;re tracking feature
          performance from day one, and helps fight shiny object syndrome. 🙃
        </Text>
        <Text>
          I currently work at Freedom Financial Network where I deliver front
          end features for Lendage&apos;s platform and consumer experience.
        </Text>
        <Text>I reach for these technologies on a daily basis:</Text>
        <List>
          <List.Item>React</List.Item>
          <List.Item>Typescript</List.Item>
          <List.Item>HTML</List.Item>
          <List.Item>CSS</List.Item>
          <List.Item>Node.js</List.Item>
          <List.Item>Git</List.Item>
        </List>
        <Text as="h2">Experience</Text>
        <Tabs defaultTab="valon">
          <Tabs.List ariaLabel="Experience">
            <Tabs.Button id="valon">Valon</Tabs.Button>
            <Tabs.Button id="rivian">Rivian</Tabs.Button>
            <Tabs.Button id="ffn">Freedom Financial Network</Tabs.Button>
            <Tabs.Button id="wds">WebDevStudios</Tabs.Button>
            <Tabs.Button id="mm">MIGHTYminnow</Tabs.Button>
            <Tabs.Button id="cisco">Cisco</Tabs.Button>
          </Tabs.List>

          <Tabs.Panel key="valon" id="valon">
            <Text component="h3">Senior Software Engineer @ Valon</Text>
            <Text variant="finePrint">
              NYC, NY (remote) ▸ Sept 2022 - Present
            </Text>
          </Tabs.Panel>
          <Tabs.Panel key="rivian" id="rivian">
            <Text component="h3">Senior Software Engineer @ Rivian</Text>
            <Text variant="finePrint">
              Palo Alto, CA ▸ Feb 2022 - July 2022
            </Text>
          </Tabs.Panel>
          <Tabs.Panel key="ffn" id="ffn">
            <Text component="h3">
              Senior Software Engineer @ Freedom Financial Network
            </Text>
            <Text variant="finePrint">
              San Mateo, CA ▸ June 2018 - Feb 2022
            </Text>
          </Tabs.Panel>
          <Tabs.Panel key="wds" id="wds">
            <Text component="h3">
              Senior Front End Developer @ WebDevStudios
            </Text>
            <Text variant="finePrint">
              Glenside, PA (remote) ▸ June 2016 - Aug 2017
            </Text>
          </Tabs.Panel>
          <Tabs.Panel key="mm" id="mm">
            <Text component="h3">
              Front End Developer & Designer @ MIGHTYminnow
            </Text>
            <Text variant="finePrint">Oakland, CA ▸ July 2016 - Feb 2017</Text>
          </Tabs.Panel>
          <Tabs.Panel key="cisco" id="cisco">
            <Text component="h3">Business Process Analyst @ Cisco</Text>
            <Text variant="finePrint">Feltham, UK ▸ Oct 2009 - Nov 2013</Text>

            <Text component="h3">Business Analyst @ Cisco</Text>
            <Text variant="finePrint">San Jose, CA ▸ Jan 2006 - Oct 2009</Text>
            <Text>
              Maintained $1.4B renewal base in the Americas; provided renewal
              opportunity reports to stakeholders. Ensured accurate visibility
              of renewal opportunities to stakeholders in the sales
              organization.
            </Text>
            <List>
              <List.Item>
                Mentored and trained contractor team members; shared best
                practices for renewal base management and reporting
              </List.Item>
              <List.Item>
                Performed root cause analysis to identify issues with renewal
                opportunity management tools, and worked with global IT for
                quick resolution to problems
              </List.Item>
            </List>
          </Tabs.Panel>
        </Tabs>
      </Site.Main>,
      <Site.Footer key="footer">
        <Text variant="finePrint">
          <Link>Privacy</Link> &bull; Copyright © 2013 &ndash;{" "}
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
      </Site.Footer>,
    ],
  },
  name: "Default",
};
