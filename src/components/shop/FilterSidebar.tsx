import { X, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFilterStore } from '../../store';
import { useScrollLock } from '../../hooks';
import { Button } from '../ui/Button';
import { Checkbox } from '../ui/Checkbox';
import { Slider } from '../ui/Slider';
import { cn } from '../../utils';
import { formatPrice } from '../../utils/formatters';
import { slideInLeft, overlayVariants } from '../../config/motion';

const categories = [
  { id: 'fete', label: 'Fete' },
  { id: 'baieti', label: 'Băieți' },
  { id: 'bebelusi', label: 'Bebeluși' },
];

const sizes = ['0-3M', '3-6M', '6-12M', '12-18M', '18-24M', '2-3Y', '3-4Y', '4-5Y'];

const colors = [
  { id: 'roz', hex: '#F472B6', name: 'Roz' },
  { id: 'albastru', hex: '#3B82F6', name: 'Albastru' },
  { id: 'alb', hex: '#FFFFFF', name: 'Alb' },
  { id: 'rosu', hex: '#EF4444', name: 'Roșu' },
  { id: 'verde', hex: '#22C55E', name: 'Verde' },
  { id: 'galben', hex: '#EAB308', name: 'Galben' },
];

const ageRanges = ['0-6 luni', '6-12 luni', '1-2 ani', '2-4 ani', '4-6 ani'];

interface FilterSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  isMobile?: boolean;
}

export const FilterSidebar = ({ isOpen = true, onClose, isMobile = false }: FilterSidebarProps) => {
  useScrollLock(isMobile && isOpen);

  const {
    selectedCategory,
    setCategory,
    priceRange,
    setPriceRange,
    minPrice,
    maxPrice,
    selectedSizes,
    toggleSize,
    selectedColors,
    toggleColor,
    selectedAgeRange,
    setAgeRange,
    clearAllFilters,
    hasActiveFilters,
  } = useFilterStore();

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <FilterSection title="Categorii">
        <div className="space-y-2">
          {categories.map((cat) => (
            <Checkbox
              key={cat.id}
              label={cat.label}
              checked={selectedCategory === cat.id}
              onChange={() => setCategory(selectedCategory === cat.id ? null : cat.id)}
              size="sm"
            />
          ))}
        </div>
      </FilterSection>

      {/* Price Range */}
      <FilterSection title="Preț">
        <div className="px-1">
          <Slider
            min={minPrice}
            max={maxPrice}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            showValue
            formatValue={(v) => formatPrice(v)}
          />
          <div className="flex justify-between text-sm text-text-secondary mt-2">
            <span>{formatPrice(minPrice)}</span>
            <span>{formatPrice(maxPrice)}</span>
          </div>
        </div>
      </FilterSection>

      {/* Sizes */}
      <FilterSection title="Mărimi">
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className={cn(
                'px-3 py-1.5 text-sm rounded-lg border transition-all',
                selectedSizes.includes(size)
                  ? 'bg-primary border-primary text-white'
                  : 'border-gray-200 hover:border-primary'
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Colors */}
      <FilterSection title="Culori">
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => toggleColor(color.id)}
              title={color.name}
              className={cn(
                'w-8 h-8 rounded-full border-2 transition-all',
                selectedColors.includes(color.id)
                  ? 'border-primary ring-2 ring-primary/20'
                  : 'border-gray-200',
                color.id === 'alb' && 'ring-1 ring-gray-200'
              )}
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
      </FilterSection>

      {/* Age Range */}
      <FilterSection title="Vârstă">
        <div className="space-y-2">
          {ageRanges.map((age) => (
            <Checkbox
              key={age}
              label={age}
              checked={selectedAgeRange === age}
              onChange={() => setAgeRange(selectedAgeRange === age ? null : age)}
              size="sm"
            />
          ))}
        </div>
      </FilterSection>

      {/* Clear Filters */}
      {hasActiveFilters() && (
        <Button variant="outline" fullWidth onClick={clearAllFilters}>
          Șterge filtrele
        </Button>
      )}
    </div>
  );

  // Mobile Drawer
  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 bg-black/50"
              onClick={onClose}
            />

            {/* Drawer */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute left-0 top-0 bottom-0 w-[300px] bg-cream shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal size={20} className="text-primary" />
                  <h2 className="font-heading text-lg font-bold">Filtre</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-5">
                <FilterContent />
              </div>

              {/* Footer */}
              <div className="p-5 border-t border-gray-100">
                <Button fullWidth onClick={onClose}>
                  Aplică Filtrele
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  }

  // Desktop Sidebar
  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-28 bg-white rounded-2xl p-6 shadow-soft">
        <div className="flex items-center gap-2 mb-6">
          <SlidersHorizontal size={20} className="text-primary" />
          <h2 className="font-heading text-lg font-bold">Filtre</h2>
        </div>
        <FilterContent />
      </div>
    </aside>
  );
};

// Filter Section Component
const FilterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="font-medium text-text-primary mb-3">{title}</h3>
    {children}
  </div>
);
