import { products } from '../data/products';
import {
  HeroSection,
  FeaturesStrip,
  CategoriesGrid,
  ProductShowcase,
  PromoBanner,
  Testimonials,
  WhyChooseUs,
  Newsletter,
} from '../components/home';

export const Home = () => {
  // Get featured products (newest and on sale)
  const newProducts = products.filter((p) => p.isNew).slice(0, 8);
  const saleProducts = products.filter((p) => p.isSale).slice(0, 8);

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Strip */}
      <FeaturesStrip />

      {/* Categories Grid */}
      <CategoriesGrid />

      {/* New Arrivals */}
      <ProductShowcase
        title="Noutăți"
        subtitle="Descoperă cele mai recente adăugiri în colecția noastră"
        products={newProducts}
        viewAllLink="/shop?filter=new"
        viewAllText="Vezi toate noutățile"
      />

      {/* Promo Banner */}
      <PromoBanner />

      {/* Sale Products */}
      <ProductShowcase
        title="Reduceri Speciale"
        subtitle="Oferte de neratat pentru micuții tăi"
        products={saleProducts}
        viewAllLink="/shop?filter=sale"
        viewAllText="Vezi toate reducerile"
      />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Newsletter */}
      <Newsletter />

      {/* Testimonials */}
      <Testimonials />
    </>
  );
};
