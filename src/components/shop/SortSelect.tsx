import { useFilterStore } from '../../store';
import { Select } from '../ui/Select';
import type { SortOption } from '../../types';

const sortOptions: Array<{ value: SortOption; label: string }> = [
  { value: 'featured', label: 'Recomandate' },
  { value: 'popular', label: 'Cele mai populare' },
  { value: 'newest', label: 'Cele mai noi' },
  { value: 'price-asc', label: 'Preț: Crescător' },
  { value: 'price-desc', label: 'Preț: Descrescător' },
];

interface SortSelectProps {
  className?: string;
}

export const SortSelect = ({ className }: SortSelectProps) => {
  const { sortBy, setSortBy } = useFilterStore();

  return (
    <Select
      options={sortOptions}
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value as SortOption)}
      size="sm"
      className={className}
    />
  );
};
