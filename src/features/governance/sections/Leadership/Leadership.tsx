import { Split, Stack } from '@/components/layout';
import { Section, Container, SectionHeader, EditorialImage, PullQuote } from '@/components/ui';
import { Body } from '@/components/typography';
import { FadeIn, Reveal, Parallax } from '@/components/motion';

type LeadershipProps = {
  content: {
    kicker: string;
    heading: string;
    paragraphs: string[];
    quote: { content: string; title: string };
    image: { src: string; alt: string };
  };
};

export function Leadership({ content }: LeadershipProps) {
  return (
    <Section spacing="default" background="primary" variant="editorial">
      <Container size="default">
        <SectionHeader number={content.kicker} title={content.heading} />
        
        <Split ratio="sidebar" className="mt-16 items-start">
          <div className="lg:sticky lg:top-32 lg:pb-12">
            <Parallax offset={20}>
              <PullQuote content={content.quote.content} title={content.quote.title} />
            </Parallax>
          </div>
          
          <div className="w-full">
            <Reveal>
              <EditorialImage image={content.image} preset="landscape" variant="rounded" />
            </Reveal>

            <FadeIn stagger="editorial" className="mt-12">
              <Stack spacing="paragraph">
                {content.paragraphs.map((p, idx) => (
                  <Body key={idx} measure="comfortable" tone="default">{p}</Body>
                ))}
              </Stack>
            </FadeIn>
          </div>
        </Split>
      </Container>
    </Section>
  );
}
