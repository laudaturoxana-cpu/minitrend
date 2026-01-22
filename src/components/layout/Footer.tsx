import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const Footer = () => {
  return (
    <footer className="bg-white mt-auto overflow-x-hidden">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary via-primary-dark to-primary py-12 md:py-16 lg:py-20">
        <div className="container px-5 md:px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-xs md:text-sm font-semibold mb-5">
              Newsletter
            </span>
            <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Fii la curent cu noutățile!
            </h3>
            <p className="text-white/90 mb-6 md:mb-8 text-sm md:text-base lg:text-lg max-w-md mx-auto">
              Abonează-te și primești 10% reducere la prima comandă
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Adresa ta de email"
                className="flex-1 px-5 py-3 md:py-4 rounded-xl text-text-primary outline-none focus:ring-2 focus:ring-white/30 text-sm md:text-base"
              />
              <button
                type="submit"
                className="px-6 md:px-8 py-3 md:py-4 bg-secondary hover:bg-secondary-dark text-white font-bold rounded-xl transition-all text-sm md:text-base"
              >
                Abonare
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container px-5 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 lg:pr-4">
            <Logo size="md" />
            <p className="mt-5 text-text-secondary text-sm md:text-base leading-relaxed">
              Îmbrăcăminte de calitate pentru cei mici. Materiale premium,
              design-uri adorabile și confort maxim.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="p-3 bg-primary/10 rounded-xl text-primary hover:bg-primary hover:text-white transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-primary/10 rounded-xl text-primary hover:bg-primary hover:text-white transition-all"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-text-primary text-base md:text-lg mb-4 md:mb-6">
              Link-uri Rapide
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Acasă', path: '/' },
                { name: 'Shop', path: '/shop' },
                { name: 'Noutăți', path: '/shop?filter=new' },
                { name: 'Reduceri', path: '/shop?filter=sale' },
                { name: 'Despre Noi', path: '/despre' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-primary transition-colors text-sm md:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-heading font-bold text-text-primary text-base md:text-lg mb-4 md:mb-6">
              Servicii Clienți
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Contul Meu', path: '/cont' },
                { name: 'Comenzile Mele', path: '/cont/comenzi' },
                { name: 'Returnări', path: '/returnari' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Ghid Mărimi', path: '/ghid-marimi' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-primary transition-colors text-sm md:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-heading font-bold text-text-primary text-base md:text-lg mb-4 md:mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <span className="text-text-secondary text-sm md:text-base leading-relaxed">
                  Str. Exemplu nr. 123,<br />
                  București, România
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <a
                  href="tel:+40721234567"
                  className="text-text-secondary hover:text-primary transition-colors text-sm md:text-base"
                >
                  +40 721 234 567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <a
                  href="mailto:contact@minitrend.ro"
                  className="text-text-secondary hover:text-primary transition-colors text-sm md:text-base break-all"
                >
                  contact@minitrend.ro
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 bg-cream/50">
        <div className="container px-5 md:px-6 py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-text-secondary text-xs md:text-sm">
              © 2026 MiniTrend. Toate drepturile rezervate.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link
                to="/termeni"
                className="text-text-secondary hover:text-primary transition-colors text-xs md:text-sm"
              >
                Termeni și Condiții
              </Link>
              <Link
                to="/confidentialitate"
                className="text-text-secondary hover:text-primary transition-colors text-xs md:text-sm"
              >
                Politica de Confidențialitate
              </Link>
            </div>
            <p className="text-text-secondary text-xs md:text-sm flex items-center gap-2">
              Făcut cu <Heart size={16} className="text-secondary fill-secondary" /> pentru prichindei
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
