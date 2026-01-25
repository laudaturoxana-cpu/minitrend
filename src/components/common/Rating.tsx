import { Star, StarHalf } from 'lucide-react';
import { cn } from '../../utils';

interface RatingProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  reviewCount?: number;
  className?: string;
}

const sizes = {
  sm: { icon: 14, text: 'text-xs' },
  md: { icon: 18, text: 'text-sm' },
  lg: { icon: 22, text: 'text-base' },
};

export const Rating = ({
  value,
  max = 5,
  size = 'md',
  showValue = false,
  reviewCount,
  className,
}: RatingProps) => {
  const sizeConfig = sizes[size];
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.5;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn('inline-flex items-center gap-1.5', className)}>
      <div className="flex items-center">
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            size={sizeConfig.icon}
            className="text-yellow-400 fill-yellow-400"
          />
        ))}

        {/* Half star */}
        {hasHalfStar && (
          <div className="relative">
            <Star size={sizeConfig.icon} className="text-gray-200" />
            <StarHalf
              size={sizeConfig.icon}
              className="absolute top-0 left-0 text-yellow-400 fill-yellow-400"
            />
          </div>
        )}

        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star
            key={`empty-${i}`}
            size={sizeConfig.icon}
            className="text-gray-200"
          />
        ))}
      </div>

      {(showValue || reviewCount !== undefined) && (
        <span className={cn('text-text-light', sizeConfig.text)}>
          {showValue && <span className="font-medium text-text-primary">{value.toFixed(1)}</span>}
          {reviewCount !== undefined && (
            <span className="ml-1">({reviewCount})</span>
          )}
        </span>
      )}
    </div>
  );
};
