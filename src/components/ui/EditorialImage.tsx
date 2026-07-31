import { useState } from 'react';
import { cn } from '../../lib/utils';

interface EditorialImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  width?: number | string;
  height?: number | string;
  aspectRatio?: 'aspect-auto' | 'aspect-square' | 'aspect-video' | 'aspect-[4/3]' | 'aspect-[3/4]' | 'aspect-[21/9]';
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  className,
  aspectRatio = 'aspect-auto',
  priority = false,
  width,
  height,
  ...props
}: EditorialImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn('relative overflow-hidden bg-stone-100', aspectRatio, className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - fetchpriority is valid HTML but might not be in React types yet
        fetchpriority={priority ? 'high' : 'auto'}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-700 ease-in-out',
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
