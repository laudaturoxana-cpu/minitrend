import { cn } from '../../utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  className?: string;
}

const sizes = {
  sm: 'w-4 h-4 border-2',
  md: 'w-8 h-8 border-3',
  lg: 'w-12 h-12 border-4',
};

const colors = {
  primary: 'border-primary/20 border-t-primary',
  secondary: 'border-secondary/20 border-t-secondary',
  white: 'border-white/20 border-t-white',
};

export const LoadingSpinner = ({
  size = 'md',
  color = 'primary',
  className,
}: LoadingSpinnerProps) => {
  return (
    <div
      role="status"
      aria-label="Se încarcă..."
      className={cn(
        'rounded-full animate-spin',
        sizes[size],
        colors[color],
        className
      )}
    />
  );
};

interface LoadingOverlayProps {
  visible?: boolean;
  fullScreen?: boolean;
  className?: string;
}

export const LoadingOverlay = ({
  visible = true,
  fullScreen = false,
  className,
}: LoadingOverlayProps) => {
  if (!visible) return null;

  return (
    <div
      className={cn(
        'flex items-center justify-center bg-white/80 backdrop-blur-sm',
        fullScreen ? 'fixed inset-0 z-50' : 'absolute inset-0',
        className
      )}
    >
      <LoadingSpinner size="lg" />
    </div>
  );
};
