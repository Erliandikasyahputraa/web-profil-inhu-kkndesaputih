import { Stack } from '@/components/layout';
import { Section, Container, SectionHeader, EditorialImage } from '@/components/ui';
import { Body } from '@/components/typography';
import { FadeIn, Reveal } from '@/components/motion';

type ParticipationProps = {
  content: {
    kicker: string;
    heading: string;
    paragraphs: string[];
    image: { src: string; alt: string };
  };
};

export function Participation({ content }: ParticipationProps) {
  return (
    <Section spacing="default" background="dark" variant="editorial">
      <Container size="default">
        <SectionHeader number={content.kicker} title={content.heading} />
        
        <Stack spacing="section" className="mt-16">
          <Reveal>
            <EditorialImage image={content.image} preset="landscape" variant="rounded" />
          </Reveal>

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
