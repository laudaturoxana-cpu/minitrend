import { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import {
  Heart,
  ShoppingBag,
  Minus,
  Plus,
  Star,
  Truck,
  Shield,
  RefreshCw,
  ChevronRight,
  Check,
} from 'lucide-react';
import { getProductById, products } from '../data/products';
import { useStore } from '../store/useStore';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';
import type { Color } from '../types';

export const Product = () => {
  const { id } = useParams();
  const product = getProductById(id || '');

  const { addToCart, setCartOpen, addToWishlist, removeFromWishlist, isInWishlist } = useStore();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold mb-4">Produsul nu a fost găsit</h1>
          <Link to="/shop" className="text-primary hover:underline">
            Înapoi la Shop
          </Link>
        </div>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Te rugăm să selectezi mărimea și culoarea');
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
    setCartOpen(true);
  };

  const handleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Breadcrumb - padding: 20px vertical */}
      <div className="container py-5 md:py-6">
        <nav className="flex items-center gap-2 text-sm text-text-secondary flex-wrap">
          <Link to="/" className="hover:text-primary">
            Acasă
          </Link>
          <ChevronRight size={14} className="flex-shrink-0" />
          <Link to="/shop" className="hover:text-primary">
            Shop
          </Link>
          <ChevronRight size={14} className="flex-shrink-0" />
          <Link to={`/shop/${product.category}`} className="hover:text-primary capitalize">
            {product.category === 'fete' ? 'Fete' : product.category === 'baieti' ? 'Băieți' : 'Bebeluși'}
          </Link>
          <ChevronRight size={14} className="flex-shrink-0" />
          <span className="text-text-primary line-clamp-1">{product.name}</span>
        </nav>
      </div>

      {/* Product Section - gap responsive: 32px mobile, 48px tablet, 64px desktop */}
      <section className="container pb-12 md:pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Images - space-y: 16px mobile, 20px desktop */}
          <div className="space-y-4 md:space-y-5">
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square rounded-2xl lg:rounded-3xl overflow-hidden bg-white shadow-soft"
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {product.images.length > 1 && (
              <div className="flex gap-3 md:gap-4">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`
                      w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden transition-all flex-shrink-0
                      ${selectedImage === index
                        ? 'ring-2 ring-primary ring-offset-2'
                        : 'opacity-60 hover:opacity-100'
                      }
                    `}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            {/* Badges - margin-bottom: 16px, gap: 8px */}
            <div className="flex gap-2 mb-4">
              {product.isNew && (
                <span className="px-3 py-1.5 text-xs font-semibold bg-primary text-white rounded-full">
                  NOU
                </span>
              )}
              {product.isSale && discount > 0 && (
                <span className="px-3 py-1.5 text-xs font-semibold bg-error text-white rounded-full">
                  -{discount}% REDUCERE
                </span>
              )}
            </div>

            {/* Category - margin-bottom: 12px */}
            <p className="text-text-light text-sm uppercase tracking-wider mb-3">
              {product.category === 'fete' ? 'Fete' : product.category === 'baieti' ? 'Băieți' : 'Bebeluși'} / {product.subcategory}
            </p>

            {/* Name - margin-bottom: 20px */}
            <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-5 leading-tight">
              {product.name}
            </h1>

            {/* Rating - margin-bottom: 24px, gap: 12px */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(product.rating) ? 'text-warning fill-warning' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-text-secondary">
                {product.rating} ({product.reviews} recenzii)
              </span>
            </div>

            {/* Price - margin-bottom: 24px, gap: 12px */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-heading text-2xl md:text-3xl font-bold text-primary">
                {product.price} Lei
              </span>
              {product.originalPrice && (
                <span className="text-lg md:text-xl text-text-light line-through">
                  {product.originalPrice} Lei
                </span>
              )}
            </div>

            {/* Description - margin-bottom: 32px, line-height: 1.7 */}
            <p className="text-text-secondary mb-8 leading-relaxed">{product.description}</p>

            {/* Color Selection - margin-bottom: 24px */}
            <div className="mb-6">
              <p className="font-medium mb-4">
                Culoare: <span className="text-text-secondary">{selectedColor?.name || 'Selectează'}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`
                      relative w-10 h-10 md:w-11 md:h-11 rounded-full transition-transform hover:scale-110
                      ${selectedColor?.name === color.name ? 'ring-2 ring-offset-2 ring-primary' : ''}
                    `}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {selectedColor?.name === color.name && (
                      <Check size={16} className="absolute inset-0 m-auto text-white drop-shadow" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection - margin-bottom: 24px */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <p className="font-medium">
                  Mărime: <span className="text-text-secondary">{selectedSize || 'Selectează'}</span>
                </p>
                <button className="text-primary text-sm hover:underline">Ghid mărimi</button>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      px-4 py-2.5 rounded-xl border-2 transition-all text-sm font-medium
                      ${selectedSize === size
                        ? 'border-primary bg-primary text-white'
                        : 'border-gray-200 hover:border-primary'
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity - margin-bottom: 32px */}
            <div className="mb-8">
              <p className="font-medium mb-4">Cantitate</p>
              <div className="inline-flex items-center gap-4 bg-gray-100 rounded-xl p-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 hover:bg-white rounded-lg transition-colors"
                >
                  <Minus size={18} />
                </button>
                <span className="w-10 text-center font-semibold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2.5 hover:bg-white rounded-lg transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Actions - margin-bottom: 32px, gap: 12px */}
            <div className="flex gap-3 mb-8">
              <Button
                size="lg"
                fullWidth
                onClick={handleAddToCart}
                icon={<ShoppingBag size={20} />}
              >
                Adaugă în Coș
              </Button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWishlist}
                className={`
                  p-4 rounded-xl border-2 transition-colors flex-shrink-0
                  ${inWishlist
                    ? 'bg-secondary border-secondary text-white'
                    : 'border-gray-200 hover:border-secondary hover:text-secondary'
                  }
                `}
              >
                <Heart size={24} fill={inWishlist ? 'currentColor' : 'none'} />
              </motion.button>
            </div>

            {/* Features - padding: 24px mobile, 32px desktop, gap: 16px */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 p-5 md:p-6 lg:p-8 bg-gray-50 rounded-2xl">
              <div className="text-center">
                <Truck size={24} className="mx-auto mb-3 text-primary" />
                <p className="text-xs md:text-sm text-text-secondary">Livrare Gratuită</p>
                <p className="text-xs md:text-sm font-medium">peste 200 Lei</p>
              </div>
              <div className="text-center">
                <RefreshCw size={24} className="mx-auto mb-3 text-primary" />
                <p className="text-xs md:text-sm text-text-secondary">Retur Gratuit</p>
                <p className="text-xs md:text-sm font-medium">30 zile</p>
              </div>
              <div className="text-center">
                <Shield size={24} className="mx-auto mb-3 text-primary" />
                <p className="text-xs md:text-sm text-text-secondary">Plată Sigură</p>
                <p className="text-xs md:text-sm font-medium">100% securizat</p>
              </div>
            </div>

            {/* Product Info - margin-top: 32px */}
            <div className="mt-8">
              <div className="flex justify-between py-4 border-b border-gray-100">
                <span className="text-text-secondary">Material</span>
                <span className="font-medium">{product.material}</span>
              </div>
              <div className="flex justify-between py-4 border-b border-gray-100">
                <span className="text-text-secondary">Vârsta recomandată</span>
                <span className="font-medium">{product.ageRange}</span>
              </div>
              <div className="flex justify-between py-4 border-b border-gray-100">
                <span className="text-text-secondary">Disponibilitate</span>
                <span className={`font-medium ${product.inStock ? 'text-success' : 'text-error'}`}>
                  {product.inStock ? 'În Stoc' : 'Stoc Epuizat'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products - padding: 80px mobile, 96px tablet */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-20 lg:py-24 bg-white">
          <div className="container">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-8 md:mb-10">
              Produse Similare
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
              {relatedProducts.map((p, index) => (
                <ProductCard key={p.id} product={p} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
