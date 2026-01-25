import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { cn } from '../../utils';

const quickLinks = [
  { name: 'Acasă', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Noutăți', path: '/shop?filter=new' },
  { name: 'Reduceri', path: '/shop?filter=sale' },
  { name: 'Despre Noi', path: '/despre' },
];

const customerLinks = [
  { name: 'Contul Meu', path: '/cont' },
  { name: 'Comenzile Mele', path: '/cont/comenzi' },
  { name: 'Returnări', path: '/returnari' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Ghid Mărimi', path: '/ghid-marimi' },
];

export const Footer = () => {
  return (
    <footer className="bg-white mt-auto overflow-x-hidden">
      {/* Main Footer */}
      <div className="container px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Logo size="md" />
            <p className="mt-4 text-text-secondary text-sm leading-relaxed max-w-xs">
              Îmbrăcăminte de calitate pentru cei mici. Materiale premium,
              design-uri adorabile și confort maxim.
            </p>
            <div className="flex gap-2 mt-5">
              <SocialLink href="#" icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink href="#" icon={<Facebook size={18} />} label="Facebook" />
            </div>
          </div>

          {/* Quick Links */}
          <FooterLinksSection title="Link-uri Rapide" links={quickLinks} />

          {/* Customer Service */}
          <FooterLinksSection title="Servicii Clienți" links={customerLinks} />

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-heading font-bold text-text-primary text-sm mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <ContactItem icon={<MapPin size={16} />}>
                <span>
                  Str. Exemplu nr. 123,<br />
                  București, România
                </span>
              </ContactItem>
              <ContactItem icon={<Phone size={16} />}>
                <a href="tel:+40721234567" className="hover:text-primary transition-colors">
                  +40 721 234 567
                </a>
              </ContactItem>
              <ContactItem icon={<Mail size={16} />}>
                <a href="mailto:contact@minitrend.ro" className="hover:text-primary transition-colors break-all">
                  contact@minitrend.ro
                </a>
              </ContactItem>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 bg-cream/50">
        <div className="container px-4 sm:px-6 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
            <p className="text-text-secondary text-xs">
              © 2026 MiniTrend. Toate drepturile rezervate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/termeni" className="text-text-secondary hover:text-primary transition-colors text-xs">
                Termeni și Condiții
              </Link>
              <Link to="/confidentialitate" className="text-text-secondary hover:text-primary transition-colors text-xs">
                Politica de Confidențialitate
              </Link>
            </div>
            <p className="text-text-secondary text-xs flex items-center gap-1.5">
              Făcut cu <Heart size={14} className="text-secondary fill-secondary" /> pentru prichindei
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Footer Links Section
interface FooterLinksSectionProps {
  title: string;
  links: { name: string; path: string }[];
}

const FooterLinksSection = ({ title, links }: FooterLinksSectionProps) => (
  <div>
    <h4 className="font-heading font-bold text-text-primary text-sm mb-4">
      {title}
    </h4>
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            to={link.path}
            className="text-text-secondary hover:text-primary transition-colors text-sm"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// Social Link
interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a
    href={href}
    aria-label={label}
    className={cn(
      'p-2.5 bg-primary/10 rounded-xl text-primary',
      'hover:bg-primary hover:text-white transition-all'
    )}
  >
    {icon}
  </a>
);

// Contact Item
interface ContactItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const ContactItem = ({ icon, children }: ContactItemProps) => (
  <li className="flex items-start gap-2.5">
    <div className="p-1.5 bg-primary/10 rounded-lg flex-shrink-0">
      <span className="text-primary">{icon}</span>
    </div>
    <span className="text-text-secondary text-sm leading-relaxed">
      {children}
    </span>
  </li>
);
