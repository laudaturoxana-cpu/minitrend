import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/layout/CartDrawer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Product } from './pages/Product';
import { Wishlist } from './pages/Wishlist';
import { Contact } from './pages/Contact';
import { About } from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24 md:pt-28 lg:pt-32 premium-spacing">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="/produs/:id" element={<Product />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/despre" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </Router>
  );
}

export default App;
