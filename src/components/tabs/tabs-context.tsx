import * as React from "react";

import { TabsContextProps } from "@/components/tabs/types";

export const TabsContext = React.createContext<TabsContextProps>({
  activeTab: "",
  setActiveTab: undefined,
});

export function useTabs(id: string) {
  const { activeTab, setActiveTab } = React.useContext(TabsContext);
  const isActive = activeTab === id;

  if (!setActiveTab) {
    throw new Error("useTabs must be used inside a Tabs component!");
  }

  return { setActiveTab, isActive };
}
