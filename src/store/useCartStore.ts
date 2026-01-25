import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, Product, Color } from '../types';

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product, size: string, color: Color, quantity?: number) => void;
  removeFromCart: (productId: string, size: string, colorName: string) => void;
  updateQuantity: (productId: string, size: string, colorName: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  getCartItem: (productId: string, size: string, colorName: string) => CartItem | undefined;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product, size, color, quantity = 1) => {
        set((state) => {
          const existingItem = state.cart.find(
            (item) =>
              item.product.id === product.id &&
              item.selectedSize === size &&
              item.selectedColor.name === color.name
          );

          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.product.id === product.id &&
                item.selectedSize === size &&
                item.selectedColor.name === color.name
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }

          return {
            cart: [...state.cart, { product, quantity, selectedSize: size, selectedColor: color }],
          };
        });
      },

      removeFromCart: (productId, size, colorName) => {
        set((state) => ({
          cart: state.cart.filter(
            (item) =>
              !(item.product.id === productId &&
                item.selectedSize === size &&
                item.selectedColor.name === colorName)
          ),
        }));
      },

      updateQuantity: (productId, size, colorName, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId, size, colorName);
          return;
        }

        set((state) => ({
          cart: state.cart.map((item) =>
            item.product.id === productId &&
            item.selectedSize === size &&
            item.selectedColor.name === colorName
              ? { ...item, quantity }
              : item
          ),
        }));
      },

      clearCart: () => set({ cart: [] }),

      getCartTotal: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
      },

      getCartCount: () => {
        const { cart } = get();
        return cart.reduce((count, item) => count + item.quantity, 0);
      },

      getCartItem: (productId, size, colorName) => {
        return get().cart.find(
          (item) =>
            item.product.id === productId &&
            item.selectedSize === size &&
            item.selectedColor.name === colorName
        );
      },
    }),
    {
      name: 'minitrend-cart',
    }
  )
);
