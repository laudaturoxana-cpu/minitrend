import { X } from 'lucide-react';
import { useFilterStore } from '../../store';
import { formatPrice } from '../../utils/formatters';
import { cn } from '../../utils';

interface ActiveFiltersProps {
  className?: string;
}

export const ActiveFilters = ({ className }: ActiveFiltersProps) => {
  const {
    selectedCategory,
    setCategory,
    priceRange,
    setPriceRange,
    minPrice,
    maxPrice,
    selectedSizes,
    toggleSize,
    selectedColors,
    toggleColor,
    selectedAgeRange,
    setAgeRange,
    clearAllFilters,
    hasActiveFilters,
  } = useFilterStore();

  if (!hasActiveFilters()) return null;

  const categoryLabels: Record<string, string> = {
    fete: 'Fete',
    baieti: 'Băieți',
    bebelusi: 'Bebeluși',
  };

  const colorLabels: Record<string, string> = {
    roz: 'Roz',
    albastru: 'Albastru',
    alb: 'Alb',
    rosu: 'Roșu',
    verde: 'Verde',
    galben: 'Galben',
  };

  const filters: Array<{ label: string; onRemove: () => void }> = [];

  if (selectedCategory) {
    filters.push({
      label: categoryLabels[selectedCategory] || selectedCategory,
      onRemove: () => setCategory(null),
    });
  }

  if (priceRange[0] > minPrice || priceRange[1] < maxPrice) {
    filters.push({
      label: `${formatPrice(priceRange[0])} - ${formatPrice(priceRange[1])}`,
      onRemove: () => setPriceRange([minPrice, maxPrice]),
    });
  }

  selectedSizes.forEach((size) => {
    filters.push({
      label: size,
      onRemove: () => toggleSize(size),
    });
  });

  selectedColors.forEach((color) => {
    filters.push({
      label: colorLabels[color] || color,
      onRemove: () => toggleColor(color),
    });
  });

  if (selectedAgeRange) {
    filters.push({
      label: selectedAgeRange,
      onRemove: () => setAgeRange(null),
    });
  }

  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      <span className="text-sm text-text-secondary">Filtre active:</span>

      {filters.map((filter, index) => (
        <FilterTag key={index} label={filter.label} onRemove={filter.onRemove} />
      ))}

      <button
        onClick={clearAllFilters}
        className="text-sm text-primary hover:underline ml-2"
      >
        Șterge toate
      </button>
    </div>
  );
};

const FilterTag = ({ label, onRemove }: { label: string; onRemove: () => void }) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
    {label}
    <button
      onClick={onRemove}
      className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
      aria-label={`Elimină filtrul ${label}`}
    >
      <X size={14} />
    </button>
  </span>
);
