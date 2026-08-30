import { PageMetadata } from '@/components/common';
import { HomeComposition } from '../features/home';

export function HomePage() {
  return (
    <>
      <PageMetadata 
        title="Desa Air Putih | Kecamatan Lubuk Batu Jaya, Kabupaten Indragiri Hulu" 
        description="Website resmi Desa Air Putih, Kecamatan Lubuk Batu Jaya, Kabupaten Indragiri Hulu, Riau. Informasi profil desa, tata kelola pemerintahan, pelayanan administrasi warga, KKN, dan galeri dokumentasi kegiatan."
        canonicalPath="/"
        keywords="Desa Air Putih, Desa Air Putih Riau, Desa Air Putih Indragiri Hulu, Desa Air Putih Lubuk Batu Jaya, Pemerintah Desa Air Putih, Kantor Desa Air Putih, Profil Desa Air Putih, KKN Desa Air Putih, Lubuk Batu Jaya"
        image="/images/home/home_hero_01.webp"
      />
      <HomeComposition />
    </>
  );
}
