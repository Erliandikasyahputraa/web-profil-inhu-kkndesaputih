import { EditorialImage } from '@/components/ui';
import { Caption } from '@/components/typography';
import type { StoryImageProps } from '../Story.types';

export function StoryImage({ image }: StoryImageProps) {
  return (
    <div className="flex flex-col space-y-4 w-full h-full">
      <div className="w-full overflow-hidden">
        <EditorialImage src={image.src} alt={image.alt} preset="story" />
      </div>
      {image.caption && <Caption className="text-right italic border-t border-stone-200 pt-2">{image.caption}</Caption>}
    </div>
  );
}
