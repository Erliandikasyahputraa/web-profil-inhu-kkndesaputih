import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type TypographyVariant = 'editorial' | 'standard' | 'muted';
type TypographyTone = 'default' | 'muted' | 'inverse' | 'subtle' | 'brand';
type TypographyMeasure = 'narrow' | 'comfortable' | 'wide' | 'full';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  variant?: TypographyVariant;
  tone?: TypographyTone;
}

interface BodyProps extends HTMLAttributes<HTMLParagraphElement> {
  tone?: TypographyTone;
  measure?: TypographyMeasure;
}

interface CaptionProps extends HTMLAttributes<HTMLParagraphElement> {
  tone?: TypographyTone;
  uppercase?: boolean;
  tracking?: 'normal' | 'wide' | 'widest';
}

const toneClasses: Record<TypographyTone, string> = {
  default: 'text-[var(--color-foreground)]',
  muted: 'text-[var(--color-muted)]',
  inverse: 'text-[var(--color-inverse)]',
  subtle: 'text-[var(--color-subtle)]',
  brand: 'text-[var(--color-brand-primary)]',
};

const measureClasses: Record<TypographyMeasure, string> = {
  narrow: 'max-w-[55ch]',
  comfortable: 'max-w-[65ch]',
  wide: 'max-w-[75ch]',
  full: 'max-w-full',
};

export function Display({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 
      className={cn(
        'font-heading text-[length:var(--text-display-lg)] md:text-[length:var(--text-display-lg)] lg:text-[length:var(--text-display-lg)]',
        'font-[var(--font-weight-display)]',
        'leading-[var(--leading-display)]',
        'tracking-[var(--tracking-display)]',
        toneClasses.brand,
        className
      )} 
      {...props}
    >
      {children}
    </h1>
  );
}

export function Heading({ level = 2, variant = 'editorial', tone, className, children, ...props }: HeadingProps) {
  const Component = `h${level}` as const;
  
  const variantStyles = {
    editorial: `font-heading font-[var(--font-weight-heading)] tracking-[var(--tracking-heading)] leading-[var(--leading-heading)]`,
    standard: `font-body font-[var(--font-weight-heading)] tracking-[var(--tracking-heading)] leading-[var(--leading-heading)]`,
    muted: `font-body font-[var(--font-weight-heading)] tracking-[var(--tracking-heading)] leading-[var(--leading-heading)]`,
  };
  
  const sizeClasses = {
    1: 'text-[length:var(--text-h1)]',
    2: 'text-[length:var(--text-h2)]',
    3: 'text-[length:var(--text-h3)]',
    4: 'text-[length:var(--text-body-lg)]',
    5: 'text-[length:var(--text-body)]',
    6: 'text-[length:var(--text-caption)]',
  };

  const defaultTone = variant === 'editorial' ? 'brand' : (variant === 'muted' ? 'muted' : 'default');

  return (
    <Component 
      className={cn(
        variantStyles[variant], 
        sizeClasses[level], 
        toneClasses[tone || defaultTone],
        className
      )} 
      {...props}
    >
      {children}
    </Component>
  );
}

export function Lead({ className, tone = 'muted', measure = 'comfortable', children, ...props }: BodyProps) {
  return (
    <p 
      className={cn(
        'font-body text-[length:var(--text-body-lg)]',
        'font-[var(--font-weight-lead)]',
        'leading-[var(--leading-lead)]',
        'tracking-[var(--tracking-lead)]',
        measureClasses[measure],
        toneClasses[tone],
        className
      )} 
      {...props}
    >
      {children}
    </p>
  );
}

export function Body({ className, tone = 'default', measure = 'comfortable', children, ...props }: BodyProps) {
  return (
    <p 
      className={cn(
        'font-body text-[length:var(--text-body)]',
        'font-[var(--font-weight-body)]',
        'leading-[var(--leading-body)]',
        'tracking-[var(--tracking-body)]',
        measureClasses[measure],
        toneClasses[tone],
        className
      )} 
      {...props}
    >
      {children}
    </p>
  );
}

export function Caption({ className, tone = 'subtle', uppercase = false, tracking = 'normal', children, ...props }: CaptionProps) {
  const trackingClasses = {
    normal: 'tracking-[var(--tracking-caption)]',
    wide: 'tracking-wide',
    widest: 'tracking-widest',
  };

  return (
    <p 
      className={cn(
        'font-body text-[length:var(--text-caption)]',
        'font-[var(--font-weight-caption)]',
        'leading-[var(--leading-caption)]',
        trackingClasses[tracking],
        uppercase && 'uppercase',
        toneClasses[tone],
        className
      )} 
      {...props}
    >
      {children}
    </p>
  );
}

export function Overline({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span 
      className={cn(
        'font-body text-[length:var(--text-caption)] font-bold uppercase tracking-widest text-[var(--color-brand-accent)]', 
        className
      )} 
      {...props}
    >
      {children}
    </span>
  );
}

export function Quote({ className, children, ...props }: HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote 
      className={cn(
        'font-heading text-[length:var(--text-h3)] italic border-l-4 border-brand-accent pl-6 text-[var(--color-brand-primary)]', 
        className
      )} 
      {...props}
    >
      {children}
    </blockquote>
  );
}
