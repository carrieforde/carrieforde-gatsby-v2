import { Meta, StoryObj } from "@storybook/react";

import { Timestamp } from "@/components/timestamp/timestamp";

const meta: Meta<typeof Timestamp> = {
  title: "Components/Timestamp",
  component: Timestamp,
};

export default meta;

type Story = StoryObj<typeof Timestamp>;

export const Primary: Story = {
  args: {
    date: new Date("2021-03-08T00:00:00Z"),
  },
};

export const Short: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    format: "short",
  },
};

export const UpdatedAt: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    updatedAt: new Date("2021-03-09T00:00:00Z"),
  },
};

export const FinePrint: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    variant: "finePrint",
  },
};
