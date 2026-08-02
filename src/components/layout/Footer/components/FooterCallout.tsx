import { Heading } from '@/components/typography';
import type { FooterCalloutProps } from '../Footer.types';

export function FooterCallout({ callout }: FooterCalloutProps) {
  return (
    <div className="py-[var(--spacing-section)] border-b border-[var(--color-border)]">
      <Heading level={2} variant="editorial" className="text-center max-w-5xl mx-auto">
        "{callout}"
      </Heading>
    </div>
  );
}
