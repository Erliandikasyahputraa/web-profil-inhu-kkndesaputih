import { Section, Container, SectionHeader } from '@/components/ui';
import { Split } from '@/components/layout';
import { FadeIn, Reveal } from '@/components/motion';
import { StoryContent } from './components/StoryContent';
import { StoryImage } from './components/StoryImage';
import { storyContent } from '@/content/homepage/story';

export function Story() {
  return (
    <Section spacing="default" background="primary" variant="editorial">
      <Container size="default">
        <SectionHeader 
          number={storyContent.sectionNumber} 
          title={storyContent.kicker} 
        />
        
        {/* Editorial Layout Grid */}
        <Split ratio="content" className="items-start">
          <div className="order-2 lg:order-1">
            <FadeIn stagger="editorial" delay={0.2}>
              <StoryContent 
                title={storyContent.title} 
                lead={storyContent.lead}
                paragraphs={storyContent.paragraphs} 
              />
            </FadeIn>
          </div>
          <div className="order-1 lg:order-2">
            <Reveal stagger="hero">
              <StoryImage image={storyContent.image} />
            </Reveal>
          </div>
        </Split>
      </Container>
    </Section>
  );
}
