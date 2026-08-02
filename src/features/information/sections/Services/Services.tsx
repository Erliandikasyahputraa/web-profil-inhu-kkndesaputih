import { Split, Stack } from '@/components/layout';
import { Section, Container, SectionHeader, EditorialImage } from '@/components/ui';
import { Heading, Body } from '@/components/typography';
import { FadeIn, Reveal } from '@/components/motion';

type ServicesProps = {
  content: {
    kicker: string;
    heading: string;
    description: string;
    services: { name: string; detail: string }[];
    image: { src: string; alt: string };
  };
};

export function Services({ content }: ServicesProps) {
  return (
    <Section spacing="default" background="muted" variant="editorial">
      <Container size="default">
        <Split ratio="sidebar" className="items-start">
          <div className="w-full">
            <SectionHeader number={content.kicker} title={content.heading} description={content.description} />
            
            <FadeIn stagger="editorial" className="mt-12">
              <Stack spacing="paragraph">
                {content.services.map((service, idx) => (
                  <div key={idx} className="bg-brand-surface p-6 md:p-8 rounded-2xl border border-stone-200">
                    <Heading level={4} className="text-brand-primary">{service.name}</Heading>
                    <Body measure="comfortable" tone="muted" className="mt-2">{service.detail}</Body>
                  </div>
                ))}
              </Stack>
            </FadeIn>
          </div>
          
          <div className="lg:sticky lg:top-32 lg:pb-12 mt-12 lg:mt-0">
            <Reveal>
              <EditorialImage image={content.image} preset="portrait" variant="rounded" />
            </Reveal>
          </div>
        </Split>
      </Container>
    </Section>
  );
}
