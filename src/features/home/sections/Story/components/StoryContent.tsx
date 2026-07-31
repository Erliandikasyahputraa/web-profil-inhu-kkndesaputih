import { Heading, Lead, Body } from '@/components';
import type { StoryContentProps } from '../Story.types';
import { StoryMeta } from './StoryMeta';
import { storyContent } from '../../../../../../src/content/homepage/story';

export function StoryContent({ title, lead, paragraphs }: StoryContentProps) {
  return (
    <div className="flex flex-col justify-center space-y-8 h-full">
      <div className="space-y-6">
        <Heading level={2} variant="editorial">
          {title}
        </Heading>
        <Lead className="text-brand-primary/80 font-medium">{lead}</Lead>
      </div>
      <StoryMeta label={storyContent.meta.label} value={storyContent.meta.value} />
      <div className="space-y-6">
        {paragraphs.map((p) => (
          <Body key={p.id} className="text-stone-600">
            {p.text}
          </Body>
        ))}
      </div>
    </div>
  );
}
