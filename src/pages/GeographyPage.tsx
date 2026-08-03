import { PageMetadata } from '@/components/common';
import { GeographyComposition } from '@/features/geography/GeographyComposition';

export function GeographyPage() {
  return (
    <>
      <PageMetadata 
        title="Geografi | Desa Air Putih" 
        description="Jelajahi keindahan alam dan letak geografis Desa Air Putih yang asri di tepi Indragiri." 
      />
      <GeographyComposition />
    </>
  );
}
