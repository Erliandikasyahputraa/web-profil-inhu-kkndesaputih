import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'transparent' | 'primary' | 'muted' | 'accent' | 'dark';
  variant?: 'default' | 'hero' | 'editorial';
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = 'lg', background = 'transparent', variant = 'default', children, ...props }, ref) => {
    
    const spacingClasses = {
      none: '',
      sm: 'py-8 md:py-12',
      md: 'py-12 md:py-16 lg:py-24',
      lg: 'py-16 md:py-24 lg:py-32',
      xl: 'py-24 md:py-32 lg:py-48',
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
