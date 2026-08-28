import { Sprout, Trees, Fish, Landmark, Users } from 'lucide-react';

const POTENSI_LIST = [
  {
    icon: Sprout,
    title: "Pertanian",
    description: "Sektor utama dengan komoditas kelapa sawit, palawija, dan aneka tanaman pekarangan mandiri.",
    image: "/images/profil/potensi_pertanian.webp",
    alt: "Pertanian Desa Air Putih"
  },
  {
    icon: Trees,
    title: "Perkebunan",
    description: "Pengelolaan kebun kelapa sawit seluas 1.292 Ha dan karet sebagai penopang ekonomi keluarga.",
    image: "/images/profil/potensi_perkebunan.webp",
    alt: "Perkebunan Desa Air Putih"
  },
  {
    icon: Fish,
    title: "Perikanan",
    description: "Pemanfaatan kolam ikan air tawar keluarga untuk ketahanan pangan dan nilai tambah ekonomi.",
    image: "/images/profil/potensi_perikanan.webp",
    alt: "Perikanan Air Tawar Desa Air Putih"
  },
  {
    icon: Landmark,
    title: "Pariwisata Alam",
    description: "Keasrian lanskap alam pedesaan dan suasana guyub yang menghadirkan ketenangan bagi pendatang.",
    image: "/images/profil/potensi_pariwisata.webp",
    alt: "Pariwisata Alam Desa Air Putih"
  },
  {
    icon: Users,
    title: "Gotong Royong",
    description: "Nilai luhur kebersamaan, toleransi, dan kerja bakti yang menjadi kekuatan penggerak pembangunan.",
    image: "/images/profil/potensi_gotong_royong.webp",
    alt: "Gotong Royong Warga Desa"
  }
];

export function ProfilePotensi() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
      
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-4 h-0.5 bg-[#234A31]"></span>
        <span className="text-xs uppercase tracking-[0.2em] text-[#234A31] font-mono font-bold">
          Potensi & Keunggulan Desa
        </span>
      </div>

      <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mb-8">
        Pilar Kemandirian & Kehidupan Desa
      </h2>

      {/* 5-Column Editorial Cards (Desktop: 5 Columns, Mobile: 2-Column / Scroll) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
        {POTENSI_LIST.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div 
              key={idx}
              className="bg-white border border-stone-200/90 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              {/* Image Container with Icon Badge */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-stone-200 relative mb-4">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="w-8 h-8 rounded-full bg-[#234A31] text-white flex items-center justify-center shadow-md absolute bottom-2 left-2 z-10">
                  <IconComp className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-base md:text-lg font-bold text-stone-900 mb-1.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed font-sans mt-auto">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
}
