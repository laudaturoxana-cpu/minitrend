import { useState, useMemo, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';
import { useFilterStore } from '../store';
import { ProductGrid } from '../components/product/ProductGrid';
import { FilterSidebar, SortSelect, ActiveFilters, GridToggle } from '../components/shop';
import { Container, SectionHeader } from '../components/common';
import { Button } from '../components/ui/Button';
import { Breadcrumb } from '../components/ui/Breadcrumb';

export const Shop = () => {
  const { category } = useParams<{ category?: string }>();
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('filter');

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const {
    selectedCategory,
    priceRange,
    selectedSizes,
    selectedColors,
    selectedAgeRange,
    sortBy,
    setCategory,
  } = useFilterStore();

  // Set category from URL on mount
  useEffect(() => {
    if (category && category !== selectedCategory) {
      setCategory(category);
    } else if (!category && selectedCategory) {
      setCategory(null);
    }
  }, [category]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // URL filter (new, sale)
    if (filter === 'new') {
      result = result.filter((p) => p.isNew);
    } else if (filter === 'sale') {
      result = result.filter((p) => p.isSale);
    }

    // Category filter
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Size filter
    if (selectedSizes.length > 0) {
      result = result.filter((p) =>
        p.sizes.some((s) => selectedSizes.includes(s))
      );
    }

    // Color filter
    if (selectedColors.length > 0) {
      result = result.filter((p) =>
        p.colors.some((c) =>
          selectedColors.some((sc) => c.name.toLowerCase().includes(sc))
        )
      );
    }

    // Age filter
    if (selectedAgeRange) {
      result = result.filter((p) => p.ageRange === selectedAgeRange);
    }

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'popular':
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [
    filter,
    selectedCategory,
    priceRange,
    selectedSizes,
    selectedColors,
    selectedAgeRange,
    sortBy,
  ]);

  // Page title
  const getPageTitle = () => {
    if (filter === 'new') return 'Noutăți';
    if (filter === 'sale') return 'Reduceri';
    if (category === 'fete') return 'Fete';
    if (category === 'baieti') return 'Băieți';
    if (category === 'bebelusi') return 'Bebeluși';
    return 'Toate Produsele';
  };

  // Breadcrumb items
  const breadcrumbItems: { label: string; href?: string }[] = [
    { label: 'Acasă', href: '/' },
    { label: 'Shop', href: '/shop' },
  ];

  if (category) {
    breadcrumbItems.push({ label: getPageTitle() });
  }

  return (
    <Container className="py-8 md:py-12">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} className="mb-6" />

      {/* Header */}
      <div className="mb-8">
        <SectionHeader
          title={getPageTitle()}
          subtitle={`${filteredProducts.length} produse găsite`}
          align="left"
        />
      </div>

      <div className="flex gap-8">
        {/* Desktop Sidebar */}
        <FilterSidebar />

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
            {/* Mobile Filter Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden"
              icon={<SlidersHorizontal size={18} />}
            >
              Filtre
            </Button>

            {/* Active Filters */}
            <ActiveFilters className="hidden lg:flex flex-1" />

            {/* Sort & Grid Toggle */}
            <div className="flex items-center gap-3 ml-auto">
              <SortSelect />
              <GridToggle className="hidden sm:flex" />
            </div>
          </div>

          {/* Mobile Active Filters */}
          <ActiveFilters className="lg:hidden mb-4" />

          {/* Product Grid */}
          <ProductGrid products={filteredProducts} />
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <FilterSidebar
        isOpen={mobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
        isMobile
      />
    </Container>
  );
};
