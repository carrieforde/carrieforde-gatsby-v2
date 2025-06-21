import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "@/components/text/text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Body1: Story = {
  args: {
    variant: "body1",
    children: "The quick brown fox jumped over the lazy dog.",
  },
};

export const Body2: Story = {
  args: {
    ...Body1.args,
    variant: "body2",
  },
};

export const Title: Story = {
  args: {
    ...Body1.args,
    variant: "title",
  },
};

export const Subtitle: Story = {
  args: {
    ...Body1.args,
    variant: "subtitle",
  },
};

export const Overline: Story = {
  args: {
    ...Body1.args,
    variant: "overline",
  },
};

export const CustomAs: Story = {
  args: {
    children: "Google",
    as: "a",
    href: "https://google.com",
    variant: "overline",
  },
};

export const Playground: Story = {
  // ...Body1,
  args: {
    ...Body1.args,
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
};
