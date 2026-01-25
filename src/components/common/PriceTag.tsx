import { cn } from '../../utils';
import { formatPrice } from '../../utils/formatters';

interface PriceTagProps {
  price: number;
  originalPrice?: number;
  size?: 'sm' | 'md' | 'lg';
  showDiscount?: boolean;
  className?: string;
}

const sizes = {
  sm: { current: 'text-base font-semibold', original: 'text-xs', badge: 'text-xs px-1.5 py-0.5' },
  md: { current: 'text-xl font-bold', original: 'text-sm', badge: 'text-xs px-2 py-1' },
  lg: { current: 'text-2xl font-bold', original: 'text-base', badge: 'text-sm px-2.5 py-1' },
};

export const PriceTag = ({
  price,
  originalPrice,
  size = 'md',
  showDiscount = true,
  className,
}: PriceTagProps) => {
  const sizeConfig = sizes[size];
  const hasDiscount = originalPrice && originalPrice > price;
  const discountPercent = hasDiscount
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className={cn('flex items-center gap-2 flex-wrap', className)}>
      <span className={cn('text-primary', sizeConfig.current)}>
        {formatPrice(price)}
      </span>

      {hasDiscount && (
        <>
          <span className={cn('text-text-light line-through', sizeConfig.original)}>
            {formatPrice(originalPrice)}
          </span>
          {showDiscount && (
            <span className={cn('bg-error/10 text-error rounded-full font-medium', sizeConfig.badge)}>
              -{discountPercent}%
            </span>
          )}
        </>
      )}
    </div>
  );
};
