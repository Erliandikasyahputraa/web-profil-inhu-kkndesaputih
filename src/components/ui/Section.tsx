import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('w-full py-16 md:py-24 lg:py-32', className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = 'Section';
