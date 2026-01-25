import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product, WishlistItem } from '../types';

interface WishlistState {
  wishlist: WishlistItem[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  getWishlistCount: () => number;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
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

      toggleWishlist: (product) => {
        const { isInWishlist, addToWishlist, removeFromWishlist } = get();
        if (isInWishlist(product.id)) {
          removeFromWishlist(product.id);
        } else {
          addToWishlist(product);
        }
      },

      isInWishlist: (productId) => {
        return get().wishlist.some((item) => item.product.id === productId);
      },

      getWishlistCount: () => {
        return get().wishlist.length;
      },
    }),
    {
      name: 'minitrend-wishlist',
    }
  )
);
