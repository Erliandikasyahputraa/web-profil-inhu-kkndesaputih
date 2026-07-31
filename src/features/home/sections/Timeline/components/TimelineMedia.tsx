import { EditorialImage } from '@/components';
import type { TimelineMediaProps } from '../Timeline.types';

export function TimelineMedia({ src, alt }: TimelineMediaProps) {
  return (
    <div className="w-full">
      <EditorialImage 
        src={src} 
        alt={alt} 
        preset="story" 
      />
    </div>
  );
}
