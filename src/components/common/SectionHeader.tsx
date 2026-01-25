import type { ReactNode } from 'react';
import { cn } from '../../utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader = ({
  title,
  subtitle,
  action,
  align = 'center',
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        'mb-8 md:mb-12',
        align === 'center' && 'text-center',
        className
      )}
    >
      <div className={cn(
        'flex flex-col gap-4',
        align === 'left' && 'md:flex-row md:items-end md:justify-between'
      )}>
        <div>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-text-light max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>

        {action && (
          <div className={cn(align === 'center' && 'mt-4')}>
            {action}
          </div>
        )}
      </div>
    </div>
  );
};
