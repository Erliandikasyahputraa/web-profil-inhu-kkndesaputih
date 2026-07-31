import { Body } from '@/components/typography';
import type { FooterQuoteProps } from '../Footer.types';

export function FooterQuote({ quote }: FooterQuoteProps) {
  return (
    <div className="py-24 lg:py-32 border-b border-stone-200">
      <Body className="text-stone-900 text-3xl md:text-4xl lg:text-5xl text-center max-w-5xl mx-auto tracking-tight font-medium leading-relaxed">
        "{quote}"
      </Body>
    </div>
  );
}
