import type { Product } from '../types';

// Imagini cu copii mici - doar pentru demonstrație
// În producție, acestea ar fi înlocuite cu imagini reale ale produselor

export const products: Product[] = [
  // FETE - Rochițe
  {
    id: 'f1',
    name: 'Rochiță Fluturi Magici',
    price: 149,
    originalPrice: 189,
    description: 'Rochiță adorabilă cu imprimeu fluturi colorați, perfectă pentru zilele de vară. Material ușor și respirabil.',
    category: 'fete',
    subcategory: 'rochite',
    images: [
      'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=500&q=80',
    ],
    sizes: ['2-3 ani', '3-4 ani', '4-5 ani', '5-6 ani', '6-7 ani'],
    colors: [
      { name: 'Roz', hex: '#F472B6' },
      { name: 'Lavandă', hex: '#A78BFA' },
    ],
    material: '100% Bumbac organic',
    ageRange: '2-7 ani',
    inStock: true,
    isNew: true,
    isSale: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 'f2',
    name: 'Rochiță Prințesă Stele',
    price: 179,
    description: 'Rochiță elegantă cu detalii strălucitoare, ideală pentru ocazii speciale.',
    category: 'fete',
    subcategory: 'rochite',
    images: [
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500&q=80',
    ],
    sizes: ['2-3 ani', '3-4 ani', '4-5 ani', '5-6 ani'],
    colors: [
      { name: 'Alb', hex: '#FFFFFF' },
      { name: 'Roz Pal', hex: '#FECDD3' },
    ],
    material: 'Tulle și bumbac',
    ageRange: '2-6 ani',
    inStock: true,
    isNew: true,
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 'f3',
    name: 'Rochiță Flori de Primăvară',
    price: 129,
    description: 'Rochiță veselă cu imprimeu floral, perfectă pentru plimbări în parc.',
    category: 'fete',
    subcategory: 'rochite',
    images: [
      'https://images.unsplash.com/photo-1476234251651-f353703a034d?w=500&q=80',
    ],
    sizes: ['1-2 ani', '2-3 ani', '3-4 ani', '4-5 ani'],
    colors: [
      { name: 'Galben', hex: '#FCD34D' },
      { name: 'Verde Mentă', hex: '#6EE7B7' },
    ],
    material: '95% Bumbac, 5% Elastan',
    ageRange: '1-5 ani',
    inStock: true,
    rating: 4.7,
    reviews: 56,
  },

  // FETE - Bluze
  {
    id: 'f4',
    name: 'Bluziță Unicorn Magic',
    price: 79,
    description: 'Bluziță confortabilă cu unicorn brodat, adorată de toate fetițele.',
    category: 'fete',
    subcategory: 'bluze',
    images: [
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&q=80',
    ],
    sizes: ['2-3 ani', '3-4 ani', '4-5 ani', '5-6 ani', '6-7 ani', '7-8 ani'],
    colors: [
      { name: 'Roz', hex: '#F472B6' },
      { name: 'Alb', hex: '#FFFFFF' },
      { name: 'Lila', hex: '#C4B5FD' },
    ],
    material: '100% Bumbac',
    ageRange: '2-8 ani',
    inStock: true,
    rating: 4.6,
    reviews: 78,
  },
  {
    id: 'f5',
    name: 'Bluză cu Volănașe',
    price: 89,
    originalPrice: 109,
    description: 'Bluză elegantă cu volănașe delicate, perfectă pentru orice ocazie.',
    category: 'fete',
    subcategory: 'bluze',
    images: [
      'https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?w=500&q=80',
    ],
    sizes: ['3-4 ani', '4-5 ani', '5-6 ani', '6-7 ani'],
    colors: [
      { name: 'Coral', hex: '#FB7185' },
      { name: 'Crem', hex: '#FEF3C7' },
    ],
    material: 'Viscoză',
    ageRange: '3-7 ani',
    inStock: true,
    isSale: true,
    rating: 4.5,
    reviews: 42,
  },

  // FETE - Pantaloni
  {
    id: 'f6',
    name: 'Jeans Stretchy Confort',
    price: 119,
    description: 'Jeans confortabili cu talie elastică, ușor de îmbrăcat și rezistenți.',
    category: 'fete',
    subcategory: 'pantaloni',
    images: [
      'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=500&q=80',
    ],
    sizes: ['2-3 ani', '3-4 ani', '4-5 ani', '5-6 ani', '6-7 ani'],
    colors: [
      { name: 'Denim', hex: '#3B82F6' },
      { name: 'Denim Deschis', hex: '#93C5FD' },
    ],
    material: '98% Bumbac, 2% Elastan',
    ageRange: '2-7 ani',
    inStock: true,
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 'f7',
    name: 'Colanți Balerina',
    price: 59,
    description: 'Colanți moi și elastici, perfecți pentru dans sau joacă.',
    category: 'fete',
    subcategory: 'pantaloni',
    images: [
      'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=500&q=80',
    ],
    sizes: ['2-3 ani', '3-4 ani', '4-5 ani', '5-6 ani', '6-7 ani', '7-8 ani'],
    colors: [
      { name: 'Negru', hex: '#1F2937' },
      { name: 'Roz', hex: '#F472B6' },
      { name: 'Navy', hex: '#1E3A8A' },
    ],
    material: '90% Bumbac, 10% Elastan',
    ageRange: '2-8 ani',
    inStock: true,
    rating: 4.7,
    reviews: 98,
  },

  // BĂIEȚI - Bluze
  {
    id: 'b1',
    name: 'Tricou Dinozauri Cool',
    price: 69,
    description: 'Tricou distractiv cu dinozauri colorați, favoritul băieților aventurieri.',
    category: 'baieti',
    subcategory: 'bluze',
    images: [
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=500&q=80',
    ],
    sizes: ['2-3 ani', '3-4 ani', '4-5 ani', '5-6 ani', '6-7 ani', '7-8 ani'],
    colors: [
      { name: 'Verde', hex: '#22C55E' },
      { name: 'Albastru', hex: '#3B82F6' },
      { name: 'Gri', hex: '#6B7280' },
    ],
    material: '100% Bumbac organic',
    ageRange: '2-8 ani',
    inStock: true,
    isNew: true,
    rating: 4.9,
    reviews: 203,
  },
  {
    id: 'b2',
    name: 'Hanorac Super Erou',
    price: 139,
    description: 'Hanorac călduroș cu glugă, perfect pentru zilele răcoroase.',
    category: 'baieti',
    subcategory: 'bluze',
    images: [
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&q=80',
    ],
    sizes: ['3-4 ani', '4-5 ani', '5-6 ani', '6-7 ani', '7-8 ani'],
    colors: [
      { name: 'Roșu', hex: '#EF4444' },
      { name: 'Navy', hex: '#1E3A8A' },
    ],
    material: 'Fleece 100% bumbac',
    ageRange: '3-8 ani',
    inStock: true,
    rating: 4.8,
    reviews: 87,
  },
  {
    id: 'b3',
    name: 'Polo Classic Mini',
    price: 89,
    description: 'Tricou polo elegant pentru micii domni, perfect pentru evenimente.',
    category: 'baieti',
    subcategory: 'bluze',
    images: [
      'https://images.unsplash.com/photo-1611637576109-b6f60d807f2d?w=500&q=80',
    ],
    sizes: ['2-3 ani', '3-4 ani', '4-5 ani', '5-6 ani', '6-7 ani'],
    colors: [
      { name: 'Alb', hex: '#FFFFFF' },
      { name: 'Navy', hex: '#1E3A8A' },
      { name: 'Verde Închis', hex: '#166534' },
    ],
    material: 'Piqué bumbac',
    ageRange: '2-7 ani',
    inStock: true,
    rating: 4.6,
    reviews: 64,
  },

  // BĂIEȚI - Pantaloni
  {
    id: 'b4',
    name: 'Jeans Explorer',
    price: 129,
    description: 'Jeans rezistenți pentru aventuri, cu genunchi întăriți.',
    category: 'baieti',
    subcategory: 'pantaloni',
    images: [
      'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=500&q=80',
    ],
    sizes: ['2-3 ani', '3-4 ani', '4-5 ani', '5-6 ani', '6-7 ani', '7-8 ani'],
    colors: [
      { name: 'Denim', hex: '#3B82F6' },
      { name: 'Denim Închis', hex: '#1E40AF' },
    ],
    material: '99% Bumbac, 1% Elastan',
    ageRange: '2-8 ani',
    inStock: true,
    rating: 4.9,
    reviews: 178,
  },
  {
    id: 'b5',
    name: 'Pantaloni Sport Active',
    price: 99,
    originalPrice: 129,
    description: 'Pantaloni de trening confortabili pentru sport și joacă.',
    category: 'baieti',
    subcategory: 'pantaloni',
    images: [
      'https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?w=500&q=80',
    ],
    sizes: ['2-3 ani', '3-4 ani', '4-5 ani', '5-6 ani', '6-7 ani', '7-8 ani'],
    colors: [
      { name: 'Negru', hex: '#1F2937' },
      { name: 'Gri', hex: '#6B7280' },
      { name: 'Navy', hex: '#1E3A8A' },
    ],
    material: 'Fleece ușor',
    ageRange: '2-8 ani',
    inStock: true,
    isSale: true,
    rating: 4.7,
    reviews: 134,
  },
  {
    id: 'b6',
    name: 'Pantaloni Scurți Summer',
    price: 69,
    description: 'Pantaloni scurți lejeri pentru zilele calde de vară.',
    category: 'baieti',
    subcategory: 'pantaloni',
    images: [
      'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=500&q=80',
    ],
    sizes: ['2-3 ani', '3-4 ani', '4-5 ani', '5-6 ani', '6-7 ani'],
    colors: [
      { name: 'Kaki', hex: '#A3A380' },
      { name: 'Navy', hex: '#1E3A8A' },
      { name: 'Bej', hex: '#D4A373' },
    ],
    material: '100% Bumbac',
    ageRange: '2-7 ani',
    inStock: true,
    rating: 4.5,
    reviews: 67,
  },

  // BEBELUȘI
  {
    id: 'bb1',
    name: 'Set Body Primul Aniversar',
    price: 99,
    description: 'Set adorabil pentru bebeluși cu body și pantaloni asortați.',
    category: 'bebelusi',
    subcategory: 'seturi',
    images: [
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&q=80',
    ],
    sizes: ['0-3 luni', '3-6 luni', '6-9 luni', '9-12 luni', '12-18 luni'],
    colors: [
      { name: 'Roz', hex: '#F472B6' },
      { name: 'Bleu', hex: '#93C5FD' },
      { name: 'Crem', hex: '#FEF3C7' },
    ],
    material: '100% Bumbac organic certificat',
    ageRange: '0-18 luni',
    inStock: true,
    isNew: true,
    rating: 5.0,
    reviews: 234,
  },
  {
    id: 'bb2',
    name: 'Salopetă Ursuleț',
    price: 119,
    description: 'Salopetă călduroasă cu urechi de ursuleț, perfectă pentru iarnă.',
    category: 'bebelusi',
    subcategory: 'seturi',
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&q=80',
    ],
    sizes: ['0-3 luni', '3-6 luni', '6-9 luni', '9-12 luni'],
    colors: [
      { name: 'Maro', hex: '#92400E' },
      { name: 'Gri', hex: '#9CA3AF' },
    ],
    material: 'Fleece moale',
    ageRange: '0-12 luni',
    inStock: true,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 'bb3',
    name: 'Body Bumbac Organic 3-Pack',
    price: 89,
    description: 'Set de 3 body-uri din bumbac organic, blânde cu pielea bebelușului.',
    category: 'bebelusi',
    subcategory: 'bluze',
    images: [
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&q=80',
    ],
    sizes: ['0-3 luni', '3-6 luni', '6-9 luni', '9-12 luni', '12-18 luni'],
    colors: [
      { name: 'Alb', hex: '#FFFFFF' },
      { name: 'Mix Pastel', hex: '#FED7AA' },
    ],
    material: '100% Bumbac organic GOTS',
    ageRange: '0-18 luni',
    inStock: true,
    rating: 4.8,
    reviews: 312,
  },
  {
    id: 'bb4',
    name: 'Pantalonași Primul Pas',
    price: 59,
    description: 'Pantalonași moi cu talie elastică, perfecți pentru bebelușii activi.',
    category: 'bebelusi',
    subcategory: 'pantaloni',
    images: [
      'https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=500&q=80',
    ],
    sizes: ['3-6 luni', '6-9 luni', '9-12 luni', '12-18 luni', '18-24 luni'],
    colors: [
      { name: 'Gri', hex: '#9CA3AF' },
      { name: 'Navy', hex: '#1E3A8A' },
      { name: 'Verde Mentă', hex: '#6EE7B7' },
    ],
    material: '95% Bumbac, 5% Elastan',
    ageRange: '3-24 luni',
    inStock: true,
    rating: 4.7,
    reviews: 189,
  },
];

export const categories = [
  {
    id: 'fete',
    name: 'Fete',
    description: 'Rochițe, bluze și pantaloni pentru fetițe',
    image: 'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=600&q=80',
    color: '#F472B6',
  },
  {
    id: 'baieti',
    name: 'Băieți',
    description: 'Tricouri, hanorace și pantaloni pentru băieței',
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&q=80',
    color: '#38BDF8',
  },
  {
    id: 'bebelusi',
    name: 'Bebeluși',
    description: 'Body-uri, salopete și seturi pentru cei mici',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80',
    color: '#A78BFA',
  },
];

export const getProductsByCategory = (category: string) => {
  return products.filter((p) => p.category === category);
};

export const getNewProducts = () => {
  return products.filter((p) => p.isNew);
};

export const getSaleProducts = () => {
  return products.filter((p) => p.isSale);
};

export const getProductById = (id: string) => {
  return products.find((p) => p.id === id);
};

export const searchProducts = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery) ||
      p.category.toLowerCase().includes(lowercaseQuery)
  );
};
