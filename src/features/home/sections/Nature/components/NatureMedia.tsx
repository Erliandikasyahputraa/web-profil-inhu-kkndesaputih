import { EditorialImage } from '@/components/ui';
import type { NatureMediaProps } from '../Nature.types';

export function NatureMedia({ image }: NatureMediaProps) {
  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2">
      <EditorialImage 
        image={image} 
        preset="landscape" 
      />
    </div>
  );
}
