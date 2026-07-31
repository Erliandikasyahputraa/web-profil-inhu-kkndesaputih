import { useState } from 'react';
import { cn } from '../../lib/utils';

export type ImagePreset = 'hero' | 'story' | 'landscape' | 'portrait' | 'gallery' | 'thumbnail' | 'custom';
export type ImageOverlay = 'none' | 'dark' | 'cinematic' | 'light';

interface EditorialImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  preset?: ImagePreset;
  aspectRatio?: 'aspect-auto' | 'aspect-square' | 'aspect-video' | 'aspect-[4/3]' | 'aspect-[3/4]' | 'aspect-[21/9]' | 'aspect-[16/9]';
  priority?: boolean;
  overlay?: ImageOverlay;
}

export function EditorialImage({
  src,
  alt,
  className,
  preset = 'custom',
  aspectRatio = 'aspect-auto',
  priority = false,
  overlay = 'none',
  width,
  height,
  ...props
}: EditorialImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const presetClasses = {
    hero: 'w-full h-full object-cover',
    story: 'w-full h-full object-cover min-h-[400px] lg:min-h-[700px] rounded-lg',
    landscape: 'w-full object-cover aspect-video md:aspect-[21/9] lg:aspect-[3/1] rounded-none',
    portrait: 'w-full object-cover aspect-[3/4]',
    gallery: 'w-full h-full object-cover hover:scale-105 transition-transform duration-700',
    thumbnail: 'w-full object-cover aspect-square rounded-md',
    custom: 'w-full h-full object-cover',
  };

  const overlayClasses = {
    none: '',
    dark: 'absolute inset-0 bg-stone-900/30 mix-blend-multiply',
    cinematic: 'absolute inset-0 bg-stone-950/40 mix-blend-multiply bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent',
    light: 'absolute inset-0 bg-white/10',
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
      {overlay !== 'none' && <div className={cn(overlayClasses[overlay])} />}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-stone-200" aria-hidden="true" />
      )}
    </div>
  );
}
