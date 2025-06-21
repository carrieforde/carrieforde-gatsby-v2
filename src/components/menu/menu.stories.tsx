import { Meta, StoryObj } from "@storybook/react";

import { IconEnvelope } from "@/components/icons/icon-envelope";
import { IconGithub } from "@/components/icons/icon-github";
import { IconLinkedin } from "@/components/icons/icon-linkedin";
import { Menu } from "@/components/menu/menu";
import { VisuallyHidden } from "@/components/visually-hidden/visually-hidden";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Primary: Story = {
  args: {
    children: [
      <Menu.Item key="about" href="/about">
        About
      </Menu.Item>,
      <Menu.Item key="experience" href="/experience" isActive>
        Experience
      </Menu.Item>,
      <Menu.Item key="blog" href="/blog">
        Blog
      </Menu.Item>,
    ],
  },
};

export const WithIcons: Story = {
  args: {
    children: [
      <Menu.Item key="email" href="mailto:carrie@carrieforde.com">
        <IconEnvelope />
        <VisuallyHidden>Email</VisuallyHidden>
      </Menu.Item>,
      <Menu.Item key="linkedIn" href="https://linkedin.com/in/carrieforde">
        <IconLinkedin />
        <VisuallyHidden>LinkedIn</VisuallyHidden>
      </Menu.Item>,
      <Menu.Item key="github" href="https://github.com/carrieforde">
        <IconGithub />
        <VisuallyHidden>GitHub</VisuallyHidden>
      </Menu.Item>,
    ],
    variant: "icon",
  },
};
