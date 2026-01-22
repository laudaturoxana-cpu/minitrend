import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useStore } from '../store/useStore';
import { Button } from '../components/ui/Button';

export const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart, setCartOpen } = useStore();

  const handleAddToCart = (item: typeof wishlist[0]) => {
    addToCart(item.product, item.product.sizes[0], item.product.colors[0], 1);
    removeFromWishlist(item.product.id);
    setCartOpen(true);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 mx-auto mb-6 bg-secondary/10 rounded-full flex items-center justify-center"
            >
              <Heart size={40} className="text-secondary" />
            </motion.div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Lista ta de dorințe
            </h1>
            <p className="text-text-secondary">
              {wishlist.length === 0
                ? 'Lista ta de dorințe este goală'
                : `Ai ${wishlist.length} ${wishlist.length === 1 ? 'produs' : 'produse'} salvate`}
            </p>
          </div>

          {/* Empty State */}
          {wishlist.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-text-secondary mb-8">
                Începe să adaugi produse favorite pentru a le salva aici!
              </p>
              <Link to="/shop">
                <Button icon={<ArrowRight size={18} />} iconPosition="right">
                  Descoperă Produsele
                </Button>
              </Link>
            </motion.div>
          ) : (
            <div className="space-y-4">
              <AnimatePresence>
                {wishlist.map((item) => (
                  <motion.div
                    key={item.product.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-white rounded-2xl shadow-soft p-4 md:p-6"
                  >
                    <div className="flex gap-4 md:gap-6">
                      {/* Image */}
                      <Link
                        to={`/produs/${item.product.id}`}
                        className="w-24 h-28 md:w-32 md:h-36 rounded-xl overflow-hidden flex-shrink-0"
                      >
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </Link>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-text-light uppercase tracking-wider mb-1">
                          {item.product.category === 'fete' ? 'Fete' : item.product.category === 'baieti' ? 'Băieți' : 'Bebeluși'}
                        </p>
                        <Link
                          to={`/produs/${item.product.id}`}
                          className="font-heading font-semibold text-text-primary hover:text-primary transition-colors line-clamp-1 md:text-lg"
                        >
                          {item.product.name}
                        </Link>

                        <div className="flex items-center gap-2 mt-2 md:mt-3">
                          <span className="font-bold text-primary text-lg">
                            {item.product.price} Lei
                          </span>
                          {item.product.originalPrice && (
                            <span className="text-sm text-text-light line-through">
                              {item.product.originalPrice} Lei
                            </span>
                          )}
                        </div>

                        {/* Colors */}
                        <div className="flex items-center gap-1.5 mt-3">
                          {item.product.colors.slice(0, 4).map((color) => (
                            <div
                              key={color.name}
                              className="w-4 h-4 rounded-full border border-gray-200"
                              style={{ backgroundColor: color.hex }}
                              title={color.name}
                            />
                          ))}
                        </div>

                        {/* Mobile Actions */}
                        <div className="flex gap-2 mt-4 md:hidden">
                          <button
                            onClick={() => handleAddToCart(item)}
                            className="flex-1 flex items-center justify-center gap-2 py-2 bg-primary text-white text-sm font-medium rounded-lg"
                          >
                            <ShoppingBag size={16} />
                            Adaugă
                          </button>
                          <button
                            onClick={() => removeFromWishlist(item.product.id)}
                            className="p-2 text-error hover:bg-error/10 rounded-lg transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>

                      {/* Desktop Actions */}
                      <div className="hidden md:flex flex-col justify-center gap-3">
                        <Button
                          onClick={() => handleAddToCart(item)}
                          icon={<ShoppingBag size={18} />}
                        >
                          Adaugă în Coș
                        </Button>
                        <button
                          onClick={() => removeFromWishlist(item.product.id)}
                          className="flex items-center justify-center gap-2 py-2 text-error hover:bg-error/10 rounded-lg transition-colors"
                        >
                          <Trash2 size={18} />
                          <span>Șterge</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Continue Shopping */}
              <div className="text-center pt-8">
                <Link to="/shop" className="text-primary font-medium hover:underline inline-flex items-center gap-2">
                  Continuă cumpărăturile <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
