import { Stack } from '@/components/layout';
import { Section, Container, SectionHeader, Button } from '@/components/ui';
import { Heading, Body } from '@/components/typography';
import { FadeIn } from '@/components/motion';

type DocumentsProps = {
  content: {
    kicker: string;
    heading: string;
    paragraphs: string[];
    documents: { title: string; type: string; size: string }[];
  };
};

export function Documents({ content }: DocumentsProps) {
  return (
    <Section spacing="default" background="primary" variant="editorial">
      <Container size="narrow">
        <SectionHeader number={content.kicker} title={content.heading} />
        
        <FadeIn stagger="editorial" delay={0.2} className="mt-12">
          <Stack spacing="paragraph">
            {content.paragraphs.map((p, idx) => (
              <Body key={idx} measure="comfortable" tone="default">{p}</Body>
            ))}
          </Stack>
        </FadeIn>

        <FadeIn stagger="editorial" delay={0.3} className="mt-12">
          <Stack spacing="tight">
            {content.documents.map((doc, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border border-stone-200 rounded-xl bg-stone-50/50 hover:bg-stone-50 transition-colors">
                <div>
                  <Heading level={4} className="text-brand-primary text-lg">{doc.title}</Heading>
                  <Body tone="muted" className="text-sm mt-1">{doc.type} • {doc.size}</Body>
                </div>
                {/* Mock download button */}
                <Button className="mt-4 sm:mt-0 w-fit">
                  Unduh
                </Button>
              </div>
            ))}
          </Stack>
        </FadeIn>
      </Container>
    </Section>
  );
}
