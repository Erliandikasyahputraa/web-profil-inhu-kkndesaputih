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
        title="KKN 2026 | Desa Air Putih" 
        description="Program Kuliah Kerja Nyata mahasiswa UIN Sultan Syarif Kasim Riau di Desa Air Putih." 
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
