import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Product } from '../../types';
import { ProductGrid } from '../product/ProductGrid';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../ui/Button';

interface ProductShowcaseProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllLink?: string;
  viewAllText?: string;
  columns?: 2 | 3 | 4;
}

export const ProductShowcase = ({
  title,
  subtitle,
  products,
  viewAllLink = '/shop',
  viewAllText = 'Vezi toate',
  columns = 4,
}: ProductShowcaseProps) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 sm:px-6">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          action={
            <Link to={viewAllLink}>
              <Button variant="outline" icon={<ArrowRight size={18} />} iconPosition="right">
                {viewAllText}
              </Button>
            </Link>
          }
        />

        <ProductGrid products={products.slice(0, 8)} columns={columns} />
      </div>
    </section>
  );
};
