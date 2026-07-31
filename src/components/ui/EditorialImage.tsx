import { useState } from 'react';
import { cn } from '../../lib/utils';

export type ImagePreset = 'hero' | 'portrait' | 'gallery' | 'thumbnail' | 'custom';

interface EditorialImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  preset?: ImagePreset;
  aspectRatio?: 'aspect-auto' | 'aspect-square' | 'aspect-video' | 'aspect-[4/3]' | 'aspect-[3/4]' | 'aspect-[21/9]' | 'aspect-[16/9]';
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  className,
  preset = 'custom',
  aspectRatio = 'aspect-auto',
  priority = false,
  width,
  height,
  ...props
}: EditorialImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const presetClasses = {
    hero: 'w-full h-full object-cover',
    portrait: 'w-full object-cover aspect-[3/4]',
    gallery: 'w-full h-full object-cover hover:scale-105 transition-transform duration-700',
    thumbnail: 'w-full object-cover aspect-square rounded-md',
    custom: 'w-full h-full object-cover',
  };

  return (
    <div className={cn('relative overflow-hidden bg-stone-100', preset !== 'portrait' && preset !== 'thumbnail' ? aspectRatio : '', className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fetchpriority={priority ? 'high' : 'auto'}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          presetClasses[preset],
          'transition-opacity duration-700 ease-in-out',
          isLoaded ? 'opacity-100' : 'opacity-0',
        )}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-stone-200" aria-hidden="true" />
      )}
    </div>
  );
}
