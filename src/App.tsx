import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/layout/CartDrawer';
import { LoadingSpinner } from './components/common';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const Shop = lazy(() => import('./pages/Shop').then((m) => ({ default: m.Shop })));
const Product = lazy(() => import('./pages/Product').then((m) => ({ default: m.Product })));
const Wishlist = lazy(() => import('./pages/Wishlist').then((m) => ({ default: m.Wishlist })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

// Page loading fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <LoadingSpinner size="lg" />
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24 md:pt-28 lg:pt-32">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:category" element={<Shop />} />
              <Route path="/produs/:id" element={<Product />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/despre" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </Router>
  );
}

export default App;
