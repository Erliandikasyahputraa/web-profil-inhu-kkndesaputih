import { PageMetadata } from '@/components/common';
import { GalleryComposition } from '../features/gallery';

export function GalleryPage() {
  return (
    <>
      <PageMetadata 
        title="Galeri Desa | Desa Air Putih" 
        description="Arsip visual kehidupan dan pesona Desa Air Putih di tepi Indragiri." 
      />
      <GalleryComposition />
    </>
  );
}
