import { cn } from '../../utils';

interface SizeSelectorProps {
  sizes: string[];
  selectedSize?: string;
  onSelect?: (size: string) => void;
  disabledSizes?: string[];
  variant?: 'default' | 'compact';
  className?: string;
}

export const SizeSelector = ({
  sizes,
  selectedSize,
  onSelect,
  disabledSizes = [],
  variant = 'default',
  className,
}: SizeSelectorProps) => {
  const isCompact = variant === 'compact';

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {sizes.map((size) => {
        const isDisabled = disabledSizes.includes(size);
        const isSelected = selectedSize === size;

        return (
          <button
            key={size}
            type="button"
            onClick={() => !isDisabled && onSelect?.(size)}
            disabled={isDisabled}
            aria-pressed={isSelected}
            className={cn(
              'font-medium rounded-lg border-2 transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-1',
              isCompact ? 'px-3 py-1.5 text-sm' : 'px-4 py-2 text-base min-w-[48px]',
              isSelected && !isDisabled && 'bg-primary border-primary text-white',
              !isSelected && !isDisabled && 'border-gray-200 hover:border-primary hover:text-primary bg-white',
              isDisabled && 'border-gray-100 text-gray-300 cursor-not-allowed bg-gray-50'
            )}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
};
