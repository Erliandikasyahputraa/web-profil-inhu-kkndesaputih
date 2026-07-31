import type { ClosingImageProps } from '../CTA.types';

export function ClosingImage({ src, alt }: ClosingImageProps) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className="absolute inset-0 w-full h-full object-cover" 
      loading="lazy" 
    />
  );
}
