export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterQuoteProps {
  quote: string;
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
