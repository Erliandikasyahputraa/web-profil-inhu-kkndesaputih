import { PageMetadata } from '@/components/common';
import { GovernanceComposition } from '@/features/governance/GovernanceComposition';

export function GovernancePage() {
  return (
    <>
      <PageMetadata 
        title="Pemerintahan Desa | Desa Air Putih" 
        description="Mengenal lebih dekat para pelayan masyarakat yang menjaga harmoni dan pembangunan di Desa Air Putih." 
      />
      <GovernanceComposition />
    </>
  );
}
