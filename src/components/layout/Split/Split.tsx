import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface SplitProps extends HTMLAttributes<HTMLDivElement> {
  ratio?: 'balanced' | 'sidebar' | 'content';
  spacing?: 'content' | 'grid';
}

const ratioMap = {
  balanced: 'grid-cols-1 md:grid-cols-2',
  sidebar: 'grid-cols-1 lg:grid-cols-12 [&>*:first-child]:lg:col-span-8 [&>*:last-child]:lg:col-span-4',
  content: 'grid-cols-1 lg:grid-cols-12 [&>*:first-child]:lg:col-span-5 [&>*:last-child]:lg:col-span-7',
};

const spacingMap = {
  content: 'gap-[var(--spacing-content)]',
  grid: 'gap-[var(--spacing-grid)]',
};

export function Split({ 
  ratio = 'balanced', 
  spacing = 'grid', 
  className, 
  children, 
  ...props 
}: SplitProps) {
  return (
    <div 
      className={cn(
        'grid', 
        ratioMap[ratio], 
        spacingMap[spacing], 
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}
