import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils';
import { cardVariants } from '../../config/motion';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  className?: string;
}

const variantStyles = {
  default: 'bg-white shadow-card',
  elevated: 'bg-white shadow-lg',
  outlined: 'bg-white border border-gray-200',
};

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'default', padding = 'md', hover = false, className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={hover ? cardVariants : undefined}
        initial={hover ? 'hidden' : undefined}
        whileInView={hover ? 'visible' : undefined}
        whileHover={hover ? 'hover' : undefined}
        viewport={{ once: true }}
        className={cn(
          'rounded-2xl overflow-hidden',
          variantStyles[variant],
          paddingStyles[padding],
          hover && 'cursor-pointer transition-shadow',
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

// Card sub-components
interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardHeader = ({ children, className, ...props }: CardHeaderProps) => (
  <div className={cn('mb-4', className)} {...props}>
    {children}
  </div>
);

export const CardContent = ({ children, className, ...props }: CardHeaderProps) => (
  <div className={cn(className)} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className, ...props }: CardHeaderProps) => (
  <div className={cn('mt-4 pt-4 border-t border-gray-100', className)} {...props}>
    {children}
  </div>
);
