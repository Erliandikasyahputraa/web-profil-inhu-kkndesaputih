import { Section, Container, SectionHeader } from '@/components/ui';
import { Split, Stack } from '@/components/layout';
import { FadeIn, Reveal } from '@/components/motion';
import { TransparencyHeroMetric } from './components/TransparencyHeroMetric';
import { TransparencyBreakdown } from './components/TransparencyBreakdown';
import { TransparencyNarrative } from './components/TransparencyNarrative';
import { transparencyContent } from '@/content/homepage/transparency';

export function Transparency() {
  return (
    <Section spacing="default" background="primary" variant="editorial">
      <Container size="default">
        <SectionHeader 
          number={transparencyContent.sectionNumber} 
          title={transparencyContent.kicker} 
          description={transparencyContent.title}
        />

        <Split ratio="content" className="mt-[var(--spacing-section)]">
          <Stack spacing="none">
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
          </Stack>
          <div>
            <Reveal delay={0.3}>
              <TransparencyNarrative image={transparencyContent.image} description={transparencyContent.description} cta={transparencyContent.cta} />
            </Reveal>
          </div>
        </Split>
      </Container>
    </Section>
  );
}
