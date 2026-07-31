import { EditorialImage } from '@/components/ui';
import type { HeroMediaProps } from '../Hero.types';

export function HeroMedia({ imageSrc }: HeroMediaProps) {
  return (
    <div className="absolute inset-0 z-0">
      <EditorialImage 
        src={imageSrc} 
        alt="Desa Air Putih Aerial View" 
        priority 
        preset="hero" 
        overlay="cinematic"
      />
    </div>
  );
}
