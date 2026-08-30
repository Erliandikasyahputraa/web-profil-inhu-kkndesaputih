import { PageMetadata } from '@/components/common';
import { KknHero } from '../features/kkn/components/KknHero';
import { KknAbout } from '../features/kkn/components/KknAbout';
import { KknPrograms } from '../features/kkn/components/KknPrograms';
import { KknJejakKegiatan } from '../features/kkn/components/KknJejakKegiatan';
import { KknTeam } from '../features/kkn/components/KknTeam';
import { KknClosing } from '../features/kkn/components/KknClosing';

export function KknPage() {
  return (
    <>
      <PageMetadata 
        title="KKN Tematik 2026 Desa Air Putih | UIN Sultan Syarif Kasim Riau" 
        description="Laporan dan dokumentasi resmi program Kuliah Kerja Nyata (KKN) Tematik 2026 mahasiswa UIN Sultan Syarif Kasim Riau di Desa Air Putih, Kecamatan Lubuk Batu Jaya, Kabupaten Indragiri Hulu, Riau." 
        canonicalPath="/kkn"
        breadcrumbs={[{ name: "KKN 2026", path: "/kkn" }]}
        keywords="KKN Desa Air Putih, KKN Tematik Desa Air Putih, KKN UIN Suska Desa Air Putih, Kegiatan KKN Desa Air Putih, Program Kerja KKN Desa Air Putih, Lubuk Batu Jaya"
        image="/images/kkn/kkn_hero.webp"
      />
      <main className="flex-1 flex flex-col pt-14 md:pt-16 bg-[#FAF8F5] min-h-screen">
        <KknHero />
        <KknAbout />
        <KknJejakKegiatan />
        <KknPrograms />
        <KknTeam />
        <KknClosing />
      </main>
    </>
  );
}
