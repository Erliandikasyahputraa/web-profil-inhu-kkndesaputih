import { Stack, Cluster } from '@/components/layout';
import { EditorialImage } from '@/components/ui';
import { Body } from '@/components/typography';
import type { TransparencyNarrativeProps } from '../Transparency.types';

export function TransparencyNarrative({ image, description, cta }: TransparencyNarrativeProps) {
  return (
    <Stack spacing="section" className="h-full">
      <EditorialImage 
        image={image} 
        preset="narrative" 
        variant="soft" 
      />
      <Cluster spacing="content" align="start" justify="between" className="flex-col md:flex-row">
        <Body tone="muted" measure="narrow" className="text-lg">
          {description}
        </Body>
        <a 
          href={cta.href}
          className="inline-flex shrink-0 items-center justify-center font-heading font-medium tracking-wide transition-colors h-14 px-10 text-lg border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white"
        >
          {cta.label}
        </a>
      </Cluster>
    </Stack>
  );
}
