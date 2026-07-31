export interface StoryParagraph {
  id: string;
  text: string;
}

export interface StoryContentProps {
  title: string;
  lead: string;
  paragraphs: readonly StoryParagraph[];
}

import type { ImageMetadata } from '@/types/content';

export interface StoryImageProps {
  image: ImageMetadata;
}

export interface StoryMetaProps {
  label: string;
  value: string;
}
