import { Stack } from '@/components/layout';
import { Heading, Overline } from '@/components/typography';
import { cn } from '@/lib/utils';
import type { PullQuoteProps } from './PullQuote.types';

export function PullQuote({ content, title, variant = 'default' }: PullQuoteProps) {
  const isHighlight = variant === 'highlight';
  
  return (
    <Stack spacing="content" className={cn(
      "border-l-4 px-6 md:px-10 py-8 my-10 md:my-16 rounded-r-2xl bg-brand-surface/30",
      isHighlight ? "border-white bg-white/5" : "border-brand-accent"
    )}>
      <Heading level={3} className={cn(
        "italic font-serif leading-relaxed",
        isHighlight ? "text-white" : "text-brand-primary"
      )}>
        "{content}"
      </Heading>
      {title && (
        <Overline className={cn(
          "opacity-80 block text-right",
          isHighlight ? "text-white/80" : "text-muted-foreground"
        )}>{title}</Overline>
      )}
    </Stack>
  );
}
