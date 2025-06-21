import { Meta, StoryObj } from "@storybook/react";

import { Card } from "@/components/card/card";
import { Link } from "@/components/link/link";
import { Text } from "@/components/text/text";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    children: [
      <Card.Header key="header">
        <Link href="/javascript" variant="overline">
          JavaScript
        </Link>
        <Card.Title href="/dynamic-data-merge-fields">
          Inject dynamic data into static content with merge fields
        </Card.Title>

        <Card.Meta date="March 08, 2021" timeToRead={9} />
      </Card.Header>,
      <Text key="content">
        Last year, I worked on upgrading one of our consumer-facing applications
        from a standard Angular application with static content hard-coded…
      </Text>,
    ],
  },
};
