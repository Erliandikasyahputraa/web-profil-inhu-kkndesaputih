import { EditorialImage } from '../../../../../components/ui/EditorialImage';
import type { StoryImageProps } from '../Story.types';

export function StoryImage({ imageSrc, imageAlt }: StoryImageProps) {
  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[600px] rounded-lg overflow-hidden">
      <EditorialImage 
        src={imageSrc} 
        alt={imageAlt}
        preset="portrait"
      />
    </div>
  );
}
