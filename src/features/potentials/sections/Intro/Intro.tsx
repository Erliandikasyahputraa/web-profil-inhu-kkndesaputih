import { Stack } from '@/components/layout';
import { Section, Container, SectionHeader } from '@/components/ui';
import { Body } from '@/components/typography';
import { FadeIn } from '@/components/motion';

type IntroProps = {
  content: {
    kicker: string;
    heading: string;
    paragraphs: string[];
  };
};

export function Intro({ content }: IntroProps) {
  return (
    <Section spacing="default" background="muted" variant="editorial">
      <Container size="narrow">
        <SectionHeader number={content.kicker} title={content.heading} />
        
        <FadeIn stagger="editorial" delay={0.2} className="mt-12">
          <Stack spacing="paragraph">
            {content.paragraphs.map((p, idx) => (
              <Body key={idx} measure="comfortable" tone="default" className={idx === 0 ? "text-lg md:text-xl font-medium text-brand-primary" : ""}>
                {p}
              </Body>
            ))}
          </Stack>
        </FadeIn>
      </Container>
    </Section>
  );
}
