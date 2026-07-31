import { EditorialImage } from '@/components/ui';
import type { HeroMediaProps } from '../Hero.types';

export function HeroMedia({ image }: HeroMediaProps) {
  return (
    <div className="absolute inset-0 z-0">
      <EditorialImage 
        image={image} 
        priority 
        preset="hero" 
        overlay="cinematic"
      />
    </div>
  );
}
