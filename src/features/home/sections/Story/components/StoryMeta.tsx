import { Stack } from '@/components/layout';
import { Caption } from '@/components/typography';
import type { StoryMetaProps } from '../Story.types';

export function StoryMeta({ label, value }: StoryMetaProps) {
  return (
    <Stack spacing="tight" className="border-l border-brand-accent pl-5 py-1">
      <span className="font-sans text-sm font-medium tracking-wide text-brand-primary">{label}</span>
      <Caption uppercase tracking="widest" tone="default" className="font-bold">
        {value}
      </Caption>
    </Stack>
  );
}
