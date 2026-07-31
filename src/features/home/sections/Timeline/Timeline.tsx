import { Section } from '@/components';
import { Container } from '@/components';
import { SectionHeader } from '@/components';
import { PullQuote } from '@/components';
import { FadeIn } from '@/components';
import { TimelineChapter } from './components/TimelineChapter';
import { timelineContent } from '../../../../content/homepage/timeline';

export function Timeline() {
  return (
    <Section spacing="xl" background="primary" variant="editorial">
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
