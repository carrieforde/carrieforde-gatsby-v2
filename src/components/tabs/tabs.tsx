import clsx from 'clsx';
import * as React from 'react';

import { Button } from '@/components/button/button';
import { TabsContext, useTabs } from '@/components/tabs/tabs-context';
import * as s from '@/components/tabs/tabs.module.css';
import {
  TabButtonProps,
  TabListProps,
  TabPanelProps,
  TabsComposition,
  TabsProps,
} from '@/components/tabs/types';

export const Tabs: React.FC<TabsProps> & TabsComposition = ({
  children,
  defaultTab,
  variant = 'horizontal',
}) => {
  const [activeTab, setActiveTab] = React.useState(defaultTab);

  const classes = clsx(s.tabs, variant === 'vertical' && s.vertical);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={classes}>{children}</div>
    </TabsContext.Provider>
  );
};

const TabList: React.FC<TabListProps> = ({ children, ariaLabel }) => {
  return (
    <div role="tablist" aria-label={ariaLabel} className={s.tabList}>
      {children}
    </div>
  );
};

const TabButton: React.FC<TabButtonProps> = ({ id, children }) => {
  const { setActiveTab, isActive } = useTabs(id);

  const handleClick = React.useCallback(
    () => setActiveTab(id),
    [id, setActiveTab],
  );

  const className = clsx(s.tabButton, {
    [s.isActive]: isActive,
  });

  return (
    <Button
      type="button"
      id={id}
      onClick={handleClick}
      aria-controls={`${id}-panel`}
      aria-selected={isActive}
      tabIndex={-1}
      role="tab"
      className={className}
      color={isActive ? 'primary' : 'default'}
    >
      {children}
    </Button>
  );
};

const TabPanel: React.FC<TabPanelProps> = ({ id, children }) => {
  const { isActive } = useTabs(id);

  return (
    <div
      id={`${id}-panel`}
      role="tabpanel"
      aria-labelledby={id}
      hidden={!isActive}
      className={s.tabPanel}
    >
      {children}
    </div>
  );
};

Tabs.List = TabList;
Tabs.Button = TabButton;
Tabs.Panel = TabPanel;
