import { create } from 'zustand';
import type { SortOption } from '../types';

interface FilterState {
  // Categories
  selectedCategory: string | null;
  selectedSubcategory: string | null;
  setCategory: (category: string | null) => void;
  setSubcategory: (subcategory: string | null) => void;

  // Price range
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  minPrice: number;
  maxPrice: number;

  // Sizes
  selectedSizes: string[];
  toggleSize: (size: string) => void;
  clearSizes: () => void;

  // Colors
  selectedColors: string[];
  toggleColor: (color: string) => void;
  clearColors: () => void;

  // Age range
  selectedAgeRange: string | null;
  setAgeRange: (age: string | null) => void;

  // Sorting
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;

  // Grid view
  gridView: 'grid' | 'list';
  setGridView: (view: 'grid' | 'list') => void;

  // Actions
  clearAllFilters: () => void;
  hasActiveFilters: () => boolean;
}

export const useFilterStore = create<FilterState>((set, get) => ({
  // Categories
  selectedCategory: null,
  selectedSubcategory: null,
  setCategory: (category) => set({ selectedCategory: category, selectedSubcategory: null }),
  setSubcategory: (subcategory) => set({ selectedSubcategory: subcategory }),

  // Price range
  priceRange: [0, 500],
  minPrice: 0,
  maxPrice: 500,
  setPriceRange: (range) => set({ priceRange: range }),

  // Sizes
  selectedSizes: [],
  toggleSize: (size) =>
    set((state) => ({
      selectedSizes: state.selectedSizes.includes(size)
        ? state.selectedSizes.filter((s) => s !== size)
        : [...state.selectedSizes, size],
    })),
  clearSizes: () => set({ selectedSizes: [] }),

  // Colors
  selectedColors: [],
  toggleColor: (color) =>
    set((state) => ({
      selectedColors: state.selectedColors.includes(color)
        ? state.selectedColors.filter((c) => c !== color)
        : [...state.selectedColors, color],
    })),
  clearColors: () => set({ selectedColors: [] }),

  // Age range
  selectedAgeRange: null,
  setAgeRange: (age) => set({ selectedAgeRange: age }),

  // Sorting
  sortBy: 'featured',
  setSortBy: (sort) => set({ sortBy: sort }),

  // Grid view
  gridView: 'grid',
  setGridView: (view) => set({ gridView: view }),

  // Actions
  clearAllFilters: () =>
    set({
      selectedCategory: null,
      selectedSubcategory: null,
      priceRange: [0, 500],
      selectedSizes: [],
      selectedColors: [],
      selectedAgeRange: null,
      sortBy: 'featured',
    }),

  hasActiveFilters: () => {
    const state = get();
    return (
      state.selectedCategory !== null ||
      state.selectedSubcategory !== null ||
      state.priceRange[0] > state.minPrice ||
      state.priceRange[1] < state.maxPrice ||
      state.selectedSizes.length > 0 ||
      state.selectedColors.length > 0 ||
      state.selectedAgeRange !== null
    );
  },
}));
