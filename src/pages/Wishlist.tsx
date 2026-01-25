import { Heart } from 'lucide-react';
import { useWishlistStore } from '../store';
import { Container, EmptyState, SectionHeader } from '../components/common';
import { Breadcrumb, Button } from '../components/ui';
import { ProductGrid } from '../components/product';

export const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlistStore();

  const products = wishlist.map((item) => item.product);

  const breadcrumbItems = [
    { label: 'Acasă', href: '/' },
    { label: 'Lista de dorințe' },
  ];

  return (
    <Container className="py-8 md:py-12">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} className="mb-8" />

      {/* Header */}
      <SectionHeader
        title="Lista de dorințe"
        subtitle={wishlist.length > 0 ? `${wishlist.length} produse salvate` : undefined}
        align="left"
      />

      {/* Content */}
      {wishlist.length === 0 ? (
        <EmptyState
          icon={<Heart size={64} />}
          title="Lista ta de dorințe este goală"
          description="Salvează produsele preferate pentru a le găsi mai ușor mai târziu"
          action={{
            label: 'Explorează produsele',
            onClick: () => {},
          }}
        />
      ) : (
        <>
          <ProductGrid products={products} columns={4} />

          <div className="mt-8 text-center">
            <Button
              variant="outline"
              onClick={() => wishlist.forEach((item) => removeFromWishlist(item.product.id))}
            >
              Golește lista
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};
