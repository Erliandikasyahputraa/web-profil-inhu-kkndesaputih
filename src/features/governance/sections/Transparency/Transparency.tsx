import { Split, Stack } from '@/components/layout';
import { Section, Container, SectionHeader, EditorialImage, EditorialStats } from '@/components/ui';
import { Body } from '@/components/typography';
import { FadeIn, Reveal } from '@/components/motion';

type TransparencyProps = {
  content: {
    kicker: string;
    heading: string;
    paragraphs: string[];
    stats: { id: string; value: string; label: string }[];
    image: { src: string; alt: string };
  };
};

export function Transparency({ content }: TransparencyProps) {
  return (
    <Section spacing="default" background="primary" variant="editorial">
      <Container size="default">
        <SectionHeader number={content.kicker} title={content.heading} />
        
        <Split ratio="sidebar" className="mt-16 items-start flex-row-reverse">
          <div className="lg:sticky lg:top-32 lg:pb-12">
            <Reveal>
              <EditorialImage image={content.image} preset="portrait" variant="rounded" />
            </Reveal>
          </div>
          
          <div className="w-full">
            <FadeIn stagger="editorial">
              <Stack spacing="paragraph">
                {content.paragraphs.map((p, idx) => (
                  <Body key={idx} measure="comfortable" tone="default">{p}</Body>
                ))}
              </Stack>
            </FadeIn>
            
            <FadeIn delay={0.2} className="mt-12 pt-12 border-t border-brand-accent/20">
              <EditorialStats stats={content.stats} layout="horizontal" />
            </FadeIn>
          </div>
        </Split>
      </Container>
    </Section>
  );
}
