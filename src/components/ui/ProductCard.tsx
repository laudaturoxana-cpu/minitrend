import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../../types';
import { useStore } from '../../store/useStore';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { addToWishlist, removeFromWishlist, isInWishlist, addToCart, setCartOpen } = useStore();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes[0], product.colors[0], 1);
    setCartOpen(true);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group h-full"
    >
      <Link to={`/produs/${product.id}`} className="block h-full">
        <div className="relative h-full overflow-hidden rounded-xl md:rounded-2xl bg-white shadow-soft hover:shadow-hover transition-all duration-300">
          {/* Image Container */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Badges */}
            <div className="absolute top-2 left-2 md:top-3 md:left-3 flex flex-col gap-1.5">
              {product.isNew && (
                <span className="px-2 py-0.5 md:px-2.5 md:py-1 text-[10px] md:text-xs font-bold bg-primary text-white rounded-full uppercase tracking-wide">
                  Nou
                </span>
              )}
              {product.isSale && discount > 0 && (
                <span className="px-2 py-0.5 md:px-2.5 md:py-1 text-[10px] md:text-xs font-bold bg-error text-white rounded-full">
                  -{discount}%
                </span>
              )}
            </div>

            {/* Wishlist Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleWishlistClick}
              className={`
                absolute top-2 right-2 md:top-3 md:right-3 p-1.5 md:p-2 rounded-full shadow-md
                transition-all duration-300
                ${inWishlist
                  ? 'bg-secondary text-white'
                  : 'bg-white/90 text-text-secondary hover:bg-secondary hover:text-white'
                }
              `}
            >
              <Heart size={14} className="md:w-4 md:h-4" fill={inWishlist ? 'currentColor' : 'none'} />
            </motion.button>

            {/* Quick Add Button - Desktop only */}
            <div className="hidden lg:block absolute bottom-3 left-3 right-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
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
          <div className="p-3 md:p-4">
            {/* Category */}
            <p className="text-[10px] md:text-xs text-text-light uppercase tracking-wider mb-1.5 font-medium">
              {product.category === 'fete' ? 'Fete' : product.category === 'baieti' ? 'Băieți' : 'Bebeluși'}
            </p>

            {/* Name */}
            <h3 className="font-heading font-bold text-text-primary text-sm md:text-base mb-2 line-clamp-2 min-h-[2.5rem] md:min-h-[3rem] group-hover:text-primary transition-colors leading-tight">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mb-2">
              <Star size={12} className="md:w-3.5 md:h-3.5 text-warning fill-warning" />
              <span className="text-xs md:text-sm font-bold text-text-primary">{product.rating}</span>
              <span className="text-xs text-text-light">({product.reviews})</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 flex-wrap mb-3">
              <span className="text-base md:text-lg font-bold text-primary">
                {product.price} Lei
              </span>
              {product.originalPrice && (
                <span className="text-xs md:text-sm text-text-light line-through">
                  {product.originalPrice} Lei
                </span>
              )}
            </div>

            {/* Color Options */}
            <div className="flex items-center gap-1.5">
              {product.colors.slice(0, 3).map((color) => (
                <div
                  key={color.name}
                  className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-white shadow-sm ring-1 ring-gray-100"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
              {product.colors.length > 3 && (
                <span className="text-xs text-text-light ml-1 font-medium">
                  +{product.colors.length - 3}
                </span>
              )}
            </div>

            {/* Mobile Add to Cart Button */}
            <button
              onClick={handleQuickAdd}
              className="lg:hidden w-full mt-3 py-2.5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Adaugă în coș
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
