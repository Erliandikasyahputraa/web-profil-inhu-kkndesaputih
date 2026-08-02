import { Stack } from '@/components/layout';
import { Heading, Body, Caption } from '@/components/typography';
import type { TimelineProps } from './Timeline.types';

export function Timeline({ items }: TimelineProps) {
  return (
    <Stack spacing="content" className="border-l border-brand-accent/30 pl-6 ml-2 md:pl-10 md:ml-4">
      {items.map((item, idx) => (
        <div key={idx} className="relative">
          {/* Timeline Dot */}
          <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-brand-primary ring-4 ring-brand-surface" />
          
          <Stack spacing="tight">
            <Caption uppercase tracking="widest" tone="brand" className="font-bold">
              {item.year}
            </Caption>
            <Heading level={4}>{item.title}</Heading>
            <Body tone="muted">{item.description}</Body>
          </Stack>
        </div>
      ))}
    </Stack>
  );
}
