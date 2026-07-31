export interface NatureParagraph {
  id: string;
  text: string;
}

export interface NatureStat {
  id: string;
  value: string;
  label: string;
}

export interface NatureContentProps {
  paragraphs: readonly NatureParagraph[];
}

export interface NatureMediaProps {
  imageSrc: string;
  imageAlt: string;
}

export interface NatureQuoteProps {
  text: string;
  author: string;
}

export interface NatureStatsProps {
  stats: readonly NatureStat[];
}
