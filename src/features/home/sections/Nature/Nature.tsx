import { Section, Container, SectionHeader } from '@/components/ui';
import { Split, Stack } from '@/components/layout';
import { FadeIn, Reveal, Parallax } from '@/components/motion';
import { NatureMedia } from './components/NatureMedia';
import { NatureContent } from './components/NatureContent';
import { PullQuote } from '@/components/ui';
import { EditorialStats } from '@/components/ui';
import { natureContent } from '@/content/homepage/nature';

export function Nature() {
  return (
    <Section spacing="default" background="transparent" variant="editorial">
      <Container size="default">
        <SectionHeader 
          number={natureContent.sectionNumber} 
          title={natureContent.kicker} 
        />
        
        <Stack spacing="section" className="mt-12">
          
          {/* Full-width Cinematic Image */}
          <Reveal>
            <NatureMedia image={natureContent.image} />
          </Reveal>

          {/* Large Pull Quote */}
          <Parallax offset={20}>
            <PullQuote 
              text={natureContent.quote} 
              author={natureContent.quoteAuthor} 
            />
          </Parallax>

          {/* Editorial Grid: Text + Stats */}
          <Split ratio="sidebar" className="items-start">
            <div>
              <FadeIn stagger="editorial">
                <NatureContent paragraphs={natureContent.paragraphs} />
              </FadeIn>
            </div>
            
            <div>
              <FadeIn stagger="editorial" delay={0.2}>
                <EditorialStats stats={natureContent.stats} />
              </FadeIn>
            </div>
          </Split>

        </Stack>
      </Container>
    </Section>
  );
}
