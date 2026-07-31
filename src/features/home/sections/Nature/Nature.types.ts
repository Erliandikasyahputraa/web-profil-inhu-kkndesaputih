export interface NatureParagraph {
  id: string;
  text: string;
}

import type { ImageMetadata, Statistic, Quote } from '@/types/content';

export interface NatureStat extends Statistic {
  id: string;
}

export interface NatureContentProps {
  paragraphs: readonly NatureParagraph[];
}

export interface NatureMediaProps {
  image: ImageMetadata;
}

export interface NatureQuoteProps {
  quote: Quote;
}

export interface NatureStatsProps {
  stats: readonly NatureStat[];
}
