/**
 * Utility for merging Tailwind CSS classes
 * Combines clsx and tailwind-merge functionality
 */

type ClassValue = string | number | bigint | boolean | undefined | null | Record<string, boolean>;

export function cn(...classes: ClassValue[]): string {
  return classes
    .flatMap((cls) => {
      if (cls === null || cls === undefined || cls === false || cls === 0 || cls === '') return [];
      if (typeof cls === 'string') return cls.split(' ');
      if (typeof cls === 'number') return [];
      if (typeof cls === 'bigint') return [];
      if (typeof cls === 'boolean') return [];
      if (typeof cls === 'object') {
        return Object.entries(cls)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key);
      }
      return [];
    })
    .filter(Boolean)
    .join(' ');
}
