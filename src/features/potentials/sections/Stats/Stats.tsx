import { Section, Container, SectionHeader, EditorialStats } from '@/components/ui';
import { FadeIn } from '@/components/motion';

type StatsProps = {
  content: {
    kicker: string;
    heading: string;
    stats: { id: string; value: string; label: string }[];
  };
};

export function Stats({ content }: StatsProps) {
  return (
    <Section spacing="default" background="dark" variant="editorial">
      <Container size="default">
        <SectionHeader number={content.kicker} title={content.heading} />
        
        <FadeIn stagger="editorial" delay={0.2} className="mt-16">
          <EditorialStats stats={content.stats} layout="horizontal" />
        </FadeIn>
      </Container>
    </Section>
  );
}
