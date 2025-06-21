import clsx from 'clsx';
import * as React from 'react';

import * as s from '@/components/toggle/plus-minus-toggle/plus-minus-toggle.module.css';
import { ToggleProps } from '@/components/toggle/types';

export const PlusMinusToggle: React.FC<ToggleProps> = ({ toggled }) => {
  const verticalBar = clsx(
    'plus-minus-toggle',
    s.plusMinusBar,
    s.plusMinusVertical,
    {
      [s.plusMinusVerticalToggled]: toggled,
    },
  );
  const horiztonalBar = clsx(s.plusMinusBar);

  return (
    <span className={s.plusMinus}>
      <span className={verticalBar} />
      <span className={horiztonalBar} />
    </span>
  );
};
