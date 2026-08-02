import { Stack } from '@/components/layout';
import { Section, Container, SectionHeader, EditorialImage } from '@/components/ui';
import { Body } from '@/components/typography';
import { PullQuote } from '@/components/ui';
import { FadeIn, Reveal, Parallax } from '@/components/motion';

type TopographyProps = {
  content: {
    kicker: string;
    callout: { content: string; title: string };
    paragraphs: string[];
    image: { src: string; alt: string };
  };
};

export function Topography({ content }: TopographyProps) {
  return (
    <Section spacing="default" background="dark" variant="editorial">
      <Container size="default">
        <SectionHeader number={content.kicker} title="Topografi & Iklim" />
        
        <Stack spacing="section" className="mt-16">
          <Reveal>
            <EditorialImage image={content.image} preset="landscape" variant="rounded" />
          </Reveal>

          <Parallax offset={30}>
            <PullQuote content={content.callout.content} title={content.callout.title} />
          </Parallax>
          
          <FadeIn stagger="editorial">
            <Stack spacing="paragraph" className="max-w-3xl mx-auto text-center">
              {content.paragraphs.map((p, idx) => (
                <Body key={idx} measure="comfortable" className="text-stone-300">
                  {p}
                </Body>
              ))}
            </Stack>
          </FadeIn>
        </Stack>
      </Container>
    </Section>
  );
}
