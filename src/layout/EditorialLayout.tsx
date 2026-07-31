import { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface EditorialLayoutProps {
  children: ReactNode;
  className?: string;
}

/**
 * EditorialLayout is a specialized wrapper that enforces the reading width
 * and aesthetic spacing rules for editorial content (e.g. History page).
 */
export function EditorialLayout({ children, className }: EditorialLayoutProps) {
  return (
    <article className={cn('w-full max-w-[800px] mx-auto px-6 py-12 md:py-24', className)}>
      {children}
    </article>
  );
}
