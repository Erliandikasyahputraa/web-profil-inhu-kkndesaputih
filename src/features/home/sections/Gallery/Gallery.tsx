import { Section } from '@/components/ui';
import { Container } from '@/components/ui';
import { SectionHeader } from '@/components/ui';
import { PullQuote } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { GalleryCollage } from './components/GalleryCollage';
import { GalleryCTA } from './components/GalleryCTA';
import { galleryContent } from '@/content/homepage/gallery';

export function Gallery() {
  return (
    <Section spacing="xl" background="muted" variant="editorial">
      <Container size="default">
        <SectionHeader 
          number={galleryContent.sectionNumber} 
          title={galleryContent.kicker} 
          description={galleryContent.description}
        />
        
        <FadeIn stagger="editorial">
          <GalleryCollage images={galleryContent.images} />
        </FadeIn>

        <div className="mt-24 lg:mt-32">
          <FadeIn>
            <PullQuote 
              text={galleryContent.quote.text} 
              author={galleryContent.quote.author} 
            />
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <GalleryCTA cta={galleryContent.cta} />
        </FadeIn>
      </Container>
    </Section>
  );
}
