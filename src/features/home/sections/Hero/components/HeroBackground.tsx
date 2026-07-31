import { EditorialImage } from '../../../../../components/ui/EditorialImage';

interface HeroBackgroundProps {
  imageSrc: string;
}

export function HeroBackground({ imageSrc }: HeroBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0">
      <EditorialImage
        src={imageSrc}
        alt="Desa Air Putih Aerial View"
        priority
        preset="hero"
      />
      <div className="absolute inset-0 bg-stone-900/30 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
    </div>
  );
}
