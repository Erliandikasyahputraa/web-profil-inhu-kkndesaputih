import { GalleryCard } from './GalleryCard';
import type { GalleryCollageProps } from '../Gallery.types';

export function GalleryCollage({ images }: GalleryCollageProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 mt-16 lg:mt-24">
      {images.map((img) => (
        <GalleryCard key={img.id} {...img} />
      ))}
    </div>
  );
}
