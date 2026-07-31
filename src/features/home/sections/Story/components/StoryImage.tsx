import { EditorialImage } from '@/components';
import { Caption } from '@/components';
import type { StoryImageProps } from '../Story.types';

export function StoryImage({ imageSrc, imageAlt, caption }: StoryImageProps) {
  return (
    <div className="flex flex-col space-y-4 w-full h-full">
      <div className="w-full overflow-hidden">
        <EditorialImage src={imageSrc} alt={imageAlt} preset="story" />
      </div>
      {caption && <Caption className="text-right italic border-t border-stone-200 pt-2">{caption}</Caption>}
    </div>
  );
}
