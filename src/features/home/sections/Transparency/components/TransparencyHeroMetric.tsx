import { Stack } from '@/components/layout';
import { Display, Heading, Body } from '@/components/typography';
import type { TransparencyHeroMetricProps } from '../Transparency.types';

export function TransparencyHeroMetric({ value, label, description }: TransparencyHeroMetricProps) {
  return (
    <Stack spacing="content">
      <Display tone="default" className="opacity-90">
        {value}
      </Display>
      <Stack spacing="tight">
        <Heading level={4} variant="editorial">
          {label}
        </Heading>
        <Body tone="muted" measure="narrow">
          {description}
        </Body>
      </Stack>
    </Stack>
  );
}
