import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: 'default' | 'editorial' | 'narrow';
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Component = 'div', size = 'default', children, ...props }, ref) => {
    
    const sizeClasses = {
      default: 'max-w-[1536px]',
      editorial: 'max-w-4xl',
      narrow: 'max-w-2xl',
    };

    return (
      <Component
        ref={ref}
        className={cn('w-full mx-auto px-6 md:px-12 lg:px-24', sizeClasses[size], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Container.displayName = 'Container';
