import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  icon,
  iconPosition = 'left',
  className = '',
}: ButtonProps) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 font-medium
    rounded-[var(--radius-button)] transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;

  const variants = {
    primary: `
      bg-primary text-white
      hover:bg-primary-dark
      focus:ring-primary
      shadow-md hover:shadow-lg
    `,
    secondary: `
      bg-secondary text-white
      hover:bg-secondary-dark
      focus:ring-secondary
      shadow-md hover:shadow-lg
    `,
    outline: `
      border-2 border-primary text-primary
      hover:bg-primary hover:text-white
      focus:ring-primary
    `,
    ghost: `
      text-primary
      hover:bg-primary/10
      focus:ring-primary
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </motion.button>
  );
};
