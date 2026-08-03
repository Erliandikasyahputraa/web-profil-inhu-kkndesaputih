import { ProfileComposition } from '@/features/profile/ProfileComposition';
import { PageMetadata } from '@/components/common';

export function ProfilePage() {
  return (
    <>
      <PageMetadata 
        title="Profil Desa | Desa Air Putih" 
        description="Mengenal lebih dalam identitas, nilai-nilai, dan keseharian masyarakat Desa Air Putih." 
      />
      <ProfileComposition />
    </>
  );
}
