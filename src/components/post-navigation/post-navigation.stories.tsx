import { Meta, StoryObj } from "@storybook/react";

import { PostNavigation } from "@/components/post-navigation/post-navigation";

const meta: Meta<typeof PostNavigation> = {
  title: "Components/Post Navigation",
  component: PostNavigation,
};

export default meta;

type Story = StoryObj<typeof PostNavigation>;

export const Primary: Story = {
  args: {
    children: [
      <PostNavigation.Link key="prev" direction="previous" href="/prev">
        Inject dynamic data into static content with merge fields
      </PostNavigation.Link>,
      <PostNavigation.Link key="next" direction="next" href="/next">
        Recap: JAMstack Conf SF
      </PostNavigation.Link>,
    ],
  },
};

export const PreviousOnly: Story = {
  args: {
    children: [
      <PostNavigation.Link key="prev" direction="previous" href="/prev">
        Inject dynamic data into static content with merge fields
      </PostNavigation.Link>,
    ],
  },
};

export const NextOnly: Story = {
  args: {
    children: [
      <PostNavigation.Link key="next" direction="next" href="/next">
        Recap: JAMstack Conf SF
      </PostNavigation.Link>,
    ],
  },
};
