import { Stack } from '@/components/layout';
import { Section, Container, SectionHeader } from '@/components/ui';
import { Heading, Body, Overline } from '@/components/typography';
import { FadeIn } from '@/components/motion';

type AnnouncementsProps = {
  content: {
    kicker: string;
    heading: string;
    items: { date: string; title: string; description: string }[];
  };
};

export function Announcements({ content }: AnnouncementsProps) {
  return (
    <Section spacing="default" background="primary" variant="editorial">
      <Container size="default">
        <SectionHeader number={content.kicker} title={content.heading} />
        
        <FadeIn stagger="editorial" delay={0.2} className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {content.items.map((item, idx) => (
              <Stack key={idx} spacing="tight" className="pt-8 border-t border-brand-accent/20">
                <Overline className="text-brand-accent">{item.date}</Overline>
                <Heading level={4} className="text-brand-primary mt-2">{item.title}</Heading>
                <Body measure="comfortable" tone="muted" className="mt-4">{item.description}</Body>
              </Stack>
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
