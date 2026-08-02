import { Stack } from '@/components/layout';
import { Section, Container, SectionHeader } from '@/components/ui';
import { Heading, Body } from '@/components/typography';
import { FadeIn } from '@/components/motion';

type BoundariesProps = {
  content: {
    kicker: string;
    heading: string;
    description: string;
    boundaries: { direction: string; description: string }[];
  };
};

export function Boundaries({ content }: BoundariesProps) {
  return (
    <Section spacing="default" background="muted" variant="editorial">
      <Container size="default">
        <SectionHeader number={content.kicker} title={content.heading} description={content.description} />
        
        <FadeIn stagger="editorial" delay={0.2} className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.boundaries.map((boundary, idx) => (
              <Stack key={idx} spacing="tight" className="bg-brand-surface/50 p-8 rounded-2xl border border-stone-200">
                <Heading level={4} className="text-brand-accent uppercase tracking-wider text-sm">{boundary.direction}</Heading>
                <Body measure="comfortable" tone="muted">{boundary.description}</Body>
              </Stack>
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
