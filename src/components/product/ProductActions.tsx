import { useState } from 'react';
import { Heart, ShoppingBag, Check } from 'lucide-react';
import type { Product, Color } from '../../types';
import { useCartStore, useWishlistStore, useUIStore } from '../../store';
import { Button } from '../ui/Button';
import { ColorSwatchGroup } from '../common/ColorSwatch';
import { SizeSelector } from '../common/SizeSelector';
import { QuantitySelector } from '../common/QuantitySelector';
import { cn } from '../../utils';

interface ProductActionsProps {
  product: Product;
  className?: string;
}

export const ProductActions = ({ product, className }: ProductActionsProps) => {
  const [selectedColor, setSelectedColor] = useState<Color>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const addToCart = useCartStore((state) => state.addToCart);
  const openCart = useUIStore((state) => state.openCart);
  const { isInWishlist, toggleWishlist } = useWishlistStore();

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setAddedToCart(true);
    openCart();
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleColorSelect = (colorId: string) => {
    const color = product.colors.find((c) => c.hex === colorId);
    if (color) setSelectedColor(color);
  };

  const colorsForSwatch = product.colors.map((c) => ({
    id: c.hex,
    hex: c.hex,
    name: c.name,
  }));

  return (
    <div className={cn('space-y-6', className)}>
      {/* Color Selection */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-text-primary">Culoare</span>
          <span className="text-sm text-text-secondary">{selectedColor.name}</span>
        </div>
        <ColorSwatchGroup
          colors={colorsForSwatch}
          selectedId={selectedColor.hex}
          onSelect={handleColorSelect}
          size="md"
        />
      </div>

      {/* Size Selection */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-text-primary">Mărime</span>
          <button className="text-sm text-primary hover:underline">
            Ghid mărimi
          </button>
        </div>
        <SizeSelector
          sizes={product.sizes}
          selectedSize={selectedSize}
          onSelect={setSelectedSize}
        />
      </div>

      {/* Quantity */}
      <div>
        <span className="text-sm font-medium text-text-primary mb-3 block">
          Cantitate
        </span>
        <QuantitySelector
          value={quantity}
          onChange={setQuantity}
          min={1}
          max={10}
        />
      </div>

      {/* Stock Status */}
      <div className="flex items-center gap-2">
        {product.inStock ? (
          <>
            <span className="w-2 h-2 rounded-full bg-success" />
            <span className="text-sm text-success font-medium">În stoc</span>
          </>
        ) : (
          <>
            <span className="w-2 h-2 rounded-full bg-error" />
            <span className="text-sm text-error font-medium">Stoc epuizat</span>
          </>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          fullWidth
          size="lg"
          icon={addedToCart ? <Check size={20} /> : <ShoppingBag size={20} />}
        >
          {addedToCart ? 'Adăugat!' : 'Adaugă în coș'}
        </Button>

        <Button
          variant={inWishlist ? 'secondary' : 'outline'}
          size="lg"
          onClick={() => toggleWishlist(product)}
          aria-label={inWishlist ? 'Elimină din favorite' : 'Adaugă la favorite'}
        >
          <Heart size={20} fill={inWishlist ? 'currentColor' : 'none'} />
        </Button>
      </div>
    </div>
  );
};
