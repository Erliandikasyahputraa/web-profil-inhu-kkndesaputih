import { EditorialImage } from '@/components/ui';
import { Body } from '@/components/typography';
import type { TransparencyNarrativeProps } from '../Transparency.types';

export function TransparencyNarrative({ image, description, cta }: TransparencyNarrativeProps) {
  return (
    <div className="flex flex-col space-y-12 h-full">
      <EditorialImage 
        src={image.src} 
        alt={image.alt} 
        preset="narrative" 
      />
      <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
        <Body className="text-stone-600 max-w-md text-lg leading-relaxed">
          {description}
        </Body>
        <a 
          href={cta.href}
          className="inline-flex shrink-0 items-center justify-center font-heading font-medium tracking-wide transition-colors h-14 px-10 text-lg border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white"
        >
          {cta.label}
        </a>
      </div>
    </div>
  );
}
