import { Grid, List } from 'lucide-react';
import { useFilterStore } from '../../store';
import { cn } from '../../utils';

interface GridToggleProps {
  className?: string;
}

export const GridToggle = ({ className }: GridToggleProps) => {
  const { gridView, setGridView } = useFilterStore();

  return (
    <div className={cn('flex items-center gap-1 bg-gray-100 rounded-lg p-1', className)}>
      <button
        onClick={() => setGridView('grid')}
        className={cn(
          'p-2 rounded-md transition-colors',
          gridView === 'grid'
            ? 'bg-white text-primary shadow-sm'
            : 'text-text-secondary hover:text-text-primary'
        )}
        aria-label="Vizualizare grilă"
      >
        <Grid size={18} />
      </button>
      <button
        onClick={() => setGridView('list')}
        className={cn(
          'p-2 rounded-md transition-colors',
          gridView === 'list'
            ? 'bg-white text-primary shadow-sm'
            : 'text-text-secondary hover:text-text-primary'
        )}
        aria-label="Vizualizare listă"
      >
        <List size={18} />
      </button>
    </div>
  );
};
