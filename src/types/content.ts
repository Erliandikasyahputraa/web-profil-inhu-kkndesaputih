export interface ImageMetadata {
  src: string;
  alt: string;
  caption?: string;
  location?: string;
  photographer?: string;
  date?: string;
  credit?: string;
}

export interface LinkMetadata {
  label: string;
  href: string;
  external?: boolean;
}

export interface Quote {
  text: string;
  author?: string;
  source?: string;
}

export interface Statistic {
  label: string;
  value: string;
  description?: string;
}

export interface Person {
  name: string;
  role: string;
  image?: ImageMetadata;
}

export interface Organization {
  name: string;
  members: Person[];
}
