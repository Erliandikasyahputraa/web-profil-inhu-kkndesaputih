import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: 'none' | 'default' | 'tight';
  background?: 'transparent' | 'primary' | 'muted' | 'accent' | 'dark';
  variant?: 'default' | 'hero' | 'editorial';
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = 'default', background = 'transparent', variant = 'default', children, ...props }, ref) => {
    
    const spacingClasses = {
      none: '',
      tight: 'py-[var(--spacing-content)]',
      default: 'py-[var(--spacing-section)]',
    };

    const bgClasses = {
      transparent: 'bg-transparent',
      primary: 'bg-background',
      muted: 'bg-stone-50',
      accent: 'bg-brand-accent text-white',
      dark: 'bg-stone-900 text-stone-50',
    };

    const variantClasses = {
      default: '',
      hero: 'relative min-h-dvh flex items-end overflow-hidden pb-24 pt-32',
      editorial: 'relative max-w-7xl mx-auto',
    };

    return (
      <section
        ref={ref}
        className={cn('w-full', spacingClasses[spacing], bgClasses[background], variantClasses[variant], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = 'Section';
