import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'editorial' | 'feature' | 'gallery';
  columns?: number; // Escape hatch
  spacing?: 'none' | 'content' | 'grid' | 'section';
}

const variantMap = {
  editorial: 'grid-cols-1 lg:grid-cols-12',
  feature: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  gallery: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-12',
};

const spacingMap = {
  none: 'gap-0',
  content: 'gap-[var(--spacing-content)]',
  grid: 'gap-[var(--spacing-grid)] lg:gap-x-24', // Default design standard
  section: 'gap-[var(--spacing-section)]',
};

export function Grid({ 
  variant = 'editorial', 
  columns, 
  spacing = 'grid', 
  className, 
  children, 
  ...props 
}: GridProps) {
  const colClass = columns ? `grid-cols-${columns}` : variantMap[variant];
  
  return (
    <div 
      className={cn(
        'grid', 
        colClass, 
        spacingMap[spacing], 
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}
