import { forwardRef, type InputHTMLAttributes } from 'react';
import { Check } from 'lucide-react';
import { cn } from '../../utils';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { box: 'w-4 h-4', icon: 12, text: 'text-sm' },
  md: { box: 'w-5 h-5', icon: 14, text: 'text-base' },
  lg: { box: 'w-6 h-6', icon: 16, text: 'text-lg' },
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, size = 'md', className, id, checked, ...props }, ref) => {
    const checkboxId = id || label?.toLowerCase().replace(/\s+/g, '-');
    const sizeConfig = sizes[size];

    return (
      <label
        htmlFor={checkboxId}
        className={cn(
          'inline-flex items-center gap-3 cursor-pointer select-none',
          className
        )}
      >
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            checked={checked}
            className="sr-only peer"
            {...props}
          />
          <div
            className={cn(
              'rounded-md border-2 transition-all duration-200',
              'peer-focus-visible:ring-2 peer-focus-visible:ring-primary/20',
              'peer-checked:bg-primary peer-checked:border-primary',
              'border-gray-300 bg-white',
              sizeConfig.box
            )}
          />
          <Check
            size={sizeConfig.icon}
            className={cn(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              'text-white transition-opacity duration-200',
              checked ? 'opacity-100' : 'opacity-0'
            )}
            strokeWidth={3}
          />
        </div>
        {label && (
          <span className={cn('text-text-primary', sizeConfig.text)}>
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
