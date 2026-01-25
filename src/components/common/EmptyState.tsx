import type { ReactNode } from 'react';
import { cn } from '../../utils';
import { Button } from '../ui/Button';

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export const EmptyState = ({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) => {
  return (
    <div className={cn('flex flex-col items-center justify-center py-16 px-4 text-center', className)}>
      {icon && (
        <div className="mb-6 text-gray-300">
          {icon}
        </div>
      )}

      <h3 className="font-heading text-xl font-bold text-text-primary mb-2">
        {title}
      </h3>

      {description && (
        <p className="text-text-light max-w-sm mb-6">
          {description}
        </p>
      )}

      {action && (
        <Button onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  );
};
