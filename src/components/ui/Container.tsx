import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Component = 'div', children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('w-full max-w-[1536px] mx-auto px-6 md:px-12 lg:px-24', className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Container.displayName = 'Container';
