import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, Product, Color, WishlistItem } from '../types';

interface StoreState {
  // Cart
  cart: CartItem[];
  addToCart: (product: Product, size: string, color: Color, quantity?: number) => void;
  removeFromCart: (productId: string, size: string, colorName: string) => void;
  updateQuantity: (productId: string, size: string, colorName: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;

  // Wishlist
  wishlist: WishlistItem[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // UI State
  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // Cart State
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

      // Wishlist State
      wishlist: [],

      addToWishlist: (product) => {
        set((state) => {
          if (state.wishlist.some((item) => item.product.id === product.id)) {
            return state;
          }
          return {
            wishlist: [...state.wishlist, { product, addedAt: new Date() }],
          };
        });
      },

      removeFromWishlist: (productId) => {
        set((state) => ({
          wishlist: state.wishlist.filter((item) => item.product.id !== productId),
        }));
      },

      isInWishlist: (productId) => {
        return get().wishlist.some((item) => item.product.id === productId);
      },

      // UI State
      isCartOpen: false,
      setCartOpen: (open) => set({ isCartOpen: open }),

      isMobileMenuOpen: false,
      setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),

      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query }),
    }),
    {
      name: 'minitrend-store',
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
      }),
    }
  )
);
