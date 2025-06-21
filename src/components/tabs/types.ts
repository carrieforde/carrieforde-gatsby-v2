import * as React from "react";

type TabVariant = "horizontal" | "vertical";

export type TabsContextProps = {
  activeTab: string;
  setActiveTab?: React.Dispatch<React.SetStateAction<string>>;
};

export type TabsProps = React.PropsWithChildren<{
  variant?: TabVariant;
  defaultTab: string;
}>;

export type TabListProps = React.PropsWithChildren<{
  ariaLabel: string;
}>;

export type TabButtonProps = React.PropsWithChildren<{
  id: string;
}>;

export type TabPanelProps = React.PropsWithChildren<{
  id: string;
}>;

export interface TabsComposition {
  List: React.FC<TabListProps>;
  Button: React.FC<TabButtonProps>;
  Panel: React.FC<TabPanelProps>;
}
