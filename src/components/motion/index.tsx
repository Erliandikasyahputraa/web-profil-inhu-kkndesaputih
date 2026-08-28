import type { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
  stagger?: 'none' | 'hero' | 'editorial';
  className?: string;
}

export function FadeIn({ children, className, ...props }: RevealProps) {
  return (
    <div className={cn('animate-in fade-in duration-700', className)} {...props}>
      {children}
    </div>
  );
}

export function Reveal({ children, className, ...props }: RevealProps) {
  return (
    <div className={cn('animate-in fade-in slide-in-from-bottom-4 duration-700', className)} {...props}>
      {children}
    </div>
  );
}

export function Parallax({ children, className, ...props }: RevealProps & { offset?: number }) {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
}
