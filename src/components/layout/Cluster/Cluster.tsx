import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import type { SpacingScale } from '../Stack/Stack';

export interface ClusterProps extends HTMLAttributes<HTMLDivElement> {
  spacing?: SpacingScale;
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'between' | 'end';
  wrap?: boolean;
}

const spacingMap: Record<SpacingScale, string> = {
  none: 'gap-0',
  tight: 'gap-[var(--spacing-tight)]',
  inline: 'gap-[var(--spacing-inline)]',
  cluster: 'gap-[var(--spacing-cluster)]',
  paragraph: 'gap-[var(--spacing-paragraph)]',
  content: 'gap-[var(--spacing-content)]',
  grid: 'gap-[var(--spacing-grid)]',
  section: 'gap-[var(--spacing-section)]',
};

const alignMap = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

const justifyMap = {
  start: 'justify-start',
  center: 'justify-center',
  between: 'justify-between',
  end: 'justify-end',
};

export function Cluster({ 
  spacing = 'inline', 
  align = 'center', 
  justify = 'start', 
  wrap = true,
  className, 
  children, 
  ...props 
}: ClusterProps) {
  return (
    <div 
      className={cn(
        'flex flex-row', 
        wrap ? 'flex-wrap' : 'flex-nowrap',
        spacingMap[spacing], 
        alignMap[align], 
        justifyMap[justify], 
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}
