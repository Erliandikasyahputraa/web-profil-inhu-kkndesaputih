export interface HeroContentProps {
  title: string;
  description: string;
}

import type { LinkMetadata, ImageMetadata } from '@/types/content';

export interface HeroActionsProps {
  primary: LinkMetadata;
  secondary: LinkMetadata;
}

export interface HeroMediaProps {
  image: ImageMetadata;
}
