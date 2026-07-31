import { Heading } from '@/components/typography';
import type { FooterQuoteProps } from '../Footer.types';

export function FooterQuote({ quote }: FooterQuoteProps) {
  return (
    <div className="py-[var(--spacing-section)] border-b border-[var(--color-border)]">
      <Heading level={2} variant="editorial" className="text-center max-w-5xl mx-auto">
        "{quote.text}"
      </Heading>
    </div>
  );
}
