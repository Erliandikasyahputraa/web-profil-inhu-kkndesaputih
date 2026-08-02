import { Stack, Split } from '@/components/layout';
import { Section, Container } from '@/components/ui';
import { Heading, Body } from '@/components/typography';
import { Timeline } from '@/components/editorial';
import { PullQuote } from '@/components/editorial';
import type { TimelineItem } from '@/components/editorial';
import type { EditorialCallout } from '@/content/types';

type HistoryProps = {
  content: {
    heading: string;
    body: string[];
    callout: EditorialCallout;
    timeline: TimelineItem[];
  };
};

export function History({ content }: HistoryProps) {
  // We insert the quote after the first paragraph for editorial flow
  const firstParagraph = content.body[0];
  const remainingParagraphs = content.body.slice(1);

  return (
    <Section spacing="default" background="muted">
      <Container>
        <Split ratio="sidebar" className="items-start">
          <div className="md:sticky md:top-24 mb-8 md:mb-0">
            <Heading level={2} className="text-brand-primary">
              {content.heading}
            </Heading>
          </div>
          
          <div className="w-full">
            <Stack spacing="content">
              {firstParagraph && (
                <Body measure="comfortable" tone="default">
                  {firstParagraph}
                </Body>
              )}
              
              {content.callout && (
                <PullQuote {...content.callout} />
              )}
              
              {remainingParagraphs.map((p, idx) => (
                <Body key={idx} measure="comfortable" tone="default">
                  {p}
                </Body>
              ))}
            </Stack>
            
            <div className="mt-12 md:mt-16 pt-8 border-t border-brand-accent/20">
              <Timeline items={content.timeline} />
            </div>
          </div>
        </Split>
      </Container>
    </Section>
  );
}
