import type { Product } from './product';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface WishlistItem {
  product: Product;
  addedAt: Date;
}

export interface FilterState {
  category: string | null;
  subcategory: string | null;
  priceRange: [number, number];
  sizes: string[];
  colors: string[];
  sortBy: 'popular' | 'newest' | 'price-asc' | 'price-desc';
}
