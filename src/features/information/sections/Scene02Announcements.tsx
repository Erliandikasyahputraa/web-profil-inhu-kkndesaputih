import { Section, EditorialImage } from '@/components/ui';

const announcements = [
  {
    date: '20 MEI 2024',
    title: 'Upacara Peringatan Hari Lahir Pancasila',
    excerpt: 'Pemerintah Desa Air Putih akan melaksanakan upacara peringatan Hari Lahir Pancasila...',
    image: '/images/gallery/editorial_documentary_photograph_of_a_community_gathering_in_desa_air_putih.png'
  },
  {
    date: '15 MEI 2024',
    title: 'Gotong Royong Kebersihan Lingkungan Desa',
    excerpt: 'Mari bersama menjaga kebersihan lingkungan desa kita tercinta pada hari Minggu, 19 Mei 2024...',
    image: '/images/potentials/editorial_documentary_photograph_of_the_harvest_season_in_desa_air_putih_riau.png'
  },
  {
    date: '10 MEI 2024',
    title: 'Pelayanan Administrasi Desa',
    excerpt: 'Informasi terkait pelayanan administrasi desa selama bulan Ramadhan dan perubahan jadwal operasional...',
    image: '/images/gallery/editorial_documentary_photograph_of_a_village_discussion_in_desa_air_putih_riau.png'
  }
];

export function Scene02Announcements() {
  return (
    <Section variant="default" spacing="none" className="bg-[#F9F8F6] py-32 px-6">
      <div className="max-w-7xl mx-auto w-full flex flex-col">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="flex flex-col max-w-sm">
            <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-6">
              01 — PENGUMUMAN TERKINI
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 leading-[1.2] mb-6 mix-blend-multiply">
              Pengumuman Terbaru
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Dapatkan informasi terbaru mengenai kegiatan, program, dan hal penting lainnya yang ada di desa.
            </p>
          </div>
          
          <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.1em] text-stone-900 font-bold hover:text-stone-500 transition-colors pb-2 border-b border-stone-900 hover:border-stone-500 w-fit">
            LIHAT SEMUA PENGUMUMAN
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 ml-1">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Editorial Announcement Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {announcements.map((item, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer">
              <div className="w-full aspect-[4/3] md:aspect-[3/2] overflow-hidden mb-6 bg-stone-200">
                <EditorialImage 
                  image={{ src: item.image, alt: item.title }}
                  preset="custom"
                  overlay="none"
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 sepia-[0.2] group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <p className="text-[9px] uppercase tracking-[0.1em] text-stone-500 font-bold mb-3">
                  {item.date}
                </p>
                <h3 className="font-serif text-xl text-stone-900 leading-[1.3] mb-4 pr-4 group-hover:text-stone-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed mb-6">
                  {item.excerpt}
                </p>
                <div className="mt-auto flex items-center text-[9px] uppercase tracking-wider text-stone-900 font-bold group-hover:text-stone-500 transition-colors">
                  BACA SELENGKAPNYA
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}
