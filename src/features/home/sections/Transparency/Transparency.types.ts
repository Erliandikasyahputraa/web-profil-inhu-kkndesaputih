export interface TransparencyHeroMetricProps {
  value: string;
  label: string;
  description: string;
}

export interface TransparencyMetricItem {
  id: string;
  value: string;
  label: string;
}

export interface TransparencyBreakdownProps {
  metrics: readonly TransparencyMetricItem[];
}

export interface TransparencyNarrativeProps {
  image: string;
  imageAlt: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
}
