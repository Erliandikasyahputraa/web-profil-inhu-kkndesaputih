export type GallerySpan = 'full' | 'portrait' | 'landscape' | 'small';

export interface GalleryImageItem {
  id: string;
  src: string;
  alt: string;
  span: GallerySpan;
}

export interface GalleryCollageProps {
  images: readonly GalleryImageItem[];
}

export interface GalleryCTAProps {
  label: string;
  href: string;
}
