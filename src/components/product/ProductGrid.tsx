import type { Product } from '../../types';
import { ProductCard } from './ProductCard';
import { EmptyState } from '../common/EmptyState';
import { SkeletonCard } from '../ui/Skeleton';
import { Package } from 'lucide-react';
import { cn } from '../../utils';

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  emptyMessage?: string;
  columns?: 2 | 3 | 4;
  className?: string;
}

const gridCols = {
  2: 'grid-cols-2',
  3: 'grid-cols-2 md:grid-cols-3',
  4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
};

export const ProductGrid = ({
  products,
  loading = false,
  emptyMessage = 'Nu am găsit produse care să corespundă filtrelor.',
  columns = 4,
  className,
}: ProductGridProps) => {
  if (loading) {
    return (
      <div className={cn('grid gap-4 md:gap-6', gridCols[columns], className)}>
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <EmptyState
        icon={<Package size={64} />}
        title="Niciun produs găsit"
        description={emptyMessage}
      />
    );
  }

  return (
    <div className={cn('grid gap-4 md:gap-6', gridCols[columns], className)}>
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
};
