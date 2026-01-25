import { Check } from 'lucide-react';
import { cn } from '../../utils';

interface ColorSwatchProps {
  color: string;
  name: string;
  selected?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

const sizes = {
  sm: { box: 'w-6 h-6', icon: 12 },
  md: { box: 'w-8 h-8', icon: 14 },
  lg: { box: 'w-10 h-10', icon: 18 },
};

export const ColorSwatch = ({
  color,
  name,
  selected = false,
  size = 'md',
  onClick,
  className,
}: ColorSwatchProps) => {
  const sizeConfig = sizes[size];
  const isLight = isLightColor(color);

  return (
    <button
      type="button"
      onClick={onClick}
      title={name}
      aria-label={`Selectează culoarea ${name}`}
      aria-pressed={selected}
      className={cn(
        'rounded-full border-2 transition-all duration-200 flex items-center justify-center',
        'hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2',
        selected ? 'border-primary ring-2 ring-primary/20' : 'border-gray-200',
        sizeConfig.box,
        className
      )}
      style={{ backgroundColor: color }}
    >
      {selected && (
        <Check
          size={sizeConfig.icon}
          className={isLight ? 'text-gray-800' : 'text-white'}
          strokeWidth={3}
        />
      )}
    </button>
  );
};

// Helper to determine if color is light
function isLightColor(color: string): boolean {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5;
}

interface ColorSwatchGroupProps {
  colors: Array<{ id: string; hex: string; name: string }>;
  selectedId?: string;
  onSelect?: (id: string) => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ColorSwatchGroup = ({
  colors,
  selectedId,
  onSelect,
  size = 'md',
  className,
}: ColorSwatchGroupProps) => {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {colors.map((color) => (
        <ColorSwatch
          key={color.id}
          color={color.hex}
          name={color.name}
          selected={selectedId === color.id}
          size={size}
          onClick={() => onSelect?.(color.id)}
        />
      ))}
    </div>
  );
};
