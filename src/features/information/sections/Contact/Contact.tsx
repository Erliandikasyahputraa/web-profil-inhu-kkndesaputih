import { Split, Stack } from '@/components/layout';
import { Section, Container, SectionHeader, PullQuote } from '@/components/ui';
import { Heading, Body } from '@/components/typography';
import { FadeIn, Parallax } from '@/components/motion';

type ContactProps = {
  content: {
    kicker: string;
    heading: string;
    quote: { content: string; title: string };
    details: { label: string; value: string }[];
  };
};

export function Contact({ content }: ContactProps) {
  return (
    <Section spacing="default" background="dark" variant="editorial">
      <Container size="default">
        <SectionHeader number={content.kicker} title={content.heading} />
        
        <Split ratio="sidebar" className="mt-16 items-start">
          <div className="w-full">
            <FadeIn stagger="editorial">
              <Stack spacing="paragraph">
                {content.details.map((detail, idx) => (
                  <div key={idx} className="pb-6 border-b border-stone-700/50 last:border-0">
                    <Heading level={4} className="text-stone-400 text-sm tracking-wider uppercase mb-2">{detail.label}</Heading>
                    <Body measure="comfortable" className="text-stone-200 text-lg md:text-xl">{detail.value}</Body>
                  </div>
                ))}
              </Stack>
            </FadeIn>
          </div>
          
          <div className="lg:sticky lg:top-32 lg:pb-12 mt-16 lg:mt-0">
            <Parallax offset={15}>
              <PullQuote content={content.quote.content} title={content.quote.title} />
            </Parallax>
          </div>
        </Split>
      </Container>
    </Section>
  );
}
