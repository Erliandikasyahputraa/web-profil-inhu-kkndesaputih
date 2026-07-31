import { Section } from '@/components/ui';
import { Container } from '@/components/ui';
import { SectionHeader } from '@/components/ui';
import { Button } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { PotentialBlock } from './components/PotentialBlock';
import { potentialsContent } from '@/content/homepage/potentials';

export function Potentials() {
  return (
    <Section spacing="xl" background="muted" variant="editorial">
      <Container size="default">
        <SectionHeader 
          number={potentialsContent.sectionNumber} 
          title={potentialsContent.kicker} 
          description={potentialsContent.description}
        />
        
        <div className="flex flex-col space-y-32 mt-16">
          {potentialsContent.items.map((item) => (
            <PotentialBlock 
              key={item.id}
              {...item}
            />
          ))}
        </div>

        <div className="mt-32 pt-16 border-t border-stone-200 flex justify-center">
          <FadeIn>
            <Button variant="outline" size="lg" className="border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors duration-300">
              {potentialsContent.cta.label}
            </Button>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
