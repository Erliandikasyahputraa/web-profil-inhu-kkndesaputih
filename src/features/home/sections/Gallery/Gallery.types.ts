import type { ImageMetadata, LinkMetadata } from '@/types/content';

export type GallerySpan = 'full' | 'portrait' | 'landscape' | 'small';

export interface GalleryImageItem {
  id: string;
  image: ImageMetadata;
  span: GallerySpan;
}

export interface GalleryCollageProps {
  images: readonly GalleryImageItem[];
}

export interface GalleryCTAProps {
  cta: LinkMetadata;
}
