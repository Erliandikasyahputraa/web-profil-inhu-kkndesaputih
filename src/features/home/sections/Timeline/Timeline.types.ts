import type { ImageMetadata } from '@/types/content';

export interface TimelineChapterItem {
  id: string;
  year: string;
  title: string;
  description: string;
  image: ImageMetadata;
}

export interface TimelineChapterProps {
  chapter: TimelineChapterItem;
}

export interface TimelineYearProps {
  year: string;
}

export interface TimelineMediaProps {
  image: ImageMetadata;
}

export interface TimelineContentProps {
  title: string;
  description: string;
}
