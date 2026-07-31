import { EditorialImage } from '@/components/ui';
import type { ClosingImageProps } from '../CTA.types';

export function ClosingImage({ image }: ClosingImageProps) {
  return (
    <EditorialImage image={image} preset="cta" className="absolute inset-0 w-full h-full" />
  );
}
