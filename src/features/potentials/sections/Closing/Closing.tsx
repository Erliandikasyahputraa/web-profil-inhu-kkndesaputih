import { Section, Container, PullQuote } from '@/components/ui';
import { Parallax } from '@/components/motion';

type ClosingProps = {
  content: {
    quote: { content: string; title: string };
  };
};

export function Closing({ content }: ClosingProps) {
  return (
    <Section spacing="default" background="muted" variant="editorial">
      <Container size="narrow">
        <Parallax offset={20}>
          <div className="py-12 md:py-24">
            <PullQuote content={content.quote.content} title={content.quote.title} />
          </div>
        </Parallax>
      </Container>
    </Section>
  );
}
