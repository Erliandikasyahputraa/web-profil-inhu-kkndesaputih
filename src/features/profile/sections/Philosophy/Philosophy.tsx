import { Stack } from '@/components/layout';
import { Section, Container } from '@/components/ui';
import { Heading, Body, Overline } from '@/components/typography';
import { PullQuote } from '@/components/editorial';
import type { EditorialCallout } from '@/content/types';

type PhilosophyProps = {
  content: {
    heading: string;
    body: string[];
    callout: EditorialCallout;
    values: {
      label: string;
      description: string;
    }[];
  };
};

export function Philosophy({ content }: PhilosophyProps) {
  return (
    <Section spacing="default" background="dark">
      <Container>
        <Stack spacing="grid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start border-b border-brand-surface/20 pb-12">
            <div>
              <Overline className="text-brand-surface/70 tracking-widest uppercase mb-4 block">Nilai-Nilai Leluhur</Overline>
              <Heading level={2} className="text-white">
                {content.heading}
              </Heading>
              <Stack spacing="content" className="mt-8">
                {content.body.map((p, idx) => (
                  <Body key={idx} measure="comfortable" className="text-stone-300">
                    {p}
                  </Body>
                ))}
              </Stack>
            </div>
            
            <div className="border border-white/20 p-8 rounded-3xl">
              <PullQuote {...content.callout} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--spacing-grid)] pt-8">
            {content.values.map((value, idx) => (
              <Stack key={idx} spacing="tight" className="p-6 md:p-8 rounded-2xl border border-white/20">
                <Heading level={4} className="text-brand-accent">{value.label}</Heading>
                <Body measure="comfortable" className="text-stone-400">
                  {value.description}
                </Body>
              </Stack>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
