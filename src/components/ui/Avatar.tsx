import { cn } from '../../utils';

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizes = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-16 h-16 text-lg',
};

export const Avatar = ({
  src,
  alt = '',
  fallback,
  size = 'md',
  className,
}: AvatarProps) => {
  // Generate initials from fallback or alt
  const initials = (fallback || alt)
    ?.split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={cn(
        'relative rounded-full overflow-hidden flex-shrink-0',
        'bg-primary/10 flex items-center justify-center',
        sizes[size],
        className
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="font-semibold text-primary">
          {initials || '?'}
        </span>
      )}
    </div>
  );
};
