import { EditorialImage } from '@/components/ui';
import type { HeroMediaProps } from '../Hero.types';

export function HeroMedia({ image }: HeroMediaProps) {
  return (
    <div className="absolute inset-0 z-0">
      <EditorialImage 
        src={image.src} 
        alt="Desa Air Putih Aerial View" 
        priority 
        preset="hero" 
        overlay="cinematic"
      />
    </div>
  );
}
