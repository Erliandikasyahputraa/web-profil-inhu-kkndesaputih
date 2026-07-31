import { Stack } from '@/components/layout';
import { Heading, Body } from '@/components/typography';
import type { TimelineContentProps } from '../Timeline.types';

export function TimelineContent({ title, description }: TimelineContentProps) {
  return (
    <Stack spacing="content">
      <Heading level={3} variant="editorial">
        {title}
      </Heading>
      <Body tone="muted" measure="comfortable">
        {description}
      </Body>
    </Stack>
  );
}
