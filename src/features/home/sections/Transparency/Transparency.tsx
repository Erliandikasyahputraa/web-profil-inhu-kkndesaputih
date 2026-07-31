import { Section } from '@/components/ui';
import { Container } from '@/components/ui';
import { SectionHeader } from '@/components/ui';
import { FadeIn, Reveal } from '@/components/motion';
import { TransparencyHeroMetric } from './components/TransparencyHeroMetric';
import { TransparencyBreakdown } from './components/TransparencyBreakdown';
import { TransparencyNarrative } from './components/TransparencyNarrative';
import { transparencyContent } from '@/content/homepage/transparency';

export function Transparency() {
  return (
    <Section spacing="xl" background="primary" variant="editorial">
      <Container size="default">
        <SectionHeader 
          number={transparencyContent.sectionNumber} 
          title={transparencyContent.kicker} 
          description={transparencyContent.title}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-24 mt-16 lg:mt-32">
          <div className="col-span-1 lg:col-span-5 flex flex-col">
            <FadeIn>
              <TransparencyHeroMetric 
                value={transparencyContent.mainMetric.value}
                label={transparencyContent.mainMetric.label}
                description={transparencyContent.mainMetric.description}
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <TransparencyBreakdown metrics={transparencyContent.metrics} />
            </FadeIn>
          </div>
          <div className="col-span-1 lg:col-span-7">
            <Reveal delay={0.3}>
              <TransparencyNarrative image={transparencyContent.image} description={transparencyContent.description} cta={transparencyContent.cta} />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
