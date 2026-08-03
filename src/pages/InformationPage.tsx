import { PageMetadata } from '@/components/common';
import { InformationComposition } from '@/features/information/InformationComposition';

export function InformationPage() {
  return (
    <>
      <PageMetadata 
        title="Informasi Desa | Desa Air Putih" 
        description="Informasi penting, pengumuman, dan layanan bagi masyarakat Desa Air Putih." 
      />
      <InformationComposition />
    </>
  );
}
