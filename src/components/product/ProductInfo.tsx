import { Star, Truck, Shield, RefreshCw } from 'lucide-react';
import type { Product } from '../../types';
import { PriceTag } from '../common/PriceTag';
import { Badge } from '../ui/Badge';
import { cn } from '../../utils';

interface ProductInfoProps {
  product: Product;
  className?: string;
}

export const ProductInfo = ({ product, className }: ProductInfoProps) => {
  const categoryLabel = {
    fete: 'Fete',
    baieti: 'Băieți',
    bebelusi: 'Bebeluși',
  }[product.category];

  return (
    <div className={cn('space-y-4', className)}>
      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {product.isNew && <Badge variant="primary">Nou</Badge>}
        {product.isSale && <Badge variant="error">Reducere</Badge>}
        <Badge variant="secondary">{categoryLabel}</Badge>
      </div>

      {/* Name */}
      <h1 className="font-heading text-2xl md:text-3xl font-bold text-text-primary">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className={cn(
                i < Math.floor(product.rating)
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-200'
              )}
            />
          ))}
        </div>
        <span className="font-bold text-text-primary">{product.rating}</span>
        <span className="text-text-secondary">({product.reviews} recenzii)</span>
      </div>

      {/* Price */}
      <PriceTag
        price={product.price}
        originalPrice={product.originalPrice}
        size="lg"
      />

      {/* Description */}
      <p className="text-text-secondary leading-relaxed">
        {product.description}
      </p>

      {/* Product Details */}
      <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-gray-100">
        <div>
          <span className="text-sm text-text-light">Material</span>
          <p className="font-medium text-text-primary">{product.material}</p>
        </div>
        <div>
          <span className="text-sm text-text-light">Vârstă</span>
          <p className="font-medium text-text-primary">{product.ageRange}</p>
        </div>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Benefit icon={<Truck size={20} />} text="Livrare gratuită peste 200 Lei" />
        <Benefit icon={<RefreshCw size={20} />} text="Retur gratuit 30 zile" />
        <Benefit icon={<Shield size={20} />} text="Garanție calitate" />
      </div>
    </div>
  );
};

const Benefit = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 text-sm text-text-secondary">
    <span className="text-primary">{icon}</span>
    <span>{text}</span>
  </div>
);
