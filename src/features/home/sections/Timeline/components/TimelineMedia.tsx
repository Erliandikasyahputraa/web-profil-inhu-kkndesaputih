import { EditorialImage } from '@/components/ui';
import type { TimelineMediaProps } from '../Timeline.types';

export function TimelineMedia({ image }: TimelineMediaProps) {
  return (
    <div className="w-full">
      <EditorialImage 
        src={image.src} 
        alt={image.alt} 
        preset="story" 
      />
    </div>
  );
}
