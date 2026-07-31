import { Stack } from '@/components/layout';
import type { TransparencyBreakdownProps } from '../Transparency.types';

export function TransparencyBreakdown({ metrics }: TransparencyBreakdownProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12 mt-[var(--spacing-section)] pt-[var(--spacing-section)] border-t border-[var(--color-border)]">
      {/* Custom responsive grid: 1 col on mobile/desktop, 2 cols on tablet */}
      {metrics.map((m) => (
        <Stack key={m.id} spacing="tight">
          <span className="font-heading text-4xl lg:text-5xl text-[var(--color-foreground)]">{m.value}</span>
          <span className="font-sans text-sm tracking-widest text-[var(--color-subtle)] uppercase">{m.label}</span>
        </Stack>
      ))}
    </div>
  );
}
