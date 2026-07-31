import { Section, Container, SectionHeader, Button } from '@/components/ui';
import { Stack, Cluster } from '@/components/layout';
import { FadeIn } from '@/components/motion';
import { PotentialBlock } from './components/PotentialBlock';
import { potentialsContent } from '@/content/homepage/potentials';

export function Potentials() {
  return (
    <Section spacing="default" background="muted" variant="editorial">
      <Container size="default">
        <SectionHeader 
          number={potentialsContent.sectionNumber} 
          title={potentialsContent.kicker} 
          description={potentialsContent.description}
        />
        
        <Stack spacing="section" className="mt-16">
          {potentialsContent.items.map((item) => (
            <PotentialBlock 
              key={item.id}
              {...item}
            />
          ))}
        </Stack>

        <Cluster justify="center" className="mt-32 pt-16 border-t border-[var(--color-border)]">
          <FadeIn>
            <Button variant="outline" size="lg" className="border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors duration-300">
              {potentialsContent.cta.label}
            </Button>
          </FadeIn>
        </Cluster>
      </Container>
    </Section>
  );
}
