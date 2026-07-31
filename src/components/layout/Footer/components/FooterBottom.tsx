import { Cluster } from '@/components/layout';
import type { FooterBottomProps } from '../Footer.types';

export function FooterBottom({ copyright, credit }: FooterBottomProps) {
  return (
    <div className="py-8 border-t border-[var(--color-border)]">
      <Cluster justify="between" className="text-center sm:text-left flex-col sm:flex-row">
        <span className="font-sans text-sm text-[var(--color-subtle)]">{copyright}</span>
        <span className="font-sans text-sm text-[var(--color-subtle)]">{credit}</span>
      </Cluster>
    </div>
  );
}
