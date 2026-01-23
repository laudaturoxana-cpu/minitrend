import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown, Grid3X3, LayoutGrid } from 'lucide-react';
import { ProductCard } from '../components/ui/ProductCard';
import { products, categories } from '../data/products';

type SortOption = 'popular' | 'newest' | 'price-asc' | 'price-desc';

export const Shop = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('filter');

  const [isFilterOpen, setFilterOpen] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [gridCols, setGridCols] = useState<3 | 4>(3);

  const allSizes = ['0-3 luni', '3-6 luni', '6-9 luni', '9-12 luni', '12-18 luni', '18-24 luni', '1-2 ani', '2-3 ani', '3-4 ani', '4-5 ani', '5-6 ani', '6-7 ani', '7-8 ani'];
  const subcategories = ['rochite', 'bluze', 'pantaloni', 'seturi', 'accesorii'];

  // Reset filters when category changes
  useEffect(() => {
    setSelectedSubcategory(null);
    setSelectedSizes([]);
    setPriceRange([0, 500]);
  }, [category]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (category) {
      result = result.filter((p) => p.category === category);
    }

    // Filter by special flags
    if (filter === 'new') {
      result = result.filter((p) => p.isNew);
    } else if (filter === 'sale') {
      result = result.filter((p) => p.isSale);
    }

    // Filter by subcategory
    if (selectedSubcategory) {
      result = result.filter((p) => p.subcategory === selectedSubcategory);
    }

    // Filter by sizes
    if (selectedSizes.length > 0) {
      result = result.filter((p) => p.sizes.some((size) => selectedSizes.includes(size)));
    }

    // Filter by price
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'newest':
        result = result.filter((p) => p.isNew).concat(result.filter((p) => !p.isNew));
        break;
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'popular':
      default:
        result.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return result;
  }, [category, filter, selectedSubcategory, selectedSizes, priceRange, sortBy]);

  const categoryInfo = category ? categories.find((c) => c.id === category) : null;

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const clearFilters = () => {
    setSelectedSubcategory(null);
    setSelectedSizes([]);
    setPriceRange([0, 500]);
  };

  const hasActiveFilters = selectedSubcategory || selectedSizes.length > 0 || priceRange[0] > 0 || priceRange[1] < 500;

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Banner */}
      <section className="relative h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: categoryInfo
              ? `url(${categoryInfo.image})`
              : 'url(https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=1200&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="container h-full flex items-center relative z-10 px-5 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-head"
          >
            <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 md:mb-4">
              {filter === 'new'
                ? 'Noutăți'
                : filter === 'sale'
                ? 'Reduceri'
                : categoryInfo
                ? categoryInfo.name
                : 'Toate Produsele'}
            </h1>
            <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-xl">
              {categoryInfo?.description || 'Descoperă întreaga noastră colecție de hăinuțe pentru copii'}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container py-10 md:py-14 lg:py-20 px-5 md:px-6">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 md:mb-12">
          <div className="flex items-center gap-3">
            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl shadow-card text-sm"
            >
              <SlidersHorizontal size={18} />
              <span className="font-medium">Filtre</span>
              {hasActiveFilters && (
                <span className="w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center font-bold">
                  !
                </span>
              )}
            </button>

            {/* Results Count */}
            <p className="text-text-secondary text-sm md:text-base">
              <span className="font-bold text-text-primary">{filteredProducts.length}</span> produse
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none px-4 py-2.5 pr-10 bg-white rounded-xl shadow-card cursor-pointer outline-none focus:ring-2 focus:ring-primary text-sm font-medium"
              >
                <option value="popular">Cele mai populare</option>
                <option value="newest">Cele mai noi</option>
                <option value="price-asc">Preț: Mic - Mare</option>
                <option value="price-desc">Preț: Mare - Mic</option>
              </select>
              <ChevronDown
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-light pointer-events-none"
              />
            </div>

            {/* Grid Toggle */}
            <div className="hidden md:flex items-center gap-1 bg-white rounded-xl shadow-card p-1.5">
              <button
                onClick={() => setGridCols(3)}
                className={`p-2 rounded-lg transition-all ${gridCols === 3 ? 'bg-primary text-white' : 'text-text-light hover:text-primary'}`}
              >
                <LayoutGrid size={18} />
              </button>
              <button
                onClick={() => setGridCols(4)}
                className={`p-2 rounded-lg transition-all ${gridCols === 4 ? 'bg-primary text-white' : 'text-text-light hover:text-primary'}`}
              >
                <Grid3X3 size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-10 lg:gap-14">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-64 xl:w-72 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Subcategories */}
              <div className="bg-white p-8 rounded-2xl shadow-card">
                <h3 className="font-heading font-bold text-base mb-5">Categorie</h3>
                <div className="space-y-4">
                  {subcategories.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setSelectedSubcategory(selectedSubcategory === sub ? null : sub)}
                      className={`
                        w-full text-left px-4 py-2.5 rounded-xl transition-all text-sm
                        ${selectedSubcategory === sub
                          ? 'bg-primary text-white font-medium'
                          : 'hover:bg-primary/10 text-text-secondary hover:text-primary'
                        }
                      `}
                    >
                      {sub === 'rochite' ? 'Rochițe' : sub === 'bluze' ? 'Bluze' : sub === 'pantaloni' ? 'Pantaloni' : sub === 'seturi' ? 'Seturi' : 'Accesorii'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="bg-white p-8 rounded-2xl shadow-card">
                <h3 className="font-heading font-bold text-base mb-5">Preț</h3>
                <div className="space-y-5">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-primary h-2 cursor-pointer"
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="px-3 py-2 bg-gray-100 rounded-lg font-medium">{priceRange[0]} Lei</span>
                    <span className="px-3 py-2 bg-gray-100 rounded-lg font-medium">{priceRange[1]} Lei</span>
                  </div>
                </div>
              </div>

              {/* Sizes */}
              <div className="bg-white p-8 rounded-2xl shadow-card">
                <h3 className="font-heading font-bold text-base mb-5">Mărime</h3>
                <div className="flex flex-wrap gap-2.5">
                  {allSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`
                        px-3 py-2 text-xs rounded-lg border-2 transition-all
                        ${selectedSizes.includes(size)
                          ? 'bg-primary text-white border-primary font-medium'
                          : 'border-gray-200 hover:border-primary text-text-secondary hover:text-primary'
                        }
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full py-3 text-primary font-bold hover:bg-primary/10 rounded-xl transition-colors text-sm"
                >
                  Resetează Filtrele
                </button>
              )}
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1 min-w-0">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-text-secondary text-base mb-4">
                  Nu am găsit produse cu filtrele selectate
                </p>
                <button
                  onClick={clearFilters}
                  className="text-primary font-medium hover:underline"
                >
                  Resetează filtrele
                </button>
              </div>
            ) : (
              <motion.div
                layout
                className={`grid grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start ${
                  gridCols === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-3 xl:grid-cols-4'
                }`}
              >
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setFilterOpen(false)} />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="absolute left-0 top-0 bottom-0 w-[280px] bg-cream overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-heading text-xl font-bold">Filtre</h2>
                  <button onClick={() => setFilterOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                    <X size={22} />
                  </button>
                </div>

                {/* Filter content */}
                <div className="space-y-8">
                  {/* Subcategories */}
                  <div>
                    <h3 className="font-heading font-bold text-base mb-5">Categorie</h3>
                  <div className="space-y-4">
                      {subcategories.map((sub) => (
                        <button
                          key={sub}
                          onClick={() => setSelectedSubcategory(selectedSubcategory === sub ? null : sub)}
                          className={`
                            w-full text-left px-4 py-2.5 rounded-xl transition-colors text-sm
                            ${selectedSubcategory === sub
                              ? 'bg-primary text-white font-medium'
                              : 'hover:bg-primary/10 text-text-secondary'
                            }
                          `}
                        >
                          {sub === 'rochite' ? 'Rochițe' : sub === 'bluze' ? 'Bluze' : sub === 'pantaloni' ? 'Pantaloni' : sub === 'seturi' ? 'Seturi' : 'Accesorii'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="font-heading font-bold text-base mb-5">Preț</h3>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full accent-primary h-2"
                    />
                    <div className="flex items-center justify-between text-sm mt-4">
                      <span className="px-3 py-2 bg-gray-100 rounded-lg font-medium">{priceRange[0]} Lei</span>
                      <span className="px-3 py-2 bg-gray-100 rounded-lg font-medium">{priceRange[1]} Lei</span>
                    </div>
                  </div>

                  {/* Sizes */}
                  <div>
                    <h3 className="font-heading font-bold text-base mb-5">Mărime</h3>
                    <div className="flex flex-wrap gap-2.5">
                      {allSizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => toggleSize(size)}
                          className={`
                            px-3 py-2 text-xs rounded-lg border-2 transition-colors
                            ${selectedSizes.includes(size)
                              ? 'bg-primary text-white border-primary font-medium'
                              : 'border-gray-200 hover:border-primary text-text-secondary'
                            }
                          `}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-10 space-y-4">
                  <button
                    onClick={() => setFilterOpen(false)}
                    className="w-full py-3 bg-primary text-white font-semibold rounded-xl text-sm"
                  >
                    Vezi {filteredProducts.length} Produse
                  </button>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="w-full py-3 text-primary font-semibold text-sm"
                    >
                      Resetează Filtrele
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
