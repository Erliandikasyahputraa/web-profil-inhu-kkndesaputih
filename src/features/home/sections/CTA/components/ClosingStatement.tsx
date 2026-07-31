import { Stack } from '@/components/layout';
import { Display, Body } from '@/components/typography';
import type { ClosingStatementProps } from '../CTA.types';

export function ClosingStatement({ text, description }: ClosingStatementProps) {
  return (
    <Stack spacing="content" className="items-center max-w-5xl mx-auto text-center">
      <Display tone="inverse" className="drop-shadow-sm">
        {text}
      </Display>
      <Body tone="inverse" measure="wide" className="text-lg md:text-2xl drop-shadow-sm">
        {description}
      </Body>
    </Stack>
  );
}
