import { EditorialImage } from '@/components/ui';
import type { TimelineMediaProps } from '../Timeline.types';

export function TimelineMedia({ image }: TimelineMediaProps) {
  return (
    <div className="w-full">
      <EditorialImage 
        image={image} 
        preset="story" 
        variant="rounded"
      />
    </div>
  );
}
