import { EditorialImage } from '@/components';
import type { NatureMediaProps } from '../Nature.types';

export function NatureMedia({ imageSrc, imageAlt }: NatureMediaProps) {
  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2">
      <EditorialImage 
        src={imageSrc} 
        alt={imageAlt} 
        preset="landscape" 
      />
    </div>
  );
}
