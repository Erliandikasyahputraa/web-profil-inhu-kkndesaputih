import { Section, Container, SectionHeader, EditorialImage } from '@/components/ui';
import { Reveal } from '@/components/motion';

type MapProps = {
  content: {
    kicker: string;
    heading: string;
    image: { src: string; alt: string };
  };
};

export function Map({ content }: MapProps) {
  return (
    <Section spacing="default" background="primary" variant="editorial">
      <Container size="default">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionHeader number={content.kicker} title={content.heading} />
        </div>
        
        <Reveal>
          <div className="w-full h-auto rounded-3xl overflow-hidden shadow-2xl">
            <EditorialImage image={content.image} preset="hero" />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
