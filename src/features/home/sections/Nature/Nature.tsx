import { Section } from '@/components/ui';
import { Container } from '@/components/ui';
import { SectionHeader } from '@/components/ui';
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
        
        <div className="flex flex-col space-y-24 lg:space-y-32 mt-12">
          
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-24 items-start">
            <div className="col-span-1 lg:col-span-7 xl:col-span-8">
              <FadeIn stagger="editorial">
                <NatureContent paragraphs={natureContent.paragraphs} />
              </FadeIn>
            </div>
            
            <div className="col-span-1 lg:col-span-5 xl:col-span-4">
              <FadeIn stagger="editorial" delay={0.2}>
                <EditorialStats stats={natureContent.stats} />
              </FadeIn>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
