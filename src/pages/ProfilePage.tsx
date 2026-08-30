import { ProfileComposition } from '@/features/profile/ProfileComposition';
import { PageMetadata } from '@/components/common';

export function ProfilePage() {
  return (
    <>
      <PageMetadata 
        title="Profil Desa Air Putih | Sejarah, Geografi & Potensi Wilayah" 
        description="Profil lengkap Desa Air Putih, Kecamatan Lubuk Batu Jaya, Kabupaten Indragiri Hulu, Riau. Meliputi sejarah desa, data kependudukan 4 dusun, pembagian 20 RT/8 RW, serta potensi perkebunan sawit dan UMKM." 
        canonicalPath="/profil"
        breadcrumbs={[{ name: "Profil Desa", path: "/profil" }]}
        keywords="Profil Desa Air Putih, Sejarah Desa Air Putih, Data Desa Air Putih, Geografi Desa Air Putih, Potensi Desa Air Putih, Dusun Desa Air Putih, Penduduk Desa Air Putih, Lubuk Batu Jaya"
        image="/images/profil/peta_administrasi.webp"
      />
      <ProfileComposition />
    </>
  );
}
