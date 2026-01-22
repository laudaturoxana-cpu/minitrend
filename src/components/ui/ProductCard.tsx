import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star, Eye } from 'lucide-react';
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
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group h-full"
    >
      <Link to={`/produs/${product.id}`} className="block h-full">
        <div className="relative h-full overflow-hidden rounded-2xl lg:rounded-3xl bg-white shadow-soft hover:shadow-hover transition-all duration-500">
          {/* Image Container */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Badges */}
            <div className="absolute top-3 left-3 lg:top-4 lg:left-4 flex flex-col gap-2">
              {product.isNew && (
                <span className="px-2.5 py-1 lg:px-3 lg:py-1.5 text-[10px] lg:text-xs font-bold bg-primary text-white rounded-full uppercase tracking-wide">
                  Nou
                </span>
              )}
              {product.isSale && discount > 0 && (
                <span className="px-2.5 py-1 lg:px-3 lg:py-1.5 text-[10px] lg:text-xs font-bold bg-error text-white rounded-full">
                  -{discount}%
                </span>
              )}
            </div>

            {/* Wishlist Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleWishlistClick}
              className={`
                absolute top-3 right-3 lg:top-4 lg:right-4 p-2 lg:p-2.5 rounded-full shadow-md
                transition-all duration-300
                ${inWishlist
                  ? 'bg-secondary text-white'
                  : 'bg-white/95 text-text-secondary hover:bg-secondary hover:text-white'
                }
              `}
            >
              <Heart size={16} className="lg:w-[18px] lg:h-[18px]" fill={inWishlist ? 'currentColor' : 'none'} />
            </motion.button>

            {/* Quick Actions - appear on hover (desktop only) */}
            <div className="hidden lg:flex absolute bottom-4 left-4 right-4 gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleQuickAdd}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-primary font-semibold rounded-xl shadow-lg hover:bg-primary hover:text-white transition-colors"
              >
                <ShoppingBag size={18} />
                <span className="text-sm">Adaugă în coș</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="p-3 bg-white text-primary rounded-xl shadow-lg hover:bg-primary hover:text-white transition-colors"
              >
                <Eye size={18} />
              </motion.button>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-5 lg:p-7">
            {/* Category */}
            <p className="text-[11px] lg:text-xs text-text-light uppercase tracking-widest mb-3 font-medium">
              {product.category === 'fete' ? 'Fete' : product.category === 'baieti' ? 'Băieți' : 'Bebeluși'}
            </p>

            {/* Name */}
            <h3 className="font-heading font-bold text-text-primary text-base lg:text-lg mb-4 line-clamp-2 min-h-[2.8rem] lg:min-h-[3.5rem] group-hover:text-primary transition-colors leading-snug">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <Star size={16} className="text-warning fill-warning" />
              <span className="text-sm lg:text-base font-bold text-text-primary">{product.rating}</span>
              <span className="text-sm text-text-light">({product.reviews})</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-xl lg:text-2xl font-bold text-primary">
                {product.price} Lei
              </span>
              {product.originalPrice && (
                <span className="text-base text-text-light line-through">
                  {product.originalPrice} Lei
                </span>
              )}
            </div>

            {/* Color Options */}
            <div className="flex items-center gap-2 mt-5">
              {product.colors.slice(0, 4).map((color) => (
                <div
                  key={color.name}
                  className="w-6 h-6 lg:w-7 lg:h-7 rounded-full border-2 border-white shadow-sm ring-1 ring-gray-100 hover:scale-110 transition-transform cursor-pointer"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-sm text-text-light ml-2 font-medium">
                  +{product.colors.length - 4}
                </span>
              )}
            </div>

            {/* Mobile Add to Cart Button */}
            <button
              onClick={handleQuickAdd}
              className="lg:hidden w-full mt-5 py-3.5 bg-primary text-white text-base font-bold rounded-xl hover:bg-primary-dark transition-colors"
            >
              Adaugă în coș
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
