import { Split, Stack } from '@/components/layout';
import { Section, Container, SectionHeader, EditorialImage } from '@/components/ui';
import { Body } from '@/components/typography';
import { FadeIn, Reveal } from '@/components/motion';

type SectorProps = {
  content: {
    kicker: string;
    heading: string;
    paragraphs: string[];
    image: { src: string; alt: string };
  };
  background?: 'transparent' | 'primary' | 'muted' | 'dark';
  reverse?: boolean;
};

export function Sector({ content, background = 'primary', reverse = false }: SectorProps) {
  return (
    <Section spacing="default" background={background} variant="editorial">
      <Container size="default">
        <Split ratio="sidebar" className={`items-start ${reverse ? 'flex-row-reverse' : ''}`}>
          <div className="w-full">
            <SectionHeader number={content.kicker} title={content.heading} />
            <FadeIn stagger="editorial" className="mt-8 lg:mt-12">
              <Stack spacing="paragraph">
                {content.paragraphs.map((p, idx) => (
                  <Body key={idx} measure="comfortable" tone={background === 'dark' ? 'muted' : 'default'}>
                    {p}
                  </Body>
                ))}
              </Stack>
            </FadeIn>
          </div>
          
          <div className="lg:sticky lg:top-32 lg:pb-12 mt-12 lg:mt-0">
            <Reveal>
              <EditorialImage image={content.image} preset="portrait" variant="rounded" />
            </Reveal>
          </div>
        </Split>
      </Container>
    </Section>
  );
}
