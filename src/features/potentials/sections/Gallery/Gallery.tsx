import { Section, Container, SectionHeader, EditorialImage } from '@/components/ui';
import { Reveal } from '@/components/motion';

type GalleryProps = {
  content: {
    kicker: string;
    heading: string;
    images: { src: string; alt: string }[];
  };
};

export function Gallery({ content }: GalleryProps) {
  return (
    <Section spacing="default" background="primary" variant="editorial">
      <Container size="default">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionHeader number={content.kicker} title={content.heading} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          {content.images.map((img, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className={`w-full h-full overflow-hidden rounded-2xl`}>
                <EditorialImage image={img} preset={idx === 0 || idx === 3 ? 'gallery-feature' : 'gallery-square'} className="object-cover w-full h-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
