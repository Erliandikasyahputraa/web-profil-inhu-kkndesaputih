import { Display } from '@/components/typography';

import type { Callout } from '@/types/content';

export function PullQuote({ content, title }: Callout) {
  return (
    <div className="max-w-4xl mx-auto px-8 md:px-12 py-10 my-12 bg-brand-surface/30 border-l-4 border-brand-accent rounded-r-2xl">
      <Display className="text-3xl md:text-4xl lg:text-5xl text-brand-primary leading-tight font-serif italic font-medium mb-6">
        "{content}"
      </Display>
      {title && (
        <span className="font-heading text-sm md:text-base uppercase tracking-widest text-stone-500 block text-right mt-4">
          — {title}
        </span>
      )}
    </div>
  );
}
