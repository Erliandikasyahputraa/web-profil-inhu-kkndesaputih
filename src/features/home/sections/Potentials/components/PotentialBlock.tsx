import { Stack, Split } from '@/components/layout';
import { Heading, Body } from '@/components/typography';
import { EditorialImage } from '@/components/ui';
import { EditorialStats } from '@/components/ui';
import { FadeIn, Reveal } from '@/components/motion';
import type { PotentialBlockProps } from '../Potentials.types';

export function PotentialBlock({ title, description, image, stats }: PotentialBlockProps) {
  return (
    <Stack spacing="grid">
      <Reveal className="w-full">
        <EditorialImage image={image} preset="landscape" variant="rounded" />
      </Reveal>
      <Split ratio="sidebar">
        <div>
          <FadeIn stagger="editorial">
            <Stack spacing="paragraph">
              <Heading level={3} variant="editorial">{title}</Heading>
              <Body tone="muted" measure="wide">{description}</Body>
            </Stack>
          </FadeIn>
        </div>
        <div>
          <FadeIn stagger="editorial" delay={0.2}>
            <EditorialStats stats={stats} layout="horizontal" />
          </FadeIn>
        </div>
      </Split>
    </Stack>
  );
}
