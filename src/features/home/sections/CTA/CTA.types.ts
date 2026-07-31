import type { ImageMetadata, LinkMetadata } from '@/types/content';

export interface CTAActionItem extends LinkMetadata {
  primary: boolean;
}

export interface ClosingActionsProps {
  actions: readonly CTAActionItem[];
}

export interface ClosingStatementProps {
  text: string;
  description: string;
}

export interface ClosingImageProps {
  image: ImageMetadata;
}
