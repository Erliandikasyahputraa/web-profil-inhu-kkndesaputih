import { useState } from 'react';
import { cn } from '@/lib/utils';

export type ImagePreset = 
  | 'hero' 
  | 'story' 
  | 'portrait' 
  | 'landscape' 
  | 'gallery-feature' 
  | 'gallery-square' 
  | 'gallery-portrait' 
  | 'cta' 
  | 'thumbnail' 
  | 'narrative' 
  | 'custom';

export type ImageVariant = 'default' | 'rounded' | 'edge' | 'soft';
export type ImageOverlay = 'none' | 'dark' | 'cinematic' | 'light';

interface EditorialImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  preset?: ImagePreset;
  variant?: ImageVariant;
  aspectRatio?: string; // Escape hatch
  priority?: boolean; // Override if needed
  overlay?: ImageOverlay;
}

export function EditorialImage({
  src,
  alt,
  className,
  preset = 'custom',
  variant = 'default',
  aspectRatio,
  priority,
  overlay = 'none',
  width,
  height,
  ...props
}: EditorialImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Configuration for each preset
  const presetConfig: Record<ImagePreset, { 
    aspectClasses: string; 
    objectFit: string;
    loading: 'lazy' | 'eager';
    fetchPriority: 'high' | 'auto' | 'low';
    sizes?: string;
  }> = {
    hero: {
      aspectClasses: 'w-full h-full', // Handled by wrapper
      objectFit: 'object-cover',
      loading: 'eager',
      fetchPriority: 'high',
      sizes: '100vw',
    },
    story: {
      aspectClasses: 'w-full min-h-[400px] lg:min-h-[700px]',
      objectFit: 'object-cover',
      loading: 'lazy',
      fetchPriority: 'auto',
      sizes: '(min-width: 1024px) 50vw, 100vw',
    },
    landscape: {
      aspectClasses: 'w-full aspect-[16/9]',
      objectFit: 'object-cover',
      loading: 'lazy',
      fetchPriority: 'auto',
      sizes: '(min-width: 1024px) 50vw, 100vw',
    },
    portrait: {
      aspectClasses: 'w-full aspect-[3/4]',
      objectFit: 'object-cover',
      loading: 'lazy',
      fetchPriority: 'auto',
      sizes: '(min-width: 1024px) 33vw, 100vw',
    },
    'gallery-feature': {
      aspectClasses: 'w-full aspect-[21/9]',
      objectFit: 'object-cover',
      loading: 'lazy',
      fetchPriority: 'auto',
      sizes: '100vw',
    },
    'gallery-square': {
      aspectClasses: 'w-full aspect-square',
      objectFit: 'object-cover',
      loading: 'lazy',
      fetchPriority: 'auto',
      sizes: '(min-width: 768px) 50vw, 100vw',
    },
    'gallery-portrait': {
      aspectClasses: 'w-full aspect-[3/4]',
      objectFit: 'object-cover',
      loading: 'lazy',
      fetchPriority: 'auto',
      sizes: '(min-width: 768px) 33vw, 100vw',
    },
    cta: {
      aspectClasses: 'w-full aspect-[4/3] md:aspect-[21/9] lg:aspect-[3/1]',
      objectFit: 'object-cover',
      loading: 'lazy',
      fetchPriority: 'auto',
      sizes: '100vw',
    },
    thumbnail: {
      aspectClasses: 'w-full aspect-square',
      objectFit: 'object-cover',
      loading: 'lazy',
      fetchPriority: 'auto',
      sizes: '25vw',
    },
    narrative: {
      aspectClasses: 'w-full aspect-[4/5]',
      objectFit: 'object-cover',
      loading: 'lazy',
      fetchPriority: 'auto',
      sizes: '(min-width: 1024px) 50vw, 100vw',
    },
    custom: {
      aspectClasses: 'w-full h-full',
      objectFit: 'object-cover',
      loading: 'lazy',
      fetchPriority: 'auto',
    }
  };

  const variantClasses: Record<ImageVariant, string> = {
    default: 'rounded-none',
    rounded: 'rounded-2xl',
    edge: 'rounded-none',
    soft: 'rounded-lg',
  };

  const overlayClasses = {
    none: '',
    dark: 'absolute inset-0 bg-stone-900/30 mix-blend-multiply',
    cinematic: 'absolute inset-0 bg-stone-950/40 mix-blend-multiply bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent',
    light: 'absolute inset-0 bg-white/10',
  };

  const config = presetConfig[preset];
  const finalAspectRatio = aspectRatio ? aspectRatio : config.aspectClasses;
  const finalLoading = priority !== undefined ? (priority ? 'eager' : 'lazy') : config.loading;
  const finalFetchPriority = priority !== undefined ? (priority ? 'high' : 'auto') : config.fetchPriority;

  return (
    <div className={cn('relative overflow-hidden bg-stone-100', variantClasses[variant], className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={finalLoading}
        decoding="async"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fetchpriority={finalFetchPriority}
        sizes={config.sizes}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          finalAspectRatio,
          config.objectFit,
          'transition-opacity duration-700 ease-in-out',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        {...props}
      />
      {overlay !== 'none' && <div className={cn(overlayClasses[overlay], 'pointer-events-none')} />}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-stone-200 pointer-events-none" aria-hidden="true" />
      )}
    </div>
  );
}
