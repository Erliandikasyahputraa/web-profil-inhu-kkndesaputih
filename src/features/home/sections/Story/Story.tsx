import { Section } from '../../../../components/ui/Section';
import { Container } from '../../../../components/ui/Container';
import { Reveal } from '../../../../components/motion';
import { StoryContent } from './components/StoryContent';
import { StoryImage } from './components/StoryImage';
import { storyContent } from '../../../../content/homepage/story';

export function Story() {
  return (
    <Section spacing="lg" background="primary">
      <Container size="default">
        <Reveal stagger="editorial" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <StoryContent 
            kicker={storyContent.kicker} 
            title={storyContent.title} 
            paragraphs={storyContent.paragraphs} 
          />
          <StoryImage 
            imageSrc={storyContent.image} 
            imageAlt={storyContent.imageAlt} 
          />
        </Reveal>
      </Container>
    </Section>
  );
}
