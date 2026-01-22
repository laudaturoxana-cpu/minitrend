import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { Button } from '../ui/Button';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal,
  } = useStore();

  const total = getCartTotal();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={() => setCartOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-cream shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <ShoppingBag size={24} className="text-primary" />
                <h2 className="font-heading text-xl font-bold">
                  Coșul tău ({cart.length})
                </h2>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag size={40} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    Coșul tău este gol
                  </h3>
                  <p className="text-text-secondary text-sm mb-6">
                    Adaugă produse pentru a începe cumpărăturile
                  </p>
                  <Button onClick={() => setCartOpen(false)}>
                    <Link to="/shop">Descoperă Produsele</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      key={`${item.product.id}-${item.selectedSize}-${item.selectedColor.name}`}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex gap-4 bg-white p-4 rounded-xl shadow-soft"
                    >
                      {/* Image */}
                      <Link
                        to={`/produs/${item.product.id}`}
                        onClick={() => setCartOpen(false)}
                        className="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0"
                      >
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <Link
                          to={`/produs/${item.product.id}`}
                          onClick={() => setCartOpen(false)}
                          className="font-medium text-text-primary hover:text-primary transition-colors line-clamp-1"
                        >
                          {item.product.name}
                        </Link>

                        <div className="flex items-center gap-2 mt-1 text-sm text-text-secondary">
                          <span>{item.selectedSize}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <div
                              className="w-3 h-3 rounded-full border border-gray-200"
                              style={{ backgroundColor: item.selectedColor.hex }}
                            />
                            <span>{item.selectedColor.name}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.selectedSize,
                                  item.selectedColor.name,
                                  item.quantity - 1
                                )
                              }
                              className="p-1.5 rounded-lg bg-gray-100 hover:bg-primary/10 transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.selectedSize,
                                  item.selectedColor.name,
                                  item.quantity + 1
                                )
                              }
                              className="p-1.5 rounded-lg bg-gray-100 hover:bg-primary/10 transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          {/* Price */}
                          <span className="font-bold text-primary">
                            {item.product.price * item.quantity} Lei
                          </span>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() =>
                          removeFromCart(
                            item.product.id,
                            item.selectedSize,
                            item.selectedColor.name
                          )
                        }
                        className="self-start p-2 text-text-light hover:text-error transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-gray-100 p-6 space-y-4">
                {/* Subtotal */}
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Subtotal</span>
                  <span className="font-semibold">{total} Lei</span>
                </div>

                {/* Shipping Info */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-light">Livrare</span>
                  <span className="text-success font-medium">
                    {total >= 200 ? 'GRATUITĂ' : '25 Lei'}
                  </span>
                </div>

                {total < 200 && (
                  <p className="text-xs text-text-light text-center bg-primary/5 py-2 rounded-lg">
                    Mai adaugă <span className="font-semibold text-primary">{200 - total} Lei</span> pentru
                    livrare gratuită!
                  </p>
                )}

                {/* Total */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="font-heading text-lg font-bold">Total</span>
                  <span className="font-heading text-xl font-bold text-primary">
                    {total >= 200 ? total : total + 25} Lei
                  </span>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Link to="/checkout" onClick={() => setCartOpen(false)}>
                    <Button fullWidth size="lg">
                      Finalizează Comanda
                    </Button>
                  </Link>
                  <Link to="/cos" onClick={() => setCartOpen(false)}>
                    <Button variant="outline" fullWidth>
                      Vezi Coșul Complet
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
