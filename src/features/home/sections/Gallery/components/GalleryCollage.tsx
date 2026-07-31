import { Grid } from '@/components/layout';
import { GalleryCard } from './GalleryCard';
import type { GalleryCollageProps } from '../Gallery.types';

export function GalleryCollage({ images }: GalleryCollageProps) {
  return (
    <Grid variant="gallery" spacing="grid" className="mt-16 lg:mt-24">
      {images.map((img) => (
        <GalleryCard key={img.id} {...img} />
      ))}
    </Grid>
  );
}
