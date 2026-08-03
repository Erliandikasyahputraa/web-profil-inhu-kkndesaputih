import { PageMetadata } from '@/components/common';
import { PotentialsComposition } from '@/features/potentials/PotentialsComposition';

export function PotentialsPage() {
  return (
    <>
      <PageMetadata 
        title="Potensi Desa | Desa Air Putih" 
        description="Jelajahi potensi alam dan sumber daya manusia yang menjadi roda penggerak ekonomi Desa Air Putih." 
      />
      <PotentialsComposition />
    </>
  );
}
