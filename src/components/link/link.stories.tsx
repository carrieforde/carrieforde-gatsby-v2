import { Meta, StoryObj } from "@storybook/react";

import { Link } from "@/components/link/link";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    children: "Visit Google",
    href: "https://www.google.com",
  },
};

export const Navigation: Story = {
  args: {
    children: "About Me",
    variant: "navigation",
    href: "/about",
  },
};

export const SkipLink: Story = {
  args: {
    children: "Skip to Content",
    variant: "skipLink",
    href: "#content",
  },
};

export const Overline: Story = {
  args: {
    children: "Development",
    variant: "overline",
    href: "/development",
  },
};
