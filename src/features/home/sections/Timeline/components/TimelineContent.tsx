import { Heading, Body } from '@/components/typography';
import type { TimelineContentProps } from '../Timeline.types';

export function TimelineContent({ title, description }: TimelineContentProps) {
  return (
    <div className="flex flex-col space-y-6">
      <Heading level={3} variant="editorial">
        {title}
      </Heading>
      <Body className="text-stone-600 max-w-2xl leading-relaxed">
        {description}
      </Body>
    </div>
  );
}
