import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo = ({ size = 'md', showText = true }: LogoProps) => {
  const sizes = {
    sm: { icon: 28, text: 'text-lg' },
    md: { icon: 36, text: 'text-2xl' },
    lg: { icon: 48, text: 'text-3xl' },
  };

  return (
    <Link to="/" className="flex items-center gap-2 group">
      <motion.div
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400 }}
        className="relative"
      >
        {/* Logo Icon - A stylized star/sparkle representing kids' magic */}
        <svg
          width={sizes[size].icon}
          height={sizes[size].icon}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main star shape */}
          <path
            d="M24 4L28.5 18.5L43 24L28.5 29.5L24 44L19.5 29.5L5 24L19.5 18.5L24 4Z"
            fill="url(#gradient1)"
          />
          {/* Small decorative stars */}
          <circle cx="10" cy="10" r="3" fill="#F472B6" opacity="0.8" />
          <circle cx="38" cy="12" r="2.5" fill="#38BDF8" opacity="0.8" />
          <circle cx="36" cy="38" r="2" fill="#A78BFA" opacity="0.8" />
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient1" x1="5" y1="4" x2="43" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366F1" />
              <stop offset="0.5" stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#F472B6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-heading font-bold ${sizes[size].text} text-gradient`}>
            Mini<span className="text-primary">Trend</span>
          </span>
          {size !== 'sm' && (
            <span className="text-[10px] text-text-secondary tracking-widest uppercase">
              Fashion pentru prichindei
            </span>
          )}
        </div>
      )}
    </Link>
  );
};
