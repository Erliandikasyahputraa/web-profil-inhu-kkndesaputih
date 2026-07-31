import { Heading, Overline, Body } from '../../../../../components/typography';
import type { StoryContentProps } from '../Story.types';

export function StoryContent({ kicker, title, paragraphs }: StoryContentProps) {
  return (
    <div className="flex flex-col justify-center space-y-8 lg:pr-12">
      <div className="space-y-4">
        <Overline>{kicker}</Overline>
        <Heading level={2} variant="editorial">
          {title}
        </Heading>
      </div>
      <div className="space-y-6">
        {paragraphs.map((text, index) => (
          <Body key={index} className="text-stone-600">
            {text}
          </Body>
        ))}
      </div>
    </div>
  );
}
