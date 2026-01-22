import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const Footer = () => {
  return (
    <footer className="bg-white mt-auto">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary via-primary-dark to-primary py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <span className="inline-block px-6 py-3 bg-white/20 rounded-full text-sm font-semibold mb-8">
              Newsletter
            </span>
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Fii la curent cu noutățile!
            </h3>
            <p className="text-white/90 mb-12 text-lg lg:text-xl leading-relaxed max-w-xl mx-auto">
              Abonează-te și primești 10% reducere la prima comandă
            </p>
            <form className="flex flex-col sm:flex-row gap-5 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Adresa ta de email"
                className="flex-1 px-8 py-5 rounded-2xl text-text-primary outline-none focus:ring-4 focus:ring-white/30 text-lg shadow-lg"
              />
              <button
                type="submit"
                className="px-12 py-5 bg-secondary hover:bg-secondary-dark text-white font-bold rounded-2xl transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Abonare
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          {/* Brand Column */}
          <div className="lg:pr-8">
            <Logo size="md" />
            <p className="mt-8 text-text-secondary text-base lg:text-lg leading-relaxed">
              Îmbrăcăminte de calitate pentru cei mici. Materiale premium,
              design-uri adorabile și confort maxim pentru copilul tău.
            </p>
            <div className="flex gap-5 mt-10">
              <a
                href="#"
                className="p-4 bg-primary/10 rounded-2xl text-primary hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="p-4 bg-primary/10 rounded-2xl text-primary hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-text-primary text-xl mb-8">
              Link-uri Rapide
            </h4>
            <ul className="space-y-5">
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
                    className="text-text-secondary hover:text-primary transition-colors text-base lg:text-lg leading-relaxed"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-heading font-bold text-text-primary text-xl mb-8">
              Servicii Clienți
            </h4>
            <ul className="space-y-5">
              {[
                { name: 'Contul Meu', path: '/cont' },
                { name: 'Urmărește Comanda', path: '/cont/comenzi' },
                { name: 'Returnări', path: '/returnari' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Ghid Mărimi', path: '/ghid-marimi' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-primary transition-colors text-base lg:text-lg leading-relaxed"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-text-primary text-xl mb-8">
              Contact
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-5">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MapPin size={22} className="text-primary" />
                </div>
                <span className="text-text-secondary text-base lg:text-lg leading-relaxed pt-2">
                  Str. Exemplu nr. 123,<br />
                  București, România
                </span>
              </li>
              <li className="flex items-center gap-5">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Phone size={22} className="text-primary" />
                </div>
                <a
                  href="tel:+40721234567"
                  className="text-text-secondary hover:text-primary transition-colors text-base lg:text-lg"
                >
                  +40 721 234 567
                </a>
              </li>
              <li className="flex items-center gap-5">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Mail size={22} className="text-primary" />
                </div>
                <a
                  href="mailto:contact@minitrend.ro"
                  className="text-text-secondary hover:text-primary transition-colors text-base lg:text-lg"
                >
                  contact@minitrend.ro
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-gray-100 bg-cream/50">
        <div className="container py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-text-secondary text-base">
              © 2026 MiniTrend. Toate drepturile rezervate.
            </p>
            <div className="flex items-center gap-10">
              <Link
                to="/termeni"
                className="text-text-secondary hover:text-primary transition-colors text-base"
              >
                Termeni și Condiții
              </Link>
              <Link
                to="/confidentialitate"
                className="text-text-secondary hover:text-primary transition-colors text-base"
              >
                Politica de Confidențialitate
              </Link>
            </div>
            <p className="text-text-secondary text-base flex items-center gap-3">
              Făcut cu <Heart size={20} className="text-secondary fill-secondary" /> pentru prichindei
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
