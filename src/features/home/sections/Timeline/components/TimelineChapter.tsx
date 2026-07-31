import { FadeIn, Reveal } from '../../../../../components/motion';
import { TimelineYear } from './TimelineYear';
import { TimelineMedia } from './TimelineMedia';
import { TimelineContent } from './TimelineContent';
import type { TimelineChapterProps } from '../Timeline.types';

export function TimelineChapter({ chapter }: TimelineChapterProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-24 border-t border-stone-200 pt-16 lg:pt-32 pb-16 lg:pb-32">
      <div className="col-span-1 lg:col-span-4">
        <FadeIn direction="up" distance={40}>
          <TimelineYear year={chapter.year} />
        </FadeIn>
      </div>
      <div className="col-span-1 lg:col-span-8 flex flex-col space-y-12">
        <Reveal>
          <TimelineMedia src={chapter.image} alt={chapter.imageAlt} />
        </Reveal>
        <FadeIn delay={0.2}>
          <TimelineContent title={chapter.title} description={chapter.description} />
        </FadeIn>
      </div>
    </div>
  );
}
