import { Stack } from '@/components/layout';
import { Section, Container, SectionHeader } from '@/components/ui';
import { Heading, Body } from '@/components/typography';
import { FadeIn } from '@/components/motion';

type OrganizationProps = {
  content: {
    kicker: string;
    heading: string;
    description: string;
    members: { name: string; role: string; description: string }[];
  };
};

export function Organization({ content }: OrganizationProps) {
  return (
    <Section spacing="default" background="muted" variant="editorial">
      <Container size="default">
        <SectionHeader number={content.kicker} title={content.heading} description={content.description} />
        
        <FadeIn stagger="editorial" delay={0.2} className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.members.map((member, idx) => (
              <Stack key={idx} spacing="tight" className="bg-brand-surface p-8 rounded-2xl border border-stone-200">
                <Stack spacing="none">
                  <Heading level={4} className="text-brand-primary">{member.name}</Heading>
                  <Body tone="muted" className="text-sm font-medium uppercase tracking-wider">{member.role}</Body>
                </Stack>
                <Body measure="comfortable" tone="default" className="mt-4">{member.description}</Body>
              </Stack>
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
