import { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export function Display({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className={cn('font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-primary', className)} {...props}>{children}</h1>;
}

export function Heading({ className, as: Component = 'h2', children, ...props }: HTMLAttributes<HTMLHeadingElement> & { as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }) {
  return <Component className={cn('font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-primary', className)} {...props}>{children}</Component>;
}

export function Subheading({ className, as: Component = 'h3', children, ...props }: HTMLAttributes<HTMLHeadingElement> & { as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }) {
  return <Component className={cn('font-heading text-xl md:text-2xl font-medium text-brand-primary', className)} {...props}>{children}</Component>;
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
