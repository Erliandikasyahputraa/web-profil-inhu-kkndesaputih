import type { GalleryCTAProps } from '../Gallery.types';

export function GalleryCTA({ label, href }: GalleryCTAProps) {
  return (
    <div className="mt-24 lg:mt-32 pt-16 border-t border-stone-200 flex justify-center">
      <a 
        href={href}
        className="inline-flex items-center justify-center font-heading font-medium tracking-wide transition-colors h-14 px-10 text-lg border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white"
      >
        {label}
      </a>
    </div>
  );
}
