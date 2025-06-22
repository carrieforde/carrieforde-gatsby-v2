type SpinnerSize = 'small' | 'medium' | 'large';

export type SpinnerProps = {
  color?: 'neutral' | 'primary' | 'secondary';
  size?: SpinnerSize;
  className?: string;
};
