import { Section, Container, SectionHeader, PullQuote } from '@/components/ui';
import { Stack } from '@/components/layout';
import { FadeIn } from '@/components/motion';
import { TimelineChapter } from './components/TimelineChapter';
import { timelineContent } from '@/content/homepage/timeline';

export function Timeline() {
  return (
    <Section spacing="default" background="primary" variant="editorial">
      <Container size="default">
        <SectionHeader 
          number={timelineContent.sectionNumber} 
          title={timelineContent.kicker} 
          description={timelineContent.description}
        />
        
        <Stack spacing="section" className="mt-24 mb-32">
          <FadeIn>
            <PullQuote 
              text={timelineContent.quote.text} 
              author={timelineContent.quote.author} 
            />
          </FadeIn>
        </Stack>

        <Stack spacing="none">
          {timelineContent.chapters.map((chapter) => (
            <TimelineChapter 
              key={chapter.id}
              chapter={chapter}
            />
          ))}
        </Stack>
      </Container>
    </Section>
  );
}
