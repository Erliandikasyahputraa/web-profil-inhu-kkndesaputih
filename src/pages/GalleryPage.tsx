import { PageMetadata } from '@/components/common';
import { GalleryComposition } from '../features/gallery';

export function GalleryPage() {
  return (
    <>
      <PageMetadata 
        title="Galeri Desa Air Putih | Arsip Dokumentasi & Kegiatan Warga" 
        description="Koleksi foto dan arsip dokumentasi resmi Desa Air Putih, Kecamatan Lubuk Batu Jaya, Kabupaten Indragiri Hulu, Riau. Potret kebersamaan masyarakat, gotong royong, kegiatan sosial, dan keasrian desa." 
        canonicalPath="/galeri"
        breadcrumbs={[{ name: "Galeri Desa", path: "/galeri" }]}
        keywords="Galeri Desa Air Putih, Foto Desa Air Putih, Dokumentasi Desa Air Putih, Kegiatan Desa Air Putih, Dokumentasi KKN Desa Air Putih, Lubuk Batu Jaya"
        image="/images/gallery/galeri_hero.webp"
      />
      <GalleryComposition />
    </>
  );
}
