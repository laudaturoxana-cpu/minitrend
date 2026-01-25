export interface Color {
  name: string;
  hex: string;
}

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

export type Category = Product['category'];
export type Subcategory = Product['subcategory'];
export type SortOption = 'featured' | 'popular' | 'newest' | 'price-asc' | 'price-desc';
