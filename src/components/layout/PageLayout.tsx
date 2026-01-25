import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';
import { cn } from '../../utils';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  hideFooter?: boolean;
  hideHeader?: boolean;
}

export const PageLayout = ({
  children,
  className,
  hideFooter = false,
  hideHeader = false,
}: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      {!hideHeader && <Header />}

      <main className={cn('flex-1', className)}>
        {children}
      </main>

      {!hideFooter && <Footer />}

      {/* Global Drawers */}
      <CartDrawer />
    </div>
  );
};
