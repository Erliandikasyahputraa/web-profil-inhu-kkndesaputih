import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export type SpacingScale = 'none' | 'tight' | 'inline' | 'cluster' | 'paragraph' | 'content' | 'grid' | 'section';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  spacing?: SpacingScale;
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

export function Stack({ spacing = 'content', className, children, ...props }: StackProps) {
  return (
    <div className={cn('flex flex-col', spacingMap[spacing], className)} {...props}>
      {children}
    </div>
  );
}
