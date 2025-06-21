import { Meta, StoryObj } from "@storybook/react";

import { MergeField } from "@/components/merge-field/merge-field";
import { MergeFieldProvider } from "@/components/merge-field/merge-field-provider";
import { MergeFieldProps } from "@/components/merge-field/types";

const Wrapper: React.FC<MergeFieldProps> = (args) => (
  <MergeFieldProvider data={{ name: "Carrie" }}>
    <MergeField {...args} />
  </MergeFieldProvider>
);

const meta: Meta<typeof MergeField> = {
  title: "Components/MergeField",
  component: MergeField,
};

export default meta;

type Story = StoryObj<typeof MergeField>;

export const Primary: Story = {
  render: (args) => <Wrapper {...args} />,
  args: {
    text: "Hello, {{name}}!",
  },
};

export const WithDefaultValue: Story = {
  ...Primary,
  args: {
    text: "I use {{technologies|HTML, CSS, Javascript}} to build websites.",
  },
};
