import { Section } from '@/components/ui';
import { Container } from '@/components/ui';
import { SectionHeader } from '@/components/ui';
import { FadeIn, Reveal } from '@/components/motion';
import { StoryContent } from './components/StoryContent';
import { StoryImage } from './components/StoryImage';
import { storyContent } from '@/content/homepage/story';

export function Story() {
  return (
    <Section spacing="lg" background="primary" variant="editorial">
      <Container size="default">
        <SectionHeader 
          number={storyContent.sectionNumber} 
          title={storyContent.kicker} 
        />
        
        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12 xl:gap-x-20 items-start">
          <div className="col-span-1 lg:col-span-5 order-2 lg:order-1">
            <FadeIn stagger="editorial" delay={0.2}>
              <StoryContent 
                title={storyContent.title} 
                lead={storyContent.lead}
                paragraphs={storyContent.paragraphs} 
              />
            </FadeIn>
          </div>
          <div className="col-span-1 lg:col-span-7 order-1 lg:order-2">
            <Reveal stagger="hero">
              <StoryImage 
                imageSrc={storyContent.image} 
                imageAlt={storyContent.imageAlt} 
                caption={storyContent.imageCaption}
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
