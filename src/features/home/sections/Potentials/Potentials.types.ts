import type { StatItem } from '../../../../../components/ui/EditorialStats';

export interface PotentialItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  stats: readonly StatItem[];
}

export interface PotentialBlockProps extends PotentialItem {
  reverse?: boolean;
}
