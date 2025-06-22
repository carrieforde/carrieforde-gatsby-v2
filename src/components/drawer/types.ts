import { Position } from '@/types/position';

type DrawerVariant = 'standard' | 'nudge';

export type DrawerProps = React.PropsWithChildren<{
  /**
   * Button Ref is needed to return focus to the button once the drawer is closed.
   */
  buttonRef: React.RefObject<HTMLButtonElement>;
  variant?: DrawerVariant;
  isOpen: boolean;
  position?: Position;
  onClose: () => void;
}>;
