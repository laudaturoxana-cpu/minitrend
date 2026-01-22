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

            {/* Badges - 12px from edges, 8px gap */}
            <div className="absolute top-3 left-3 md:top-4 md:left-4 flex flex-col gap-2">
              {product.isNew && (
                <span className="px-2.5 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs font-bold bg-primary text-white rounded-full uppercase tracking-wide">
                  Nou
                </span>
              )}
              {product.isSale && discount > 0 && (
                <span className="px-2.5 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs font-bold bg-error text-white rounded-full">
                  -{discount}%
                </span>
              )}
            </div>

            {/* Wishlist Button - 12px from edges */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleWishlistClick}
              className={`
                absolute top-3 right-3 md:top-4 md:right-4 p-2 md:p-2.5 rounded-full shadow-md
                transition-all duration-300
                ${inWishlist
                  ? 'bg-secondary text-white'
                  : 'bg-white/90 text-text-secondary hover:bg-secondary hover:text-white'
                }
              `}
            >
              <Heart size={14} className="md:w-4 md:h-4" fill={inWishlist ? 'currentColor' : 'none'} />
            </motion.button>

            {/* Quick Add Button - Desktop only, 16px from edges */}
            <div className="hidden lg:block absolute bottom-4 left-4 right-4 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleQuickAdd}
                className="w-full flex items-center justify-center gap-2 py-3 bg-white text-primary font-semibold rounded-xl shadow-lg hover:bg-primary hover:text-white transition-colors text-sm"
              >
                <ShoppingBag size={16} />
                <span>Adaugă în coș</span>
              </motion.button>
            </div>
          </div>

          {/* Product Info - Improved padding: 16px mobile, 20px tablet, 24px desktop */}
          <div className="p-4 md:p-5 lg:p-6">
            {/* Category - margin-bottom: 8px */}
            <p className="text-[10px] md:text-xs text-text-light uppercase tracking-wider mb-2 font-medium">
              {product.category === 'fete' ? 'Fete' : product.category === 'baieti' ? 'Băieți' : 'Bebeluși'}
            </p>

            {/* Name - margin-bottom: 12px */}
            <h3 className="font-heading font-bold text-text-primary text-sm md:text-base lg:text-[17px] mb-3 line-clamp-2 min-h-[2.5rem] md:min-h-[3rem] group-hover:text-primary transition-colors leading-snug">
              {product.name}
            </h3>

            {/* Rating - margin-bottom: 12px, gap: 8px */}
            <div className="flex items-center gap-2 mb-3">
              <Star size={14} className="md:w-4 md:h-4 text-warning fill-warning" />
              <span className="text-xs md:text-sm font-bold text-text-primary">{product.rating}</span>
              <span className="text-xs text-text-light">({product.reviews})</span>
            </div>

            {/* Price - margin-bottom: 16px */}
            <div className="flex items-baseline gap-2 flex-wrap mb-4">
              <span className="text-lg md:text-xl font-bold text-primary">
                {product.price} Lei
              </span>
              {product.originalPrice && (
                <span className="text-xs md:text-sm text-text-light line-through">
                  {product.originalPrice} Lei
                </span>
              )}
            </div>

            {/* Color Options - gap: 8px */}
            <div className="flex items-center gap-2">
              {product.colors.slice(0, 4).map((color) => (
                <div
                  key={color.name}
                  className="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-white shadow-sm ring-1 ring-gray-200 hover:scale-110 transition-transform cursor-pointer"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-text-light ml-1 font-medium">
                  +{product.colors.length - 4}
                </span>
              )}
            </div>

            {/* Mobile Add to Cart Button - margin-top: 16px */}
            <button
              onClick={handleQuickAdd}
              className="lg:hidden w-full mt-4 py-3 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-dark transition-colors"
            >
              Adaugă în coș
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
