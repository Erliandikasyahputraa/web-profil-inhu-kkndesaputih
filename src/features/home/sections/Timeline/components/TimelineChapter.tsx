import { Grid, Stack } from '@/components/layout';
import { FadeIn, Reveal } from '@/components/motion';
import { TimelineYear } from './TimelineYear';
import { TimelineMedia } from './TimelineMedia';
import { TimelineContent } from './TimelineContent';
import type { TimelineChapterProps } from '../Timeline.types';

export function TimelineChapter({ chapter }: TimelineChapterProps) {
  return (
    <Grid variant="editorial" className="border-t border-[var(--color-border)] py-[var(--spacing-section)]">
      {/* Timeline uses 4-8 asymmetric layout for sticky year, so col-span is kept */}
      <div className="col-span-1 lg:col-span-4">
        <FadeIn>
          <TimelineYear year={chapter.year} />
        </FadeIn>
      </div>
      <Stack spacing="section" className="col-span-1 lg:col-span-8">
        <Reveal>
          <TimelineMedia image={chapter.image} />
        </Reveal>
        <FadeIn delay={0.2}>
          <TimelineContent title={chapter.title} description={chapter.description} />
        </FadeIn>
      </Stack>
    </Grid>
  );
}
