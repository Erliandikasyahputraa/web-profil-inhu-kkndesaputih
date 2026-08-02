import { Split, Stack } from '@/components/layout';
import { Section, Container } from '@/components/ui';
import { Heading, Body } from '@/components/typography';
import { PullQuote } from '@/components/editorial';
import type { EditorialCallout } from '@/content/types';

type VisionProps = {
  content: {
    heading: string;
    body: string[];
    callout: EditorialCallout;
    missions: string[];
  };
};

export function Vision({ content }: VisionProps) {
  return (
    <Section spacing="default" background="primary">
      <Container>
        <Split ratio="balanced" className="items-start md:items-center">
          <div className="mb-8 md:mb-0 lg:sticky lg:top-32 lg:pb-12">
            <Heading level={2} className="mb-6 md:mb-8 text-brand-primary">
              {content.heading}
            </Heading>
            <PullQuote {...content.callout} />
          </div>
          
          <Stack spacing="content" className="bg-brand-surface/50 p-8 md:p-12 rounded-3xl">
            {content.body.map((p, idx) => (
              <Body key={idx} measure="comfortable" tone="default">
                {p}
              </Body>
            ))}
            
            {content.missions && content.missions.length > 0 && (
              <Stack spacing="tight" as="ol" className="list-decimal list-outside ml-4 mt-4">
                {content.missions.map((mission, idx) => (
                  <li key={idx}>
                    <Body measure="comfortable" tone="default">
                      {mission}
                    </Body>
                  </li>
                ))}
              </Stack>
            )}
          </Stack>
        </Split>
      </Container>
    </Section>
  );
}
