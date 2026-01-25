import { useParams, Navigate } from 'react-router-dom';
import { products } from '../data/products';
import { Container } from '../components/common';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { ProductGallery, ProductInfo, ProductActions, ProductGrid } from '../components/product';
import { SectionHeader } from '../components/common/SectionHeader';

export const Product = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  // Get related products (same category, exclude current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const categoryLabel = {
    fete: 'Fete',
    baieti: 'Băieți',
    bebelusi: 'Bebeluși',
  }[product.category];

  const breadcrumbItems = [
    { label: 'Acasă', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: categoryLabel, href: `/shop/${product.category}` },
    { label: product.name },
  ];

  return (
    <Container className="py-8 md:py-12">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} className="mb-8" />

      {/* Product Details */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-24">
        {/* Gallery */}
        <ProductGallery images={product.images} productName={product.name} />

        {/* Info & Actions */}
        <div className="space-y-8">
          <ProductInfo product={product} />
          <ProductActions product={product} />
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <SectionHeader
            title="Produse similare"
            subtitle="S-ar putea să-ți placă și acestea"
            align="left"
          />
          <ProductGrid products={relatedProducts} columns={4} />
        </section>
      )}
    </Container>
  );
};
