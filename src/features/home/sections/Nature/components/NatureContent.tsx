import { Stack } from '@/components/layout';
import { Body } from '@/components/typography';
import type { NatureContentProps } from '../Nature.types';

export function NatureContent({ paragraphs }: NatureContentProps) {
  return (
    <Stack spacing="content" className="lg:pr-12">
      {paragraphs.map((p) => (
        <Body key={p.id} tone="muted">
          {p.text}
        </Body>
      ))}
    </Stack>
  );
}
