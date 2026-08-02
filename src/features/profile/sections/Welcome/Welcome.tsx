import { Split, Stack } from '@/components/layout';
import { Section, Container, EditorialImage } from '@/components/ui';
import { Heading, Body } from '@/components/typography';
import { PullQuote } from '@/components/editorial';
import type { EditorialCallout } from '@/content/types';

type WelcomeProps = {
  content: {
    heading: string;
    body: string[];
    callout: EditorialCallout;
    image: {
      src: string;
      alt: string;
    };
  };
};

export function Welcome({ content }: WelcomeProps) {
  return (
    <Section spacing="default" background="primary">
      <Container>
        <Split ratio="sidebar" className="items-start">
          <div className="md:sticky md:top-24">
            <div className="w-full aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
              <EditorialImage preset="portrait" image={content.image} />
            </div>
          </div>
          <Stack spacing="content" className="pt-8 md:pt-0">
            <Heading level={2} className="text-brand-primary">
              {content.heading}
            </Heading>
            <Stack spacing="content">
              {content.body.map((p, idx) => (
                <Body key={idx} measure="comfortable" tone="default">
                  {p}
                </Body>
              ))}
            </Stack>
            
            <PullQuote {...content.callout} />
            
          </Stack>
        </Split>
      </Container>
    </Section>
  );
}
