import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../../types';
import { useCartStore, useWishlistStore, useUIStore } from '../../store';
import { cn } from '../../utils';
import { formatPrice } from '../../utils/formatters';
import { cardVariants } from '../../config/motion';

interface ProductCardProps {
  product: Product;
  index?: number;
  variant?: 'default' | 'compact';
}

export const ProductCard = ({ product, index = 0, variant = 'default' }: ProductCardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const openCart = useUIStore((state) => state.openCart);
  const { isInWishlist, toggleWishlist } = useWishlistStore();

  const inWishlist = isInWishlist(product.id);
  const isCompact = variant === 'compact';

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes[0], product.colors[0], 1);
    openCart();
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const categoryLabel = {
    fete: 'Fete',
    baieti: 'Băieți',
    bebelusi: 'Bebeluși',
  }[product.category];

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <Link to={`/produs/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-xl bg-white shadow-soft transition-shadow duration-300 flex flex-col">
          {/* Image Container */}
          <div className={cn(
            'relative overflow-hidden',
            isCompact ? 'aspect-square' : 'aspect-[4/5]'
          )}>
            <img
              src={product.images[0]}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Badges */}
            <div className="absolute top-2 left-2 flex flex-col gap-1.5">
              {product.isNew && (
                <span className="px-2 py-0.5 text-[10px] font-bold bg-primary text-white rounded-full uppercase tracking-wide">
                  Nou
                </span>
              )}
              {product.isSale && discount > 0 && (
                <span className="px-2 py-0.5 text-[10px] font-bold bg-error text-white rounded-full">
                  -{discount}%
                </span>
              )}
            </div>

            {/* Wishlist Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleWishlistClick}
              aria-label={inWishlist ? 'Elimină din favorite' : 'Adaugă la favorite'}
              className={cn(
                'absolute top-2 right-2 p-2 rounded-full shadow-md transition-all duration-300',
                inWishlist
                  ? 'bg-secondary text-white'
                  : 'bg-white/90 text-text-secondary hover:bg-secondary hover:text-white'
              )}
            >
              <Heart size={16} fill={inWishlist ? 'currentColor' : 'none'} />
            </motion.button>

            {/* Quick Add Button - Desktop only */}
            <div className="hidden md:block absolute bottom-3 left-3 right-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleQuickAdd}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-white text-primary font-semibold rounded-lg shadow-lg hover:bg-primary hover:text-white transition-colors text-sm"
              >
                <ShoppingBag size={16} />
                <span>Adaugă în coș</span>
              </motion.button>
            </div>
          </div>

          {/* Product Info */}
          <div className={cn('p-3', !isCompact && 'md:p-4')}>
            {/* Category */}
            <p className="text-[10px] text-text-light uppercase tracking-wider mb-1 font-medium">
              {categoryLabel}
            </p>

            {/* Name */}
            <h3 className={cn(
              'font-heading font-bold text-text-primary line-clamp-2 group-hover:text-primary transition-colors leading-tight mb-2',
              isCompact ? 'text-sm' : 'text-sm md:text-base'
            )}>
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-2">
              <Star size={12} className="text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-bold text-text-primary">{product.rating}</span>
              <span className="text-xs text-text-light">({product.reviews})</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 flex-wrap mb-2">
              <span className={cn(
                'font-bold text-primary',
                isCompact ? 'text-base' : 'text-lg'
              )}>
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-text-light line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Color Options */}
            <div className="flex items-center gap-1">
              {product.colors.slice(0, 4).map((color) => (
                <div
                  key={color.name}
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-text-light ml-0.5">
                  +{product.colors.length - 4}
                </span>
              )}
            </div>

            {/* Mobile Add to Cart Button */}
            <button
              onClick={handleQuickAdd}
              className="md:hidden w-full mt-3 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Adaugă în coș
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
