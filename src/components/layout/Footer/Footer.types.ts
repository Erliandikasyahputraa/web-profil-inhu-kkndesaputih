import type { LinkMetadata, Quote } from '@/types/content';

export interface FooterLink extends LinkMetadata {}

export interface FooterQuoteProps {
  quote: Quote;
}

export interface FooterNavigationProps {
  about: {
    title: string;
    description: string;
  };
  navigation: {
    title: string;
    links: readonly FooterLink[];
  };
  contact: {
    title: string;
    details: readonly string[];
  };
  socials: {
    title: string;
    links: readonly FooterLink[];
  };
}

export interface FooterBottomProps {
  copyright: string;
  credit: string;
}
