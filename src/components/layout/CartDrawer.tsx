import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore, useUIStore } from '../../store';
import { useScrollLock } from '../../hooks';
import { Button } from '../ui/Button';
import { cn } from '../../utils';
import { formatPrice } from '../../utils/formatters';
import { overlayVariants, slideInRight } from '../../config/motion';
import type { CartItem } from '../../types';

const FREE_SHIPPING_THRESHOLD = 200;
const SHIPPING_COST = 25;

export const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCartStore();
  const { isCartOpen, closeCart } = useUIStore();

  useScrollLock(isCartOpen);

  const total = getCartTotal();
  const shippingCost = total >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const finalTotal = total + shippingCost;
  const amountToFreeShipping = FREE_SHIPPING_THRESHOLD - total;

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-black/50"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-cream shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <ShoppingBag size={22} className="text-primary" />
                <h2 className="font-heading text-lg font-bold">
                  Coșul tău ({cart.length})
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="Închide coșul"
              >
                <X size={22} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-5">
              {cart.length === 0 ? (
                <EmptyCart onClose={closeCart} />
              ) : (
                <div className="space-y-4">
                  <AnimatePresence mode="popLayout">
                    {cart.map((item) => (
                      <CartItemCard
                        key={`${item.product.id}-${item.selectedSize}-${item.selectedColor.name}`}
                        item={item}
                        onRemove={() => removeFromCart(
                          item.product.id,
                          item.selectedSize,
                          item.selectedColor.name
                        )}
                        onUpdateQuantity={(qty) => updateQuantity(
                          item.product.id,
                          item.selectedSize,
                          item.selectedColor.name,
                          qty
                        )}
                        onCloseDrawer={closeCart}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <CartFooter
                subtotal={total}
                shippingCost={shippingCost}
                total={finalTotal}
                amountToFreeShipping={amountToFreeShipping}
                onClose={closeCart}
              />
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Empty Cart Component
const EmptyCart = ({ onClose }: { onClose: () => void }) => (
  <div className="flex flex-col items-center justify-center h-full text-center py-12">
    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
      <ShoppingBag size={36} className="text-primary" />
    </div>
    <h3 className="font-heading text-lg font-semibold mb-2">
      Coșul tău este gol
    </h3>
    <p className="text-text-secondary text-sm mb-6 max-w-[200px]">
      Adaugă produse pentru a începe cumpărăturile
    </p>
    <Link to="/shop" onClick={onClose}>
      <Button>Descoperă Produsele</Button>
    </Link>
  </div>
);

// Cart Item Card Component
interface CartItemCardProps {
  item: CartItem;
  onRemove: () => void;
  onUpdateQuantity: (qty: number) => void;
  onCloseDrawer: () => void;
}

const CartItemCard = ({ item, onRemove, onUpdateQuantity, onCloseDrawer }: CartItemCardProps) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, x: -100 }}
    className="flex gap-3 bg-white p-3 rounded-xl shadow-soft"
  >
    {/* Image */}
    <Link
      to={`/produs/${item.product.id}`}
      onClick={onCloseDrawer}
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
        onClick={onCloseDrawer}
        className="font-medium text-sm text-text-primary hover:text-primary transition-colors line-clamp-1"
      >
        {item.product.name}
      </Link>

      <div className="flex items-center gap-2 mt-1 text-xs text-text-secondary">
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

      <div className="flex items-center justify-between mt-2">
        {/* Quantity Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onUpdateQuantity(item.quantity - 1)}
            className="p-1.5 rounded-lg bg-gray-100 hover:bg-primary/10 transition-colors"
            aria-label="Reduce cantitatea"
          >
            <Minus size={12} />
          </button>
          <span className="w-7 text-center text-sm font-medium">
            {item.quantity}
          </span>
          <button
            onClick={() => onUpdateQuantity(item.quantity + 1)}
            className="p-1.5 rounded-lg bg-gray-100 hover:bg-primary/10 transition-colors"
            aria-label="Crește cantitatea"
          >
            <Plus size={12} />
          </button>
        </div>

        {/* Price */}
        <span className="font-bold text-sm text-primary">
          {formatPrice(item.product.price * item.quantity)}
        </span>
      </div>
    </div>

    {/* Remove Button */}
    <button
      onClick={onRemove}
      className="self-start p-1.5 text-text-light hover:text-error transition-colors"
      aria-label="Șterge produsul"
    >
      <Trash2 size={16} />
    </button>
  </motion.div>
);

// Cart Footer Component
interface CartFooterProps {
  subtotal: number;
  shippingCost: number;
  total: number;
  amountToFreeShipping: number;
  onClose: () => void;
}

const CartFooter = ({ subtotal, shippingCost, total, amountToFreeShipping, onClose }: CartFooterProps) => (
  <div className="border-t border-gray-100 p-5 space-y-3">
    {/* Subtotal */}
    <div className="flex items-center justify-between text-sm">
      <span className="text-text-secondary">Subtotal</span>
      <span className="font-semibold">{formatPrice(subtotal)}</span>
    </div>

    {/* Shipping Info */}
    <div className="flex items-center justify-between text-sm">
      <span className="text-text-light">Livrare</span>
      <span className={cn(
        'font-medium',
        shippingCost === 0 ? 'text-success' : 'text-text-primary'
      )}>
        {shippingCost === 0 ? 'GRATUITĂ' : formatPrice(shippingCost)}
      </span>
    </div>

    {/* Free Shipping Progress */}
    {amountToFreeShipping > 0 && (
      <p className="text-xs text-text-light text-center bg-primary/5 py-2 px-3 rounded-lg">
        Mai adaugă <span className="font-semibold text-primary">{formatPrice(amountToFreeShipping)}</span> pentru livrare gratuită!
      </p>
    )}

    {/* Total */}
    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
      <span className="font-heading text-base font-bold">Total</span>
      <span className="font-heading text-lg font-bold text-primary">
        {formatPrice(total)}
      </span>
    </div>

    {/* Actions */}
    <div className="space-y-2 pt-2">
      <Link to="/checkout" onClick={onClose}>
        <Button fullWidth>
          Finalizează Comanda
        </Button>
      </Link>
      <Link to="/cos" onClick={onClose}>
        <Button variant="outline" fullWidth>
          Vezi Coșul Complet
        </Button>
      </Link>
    </div>
  </div>
);
