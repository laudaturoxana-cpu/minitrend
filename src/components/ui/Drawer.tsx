import { useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '../../utils';
import { useScrollLock } from '../../hooks';
import { overlayVariants, drawerVariants } from '../../config/motion';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  position?: 'left' | 'right';
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
  showClose?: boolean;
  className?: string;
}

const sizeStyles = {
  sm: 'w-72',
  md: 'w-80 sm:w-96',
  lg: 'w-96 sm:w-[480px]',
  full: 'w-full',
};

export const Drawer = ({
  isOpen,
  onClose,
  children,
  position = 'right',
  title,
  size = 'md',
  showClose = true,
  className,
}: DrawerProps) => {
  useScrollLock(isOpen);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            variants={drawerVariants[position]}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn(
              'absolute top-0 bottom-0 bg-cream flex flex-col',
              position === 'left' ? 'left-0' : 'right-0',
              sizeStyles[size],
              className
            )}
          >
            {/* Header */}
            {(title || showClose) && (
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                {title && (
                  <h2 className="font-heading text-xl font-bold text-text-primary">
                    {title}
                  </h2>
                )}
                {showClose && (
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors ml-auto"
                    aria-label="Închide"
                  >
                    <X size={22} />
                  </button>
                )}
              </div>
            )}

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
