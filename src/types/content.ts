export interface ImageMetadata {
  id?: string;
  src: string;
  alt: string;
  caption?: string;
  location?: string;
  photographer?: string;
  date?: string;
  credit?: string;
  width?: number;
  height?: number;
}

export interface LinkMetadata {
  id?: string;
  label: string;
  href: string;
  external?: boolean;
}

export interface CTA extends LinkMetadata {
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: string;
}

export interface Callout {
  id?: string;
  content: string;
  title?: string;
  source?: string;
}

export interface Statistic {
  id?: string;
  label: string;
  value: string | number;
  description?: string;
}

export interface Person {
  id?: string;
  name: string;
  role: string;
  image?: ImageMetadata;
}

export interface Organization {
  id?: string;
  name: string;
  members: Person[];
}

export interface SeoMetadata {
  title: string;
  description: string;
  canonical?: string;
  image?: ImageMetadata;
  keywords?: string[];
  noIndex?: boolean;
}
