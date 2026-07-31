import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type TypographyVariant = 'editorial' | 'standard' | 'muted';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  variant?: TypographyVariant;
}

export function Display({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className={cn('font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-primary', className)} {...props}>{children}</h1>;
}

export function Heading({ level = 2, variant = 'editorial', className, children, ...props }: HeadingProps) {
  const Component = `h${level}` as const;
  
  const variantClasses = {
    editorial: 'font-heading font-semibold text-brand-primary tracking-tight',
    standard: 'font-body font-medium text-foreground',
    muted: 'font-body font-medium text-muted',
  };
  
  const sizeClasses = {
    1: 'text-4xl md:text-5xl lg:text-6xl',
    2: 'text-3xl md:text-4xl lg:text-5xl',
    3: 'text-2xl md:text-3xl lg:text-4xl',
    4: 'text-xl md:text-2xl',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg',
  };

  return <Component className={cn(variantClasses[variant], sizeClasses[level], className)} {...props}>{children}</Component>;
}

export function Subheading({ level = 3, variant = 'editorial', className, children, ...props }: HeadingProps) {
  const Component = `h${level}` as const;
  return <Component className={cn('font-heading text-xl md:text-2xl font-medium', variant === 'editorial' ? 'text-brand-primary' : 'text-foreground', className)} {...props}>{children}</Component>;
}

export function Overline({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('font-body text-xs md:text-sm font-bold uppercase tracking-widest text-brand-accent', className)} {...props}>{children}</span>;
}

export function Lead({ className, children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('font-body text-xl md:text-2xl text-muted font-light leading-relaxed', className)} {...props}>{children}</p>;
}

export function Body({ className, children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('font-body text-base md:text-lg text-foreground leading-relaxed', className)} {...props}>{children}</p>;
}

export function Caption({ className, children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('font-body text-sm text-muted', className)} {...props}>{children}</p>;
}

export function Quote({ className, children, ...props }: HTMLAttributes<HTMLQuoteElement>) {
  return <blockquote className={cn('font-heading text-2xl md:text-3xl italic border-l-4 border-brand-accent pl-6 text-brand-primary', className)} {...props}>{children}</blockquote>;
}
