import type { ImageMetadata, Statistic } from '@/types/content';

export interface PotentialItem {
  id: string;
  title: string;
  description: string;
  image: ImageMetadata;
  stats: readonly (Statistic & { id: string })[];
}

export interface PotentialBlockProps extends PotentialItem {
  reverse?: boolean;
}
