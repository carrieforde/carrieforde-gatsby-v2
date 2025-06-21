import { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "@/components/tabs/tabs";
import { Text } from "@/components/text/text";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Horizontal: Story = {
  args: {
    defaultTab: "rivian",
    children: [
      <Tabs.List key="experience" ariaLabel="Experience">
        <Tabs.Button id="rivian">Rivian</Tabs.Button>
        <Tabs.Button id="ffn">Freedom Financial Network</Tabs.Button>
        <Tabs.Button id="wds">WebDevStudios</Tabs.Button>
        <Tabs.Button id="mm">MIGHTYminnow</Tabs.Button>
        <Tabs.Button id="cisco">Cisco</Tabs.Button>
      </Tabs.List>,

      <Tabs.Panel key="rivian" id="rivian">
        <Text component="h3">Senior Software Engineer</Text>
      </Tabs.Panel>,

      <Tabs.Panel key="ffn" id="ffn">
        <Text component="h3">Staff Software Engineer</Text>
      </Tabs.Panel>,

      <Tabs.Panel key="wds" id="wds">
        <Text component="h3">Software Engineer</Text>
      </Tabs.Panel>,

      <Tabs.Panel key="mm" id="mm">
        <Text component="h3">Software Engineer</Text>
      </Tabs.Panel>,

      <Tabs.Panel key="cisco" id="cisco">
        <Text component="h3">Product Manager</Text>
      </Tabs.Panel>,
    ],
  },
};

export const Vertical: Story = {
  args: {
    ...Horizontal.args,
    variant: "vertical",
  },
};
