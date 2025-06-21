import { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Button } from "@/components/button/button";
import { DrawerProps } from "@/components/drawer/types";
import { Text } from "@/components/text/text";
import { usePortalState } from "@/hooks/use-portal-state";

import { Drawer } from "./drawer";

const Wrapper: React.FC<DrawerProps> = (args) => {
  const { open, isOpen, close } = usePortalState();
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div>
      <Button type="button" onClick={open} ref={buttonRef}>
        Open Drawer
      </Button>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <Drawer {...args} buttonRef={buttonRef} isOpen={isOpen} onClose={close} />
    </div>
  );
};

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
} as Meta;

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {
  render: (args) => <Wrapper {...args} />,
  args: {
    children: "Drawer Contents",
  },
};

export const Nudge: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    variant: "nudge",
  },
};
