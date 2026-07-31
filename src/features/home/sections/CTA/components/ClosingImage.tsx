import type { ClosingImageProps } from '../CTA.types';

export function ClosingImage({ image }: ClosingImageProps) {
  return (
    <img 
      src={image.src} 
      alt={image.alt} 
      className="absolute inset-0 w-full h-full object-cover" 
      loading="lazy" 
    />
  );
}
