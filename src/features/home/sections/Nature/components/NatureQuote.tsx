import { Display } from '../../../../../components/typography';
import type { NatureQuoteProps } from '../Nature.types';

export function NatureQuote({ text, author }: NatureQuoteProps) {
  return (
    <div className="max-w-4xl mx-auto text-center px-4">
      <Display className="text-3xl md:text-5xl lg:text-6xl text-brand-primary leading-tight font-medium mb-8">
        "{text}"
      </Display>
      {author && (
        <span className="font-heading text-sm md:text-base uppercase tracking-widest text-stone-500">
          — {author}
        </span>
      )}
    </div>
  );
}
