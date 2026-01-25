import { Minus, Plus } from 'lucide-react';
import { cn } from '../../utils';

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = {
  sm: { button: 'w-7 h-7', icon: 14, input: 'w-10 text-sm' },
  md: { button: 'w-9 h-9', icon: 16, input: 'w-12 text-base' },
  lg: { button: 'w-11 h-11', icon: 18, input: 'w-14 text-lg' },
};

export const QuantitySelector = ({
  value,
  onChange,
  min = 1,
  max = 99,
  size = 'md',
  className,
}: QuantitySelectorProps) => {
  const sizeConfig = sizes[size];
  const canDecrease = value > min;
  const canIncrease = value < max;

  const handleDecrease = () => {
    if (canDecrease) {
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    if (canIncrease) {
      onChange(value + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div className={cn('inline-flex items-center bg-gray-100 rounded-xl', className)}>
      <button
        type="button"
        onClick={handleDecrease}
        disabled={!canDecrease}
        aria-label="Reduce cantitatea"
        className={cn(
          'flex items-center justify-center rounded-l-xl transition-colors',
          'hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed',
          sizeConfig.button
        )}
      >
        <Minus size={sizeConfig.icon} />
      </button>

      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
        aria-label="Cantitate"
        className={cn(
          'text-center bg-transparent font-medium focus:outline-none',
          'appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
          sizeConfig.input
        )}
      />

      <button
        type="button"
        onClick={handleIncrease}
        disabled={!canIncrease}
        aria-label="Crește cantitatea"
        className={cn(
          'flex items-center justify-center rounded-r-xl transition-colors',
          'hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed',
          sizeConfig.button
        )}
      >
        <Plus size={sizeConfig.icon} />
      </button>
    </div>
  );
};
