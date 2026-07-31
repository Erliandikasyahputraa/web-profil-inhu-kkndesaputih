import { Section } from '@/components/ui';
import { Container } from '@/components/ui';
import { SectionHeader } from '@/components/ui';
import { PullQuote } from '@/components/ui';
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
        
        <div className="mt-24 mb-32">
          <FadeIn>
            <PullQuote 
              text={timelineContent.quote.text} 
              author={timelineContent.quote.author} 
            />
          </FadeIn>
        </div>

        <div className="flex flex-col">
          {timelineContent.chapters.map((chapter) => (
            <TimelineChapter 
              key={chapter.id}
              chapter={chapter}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
