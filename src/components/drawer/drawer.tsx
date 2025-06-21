'use client';

import clsx from 'clsx';
import * as React from 'react';
import { createPortal } from 'react-dom';

import { Button } from '@/components/button/button';
import * as s from '@/components/drawer/drawer.module.css';
import { DrawerProps } from '@/components/drawer/types';
import { IconXMark } from '@/components/icons/icon-xmark';

/**
 * @todo Make widths configurable in the theme.
 * @todo Clean up all the useEffects :sob:
 */
export const Drawer: React.FC<DrawerProps> = ({
  buttonRef,
  children,
  isOpen,
  onClose,
  variant = 'default',
}) => {
  const contentRef = React.useRef<HTMLDivElement>(null);

  const classes = clsx(s.drawer, s.left, {
    [s.open]: isOpen,
  });

  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keyup', handleEsc);

    return () => {
      document.removeEventListener('keyup', handleEsc);
    };
  }, [onClose]);

  React.useEffect(() => {
    const htmlClasses = document.documentElement.classList;
    const bodyClasses = document.body.classList;

    document.documentElement.style.setProperty('--drawer-width', `400px`);

    if (isOpen && variant !== 'nudge') {
      htmlClasses.add(s.drawerNoScroll);
    } else if (htmlClasses.contains(s.drawerNoScroll)) {
      htmlClasses.remove(s.drawerNoScroll);
    }

    if (variant === 'nudge') {
      bodyClasses.add(s.nudge);
      document.documentElement.style.setProperty(
        '--body-width',
        `${document.body.clientWidth}px`,
      );

      if (isOpen) {
        bodyClasses.add(s.nudgeOpen);
      } else {
        bodyClasses.remove(s.nudgeOpen);
      }
    }

    return () => {
      if (bodyClasses.contains(s.nudge)) {
        bodyClasses.remove(s.nudge);
      }

      if (htmlClasses.contains(s.drawerNoScroll)) {
        htmlClasses.remove(s.drawerNoScroll);
      }
    };
  }, [isOpen, variant]);

  React.useEffect(() => {
    const button = buttonRef.current;
    if (isOpen && contentRef.current) {
      contentRef.current.focus();
    }

    return () => {
      button?.focus();
    };
  }, [isOpen, buttonRef]);

  return createPortal(
    <div className={classes}>
      <Button
        className={s.button}
        type="button"
        variant="icon"
        onClick={onClose}
      >
        <IconXMark />
      </Button>

      <div ref={contentRef} tabIndex={isOpen ? -1 : undefined}>
        {children}
      </div>
    </div>,
    document.body,
  );
};
