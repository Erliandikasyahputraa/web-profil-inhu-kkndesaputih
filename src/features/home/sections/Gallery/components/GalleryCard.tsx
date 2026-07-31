import { EditorialImage } from '@/components/ui';
import type { GalleryImageItem } from '../Gallery.types';

export function GalleryCard({ image, span }: GalleryImageItem) {
  const spanClasses = {
    full: 'col-span-1 md:col-span-2 lg:col-span-12',
    portrait: 'col-span-1 md:col-span-1 lg:col-span-5',
    landscape: 'col-span-1 md:col-span-1 lg:col-span-4',
    small: 'col-span-1 md:col-span-2 lg:col-span-3'
  };

  const preset = span === 'full' ? 'gallery-feature' : span === 'small' ? 'gallery-square' : span === 'landscape' ? 'landscape' : 'gallery-portrait';

  return (
    <div className={`${spanClasses[span]} overflow-hidden bg-stone-100 rounded-lg group`}>
      <EditorialImage 
        src={image.src} 
        alt={image.alt} 
        preset={preset} 
        className="group-hover:scale-105 transition-transform duration-700 ease-out"
      />
    </div>
  );
}
