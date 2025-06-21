import clsx from 'clsx';
import * as React from 'react';

import { IconChevronDown } from '@/components/icons/icon-chevron-down';
import * as s from '@/components/toggle/chevron-toggle/chevron-toggle.module.css';
import { ToggleProps } from '@/components/toggle/types';

export const ChevronToggle: React.FC<ToggleProps> = ({ toggled }) => {
  const toggleClasses = clsx('chevron-toggle', s.chevronToggle, {
    [s.toggled]: toggled,
  });

  return (
    <span className={toggleClasses}>
      <IconChevronDown />
    </span>
  );
};
