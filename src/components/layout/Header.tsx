import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Heart, User, Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { useStore } from '../../store/useStore';

const navLinks = [
  { name: 'Acasă', path: '/' },
  {
    name: 'Shop',
    path: '/shop',
    submenu: [
      { name: 'Toate Produsele', path: '/shop' },
      { name: 'Fete', path: '/shop/fete' },
      { name: 'Băieți', path: '/shop/baieti' },
      { name: 'Bebeluși', path: '/shop/bebelusi' },
    ],
  },
  { name: 'Noutăți', path: '/shop?filter=new' },
  { name: 'Reduceri', path: '/shop?filter=sale' },
  { name: 'Despre Noi', path: '/despre' },
  { name: 'Contact', path: '/contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const {
    getCartCount,
    wishlist,
    isMobileMenuOpen,
    setMobileMenuOpen,
    setCartOpen,
    searchQuery,
    setSearchQuery,
  } = useStore();

  const cartCount = getCartCount();
  const wishlistCount = wishlist.length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location, setMobileMenuOpen]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled ? 'glass shadow-card py-4' : 'bg-white/98 backdrop-blur-md py-6'}
        `}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Logo size={isScrolled ? 'sm' : 'md'} />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-3">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    to={link.path}
                    className={`
                      flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-base
                      transition-all duration-200
                      ${location.pathname === link.path
                        ? 'text-primary bg-primary/10'
                        : 'text-text-primary hover:text-primary hover:bg-primary/5'
                      }
                    `}
                  >
                    {link.name}
                    {link.submenu && <ChevronDown size={18} />}
                  </Link>

                  {/* Submenu */}
                  {link.submenu && (
                    <AnimatePresence>
                      {activeSubmenu === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-4 py-4 bg-white rounded-2xl shadow-card min-w-[240px]"
                        >
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.name}
                              to={sublink.path}
                              className="block px-6 py-4 text-base text-text-primary hover:text-primary hover:bg-primary/5 transition-colors"
                            >
                              {sublink.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2.5 rounded-full hover:bg-primary/10 text-text-primary hover:text-primary transition-colors"
              >
                <Search size={22} />
              </motion.button>

              {/* Wishlist */}
              <Link to="/wishlist" className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-full hover:bg-primary/10 text-text-primary hover:text-primary transition-colors"
                >
                  <Heart size={22} />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-secondary rounded-full">
                      {wishlistCount}
                    </span>
                  )}
                </motion.div>
              </Link>

              {/* Cart */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCartOpen(true)}
                className="relative p-2.5 rounded-full hover:bg-primary/10 text-text-primary hover:text-primary transition-colors"
              >
                <ShoppingBag size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-primary rounded-full">
                    {cartCount}
                  </span>
                )}
              </motion.button>

              {/* User */}
              <Link to="/cont" className="hidden sm:block">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-full hover:bg-primary/10 text-text-primary hover:text-primary transition-colors"
                >
                  <User size={22} />
                </motion.div>
              </Link>

              {/* Mobile Menu Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-full hover:bg-primary/10 text-text-primary hover:text-primary transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Search Bar */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-4 pb-2">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light" size={20} />
                    <input
                      type="text"
                      placeholder="Caută produse..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border-2 border-transparent focus:border-primary outline-none transition-colors shadow-soft"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[300px] bg-cream shadow-2xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <Logo size="sm" />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <Link
                        to={link.path}
                        className={`
                          block px-4 py-3 rounded-lg font-medium transition-colors
                          ${location.pathname === link.path
                            ? 'text-primary bg-primary/10'
                            : 'text-text-primary hover:text-primary hover:bg-primary/5'
                          }
                        `}
                      >
                        {link.name}
                      </Link>
                      {link.submenu && (
                        <div className="ml-4 mt-1 flex flex-col gap-1">
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.name}
                              to={sublink.path}
                              className="px-4 py-2 text-sm text-text-secondary hover:text-primary transition-colors"
                            >
                              {sublink.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <Link
                    to="/cont"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-primary hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    <User size={20} />
                    <span>Contul Meu</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-28" />
    </>
  );
};
