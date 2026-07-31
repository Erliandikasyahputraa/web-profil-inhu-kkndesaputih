import type { GalleryCTAProps } from '../Gallery.types';

export function GalleryCTA({ cta }: GalleryCTAProps) {
  return (
    <div className="mt-24 lg:mt-32 pt-16 border-t border-stone-200 flex justify-center">
      <a 
        href={cta.href}
        className="inline-flex items-center justify-center font-heading font-medium tracking-wide transition-colors h-14 px-10 text-lg border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white"
      >
        {cta.label}
      </a>
    </div>
  );
}
