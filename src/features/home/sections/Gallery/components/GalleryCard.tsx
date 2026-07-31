import { EditorialImage } from '../../../../../components/ui/EditorialImage';
import type { GalleryImageItem } from '../Gallery.types';

export function GalleryCard({ src, alt, span }: GalleryImageItem) {
  const spanClasses = {
    full: 'col-span-1 md:col-span-2 lg:col-span-12',
    portrait: 'col-span-1 md:col-span-1 lg:col-span-5',
    landscape: 'col-span-1 md:col-span-1 lg:col-span-4',
    small: 'col-span-1 md:col-span-2 lg:col-span-3'
  };

  const aspectClasses = {
    full: 'aspect-video lg:aspect-[21/9]',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-video lg:aspect-[4/3]',
    small: 'aspect-square'
  };

  return (
    <div className={`${spanClasses[span]} overflow-hidden bg-stone-100 rounded-lg group`}>
      <EditorialImage 
        src={src} 
        alt={alt} 
        preset="custom" 
        className={`w-full h-full object-cover ${aspectClasses[span]} group-hover:scale-105 transition-transform duration-700 ease-out`}
      />
    </div>
  );
}
