export interface TransparencyHeroMetricProps {
  value: string;
  label: string;
  description: string;
}

import type { ImageMetadata, LinkMetadata, Statistic } from '@/types/content';

export interface TransparencyMetricItem extends Statistic {
  id: string;
}

export interface TransparencyBreakdownProps {
  metrics: readonly TransparencyMetricItem[];
}

export interface TransparencyNarrativeProps {
  image: ImageMetadata;
  description: string;
  cta: LinkMetadata;
}
