import { Container } from '../../../../components/ui/Container';
import { Section } from '../../../../components/ui/Section';
import { Heading } from '../../../../components/typography';

export function CTASection() {
  return (
    <Section className="bg-brand-primary text-white">
      <Container className="text-center py-24 border border-dashed border-white/30">
        <Heading className="text-white">CTA Section Placeholder</Heading>
      </Container>
    </Section>
  );
}
