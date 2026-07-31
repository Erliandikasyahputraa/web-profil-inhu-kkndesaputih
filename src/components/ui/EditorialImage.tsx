import { useState } from 'react';
import { cn } from '../../lib/utils';

interface EditorialImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string; // Strictly required
  width?: number | string;
  height?: number | string;
  aspectRatio?: string;
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  className,
  aspectRatio = 'aspect-auto',
  priority = false,
  ...props
}: EditorialImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn('relative overflow-hidden bg-stone-100', aspectRatio, className)}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
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
