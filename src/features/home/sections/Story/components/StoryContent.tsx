import { Stack } from '@/components/layout';
import { Heading, Lead, Body } from '@/components/typography';
import type { StoryContentProps } from '../Story.types';
import { StoryMeta } from './StoryMeta';
import { storyContent } from '../../../../../../src/content/homepage/story';

export function StoryContent({ title, lead, paragraphs }: StoryContentProps) {
  return (
    <Stack spacing="section" className="h-full justify-center">
      <Stack spacing="content">
        <Heading level={2} variant="editorial">
          {title}
        </Heading>
        <Lead tone="brand" className="font-medium">{lead}</Lead>
      </Stack>
      <StoryMeta label={storyContent.meta.label} value={storyContent.meta.value} />
      <Stack spacing="content">
        {paragraphs.map((p) => (
          <Body key={p.id} tone="muted">
            {p.text}
          </Body>
        ))}
      </Stack>
    </Stack>
  );
}
