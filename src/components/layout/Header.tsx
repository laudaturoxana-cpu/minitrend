import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Heart, User, Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { useCartStore, useWishlistStore, useUIStore } from '../../store';
import { cn } from '../../utils';
import { dropdownVariants, slideInRight } from '../../config/motion';

interface NavLink {
  name: string;
  path: string;
  submenu?: { name: string; path: string }[];
}

const navLinks: NavLink[] = [
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
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const cartCount = useCartStore((state) => state.getCartCount());
  const wishlistCount = useWishlistStore((state) => state.getWishlistCount());
  const {
    isMobileMenuOpen,
    openMobileMenu,
    closeMobileMenu,
    openCart,
    isSearchOpen,
    openSearch,
    closeSearch,
    searchQuery,
    setSearchQuery,
  } = useUIStore();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMobileMenu();
    closeSearch();
  }, [location, closeMobileMenu, closeSearch]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft py-3'
            : 'bg-white/98 backdrop-blur-sm py-4 md:py-5'
        )}
      >
        <div className="container px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Logo size={isScrolled ? 'sm' : 'md'} />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      'flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-sm',
                      'transition-all duration-200',
                      location.pathname === link.path
                        ? 'text-primary bg-primary/10'
                        : 'text-text-primary hover:text-primary hover:bg-primary/5'
                    )}
                  >
                    {link.name}
                    {link.submenu && (
                      <ChevronDown
                        size={16}
                        className={cn(
                          'transition-transform duration-200',
                          activeSubmenu === link.name && 'rotate-180'
                        )}
                      />
                    )}
                  </Link>

                  {/* Submenu */}
                  {link.submenu && (
                    <AnimatePresence>
                      {activeSubmenu === link.name && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full left-0 mt-2 py-2 bg-white rounded-xl shadow-card min-w-[200px] border border-gray-100"
                        >
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.name}
                              to={sublink.path}
                              className="block px-4 py-2.5 text-sm text-text-primary hover:text-primary hover:bg-primary/5 transition-colors"
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
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Search */}
              <HeaderIconButton
                onClick={() => isSearchOpen ? closeSearch() : openSearch()}
                aria-label="Căutare"
              >
                <Search size={20} />
              </HeaderIconButton>

              {/* Wishlist */}
              <Link to="/wishlist">
                <HeaderIconButton aria-label="Lista de dorințe" badge={wishlistCount}>
                  <Heart size={20} />
                </HeaderIconButton>
              </Link>

              {/* Cart */}
              <HeaderIconButton
                onClick={openCart}
                aria-label="Coș de cumpărături"
                badge={cartCount}
                badgeColor="primary"
              >
                <ShoppingBag size={20} />
              </HeaderIconButton>

              {/* User - hidden on small screens */}
              <Link to="/cont" className="hidden sm:block">
                <HeaderIconButton aria-label="Contul meu">
                  <User size={20} />
                </HeaderIconButton>
              </Link>

              {/* Mobile Menu Toggle */}
              <HeaderIconButton
                onClick={() => isMobileMenuOpen ? closeMobileMenu() : openMobileMenu()}
                className="lg:hidden"
                aria-label={isMobileMenuOpen ? 'Închide meniu' : 'Deschide meniu'}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </HeaderIconButton>
            </div>
          </div>

          {/* Search Bar */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-3 pb-1">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light" size={18} />
                    <input
                      type="text"
                      placeholder="Caută produse..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                      className={cn(
                        'w-full pl-11 pr-4 py-3 bg-gray-50 rounded-xl',
                        'border-2 border-transparent focus:border-primary focus:bg-white',
                        'outline-none transition-all text-sm'
                      )}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        links={navLinks}
        currentPath={location.pathname}
      />

      {/* Spacer */}
      <div className="h-20 md:h-24" />
    </>
  );
};

// Header Icon Button Component
interface HeaderIconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  badge?: number;
  badgeColor?: 'primary' | 'secondary';
  'aria-label'?: string;
}

const HeaderIconButton = ({
  children,
  onClick,
  className,
  badge,
  badgeColor = 'secondary',
  'aria-label': ariaLabel
}: HeaderIconButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    aria-label={ariaLabel}
    className={cn(
      'relative p-2.5 rounded-full',
      'text-text-primary hover:text-primary hover:bg-primary/10',
      'transition-colors duration-200',
      className
    )}
  >
    {children}
    {badge !== undefined && badge > 0 && (
      <span className={cn(
        'absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1',
        'flex items-center justify-center',
        'text-[10px] font-bold text-white rounded-full',
        badgeColor === 'primary' ? 'bg-primary' : 'bg-secondary'
      )}>
        {badge > 99 ? '99+' : badge}
      </span>
    )}
  </motion.button>
);

// Mobile Menu Component
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  currentPath: string;
}

const MobileMenu = ({ isOpen, onClose, links, currentPath }: MobileMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-40 lg:hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50"
          onClick={onClose}
        />

        {/* Menu Panel */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute right-0 top-0 bottom-0 w-[280px] sm:w-[320px] bg-cream shadow-2xl overflow-y-auto"
        >
          <div className="p-5">
            <div className="flex justify-between items-center mb-6">
              <Logo size="sm" />
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="Închide meniu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    onClick={onClose}
                    className={cn(
                      'block px-4 py-3 rounded-xl font-medium text-sm transition-colors',
                      currentPath === link.path
                        ? 'text-primary bg-primary/10'
                        : 'text-text-primary hover:text-primary hover:bg-primary/5'
                    )}
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          to={sublink.path}
                          onClick={onClose}
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

            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link
                to="/cont"
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-primary hover:text-primary hover:bg-primary/5 transition-colors"
              >
                <User size={20} />
                <span className="font-medium">Contul Meu</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);
