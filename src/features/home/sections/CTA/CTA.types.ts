export interface CTAActionItem {
  label: string;
  href: string;
  primary: boolean;
}

export interface ClosingActionsProps {
  actions: readonly CTAActionItem[];
}

export interface ClosingStatementProps {
  text: string;
  description: string;
}

export interface ClosingImageProps {
  src: string;
  alt: string;
}
