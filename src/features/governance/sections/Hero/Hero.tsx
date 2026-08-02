import { Stack } from '@/components/layout';
import { Section, Container, EditorialImage } from '@/components/ui';
import { Display, Body, Overline } from '@/components/typography';
import { FadeIn, Reveal } from '@/components/motion';

type HeroProps = {
  content: {
    overline: string;
    heading: string;
    lead: string;
    image: { src: string; alt: string };
  };
};

export function Hero({ content }: HeroProps) {
  return (
    <Section spacing="default" className="pt-24 md:pt-32 pb-8" background="transparent">
      <Container>
        <FadeIn>
          <Stack spacing="grid" className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <Stack spacing="tight">
              <Overline className="text-brand-accent tracking-widest uppercase">{content.overline}</Overline>
              <Display tone="brand">{content.heading}</Display>
            </Stack>
            <Body measure="comfortable" tone="muted" className="text-xl md:text-2xl font-light mx-auto">
              {content.lead}
            </Body>
          </Stack>
        </FadeIn>
        
        <Reveal delay={0.2}>
          <div className="w-full h-auto aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden relative shadow-lg">
            <EditorialImage preset="hero" image={content.image} />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
