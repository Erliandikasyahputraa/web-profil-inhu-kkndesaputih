import { Section } from '@/components';
import { Container } from '@/components';
import { SectionHeader } from '@/components';
import { PullQuote } from '@/components';
import { FadeIn } from '@/components';
import { GalleryCollage } from './components/GalleryCollage';
import { GalleryCTA } from './components/GalleryCTA';
import { galleryContent } from '../../../../content/homepage/gallery';

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
          <GalleryCTA label={galleryContent.cta.label} href={galleryContent.cta.href} />
        </FadeIn>
      </Container>
    </Section>
  );
}
