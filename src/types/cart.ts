import type { Product, Color } from './product';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: Color;
}

export interface CartSummary {
  subtotal: number;
  shipping: number;
  total: number;
  itemCount: number;
}
