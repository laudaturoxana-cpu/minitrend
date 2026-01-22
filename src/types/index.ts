export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: 'fete' | 'baieti' | 'bebelusi';
  subcategory: 'rochite' | 'bluze' | 'pantaloni' | 'seturi' | 'accesorii';
  images: string[];
  sizes: string[];
  colors: Color[];
  material: string;
  ageRange: string;
  inStock: boolean;
  isNew?: boolean;
  isSale?: boolean;
  rating: number;
  reviews: number;
}

export interface Color {
  name: string;
  hex: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: Color;
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

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}
