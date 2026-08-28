import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ACTIVITIES = [
  {
    id: "01",
    title: "Sosialisasi & Pertemuan Pemuda",
    src: "/images/kkn/kkn_activity_01.webp",
    alt: "Pertemuan mahasiswa KKN bersama pemuda di aula"
  },
  {
    id: "02",
    title: "Silaturahmi & Kunjungan Warga",
    src: "/images/kkn/kkn_activity_03.webp",
    alt: "Interaksi ibu-ibu dan mahasiswa KKN di teras"
  },
  {
    id: "03",
    title: "Edukasi & Belajar Bersama Anak",
    src: "/images/kkn/kkn_activity_10.webp",
    alt: "Mahasiswa KKN bersama anak-anak memegang hasil karya kolase"
  },
  {
    id: "04",
    title: "Gotong Royong & Kebersihan Desa",
    src: "/images/kkn/kkn_activity_08.webp",
    alt: "Dua pemuda bergotong royong membawa perlengkapan"
  },
  {
    id: "05",
    title: "Kreasi & Karya Anak Desa",
    src: "/images/kkn/kkn_activity_11.webp",
    alt: "Pentas seni dan kreasi anak desa"
  }
];

export function KknJejakKegiatan() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const onScroll = () => {
    if (scrollRef.current) {
      const scrollPos = scrollRef.current.scrollLeft;
      const cardWidth = 280;
      const index = Math.round(scrollPos / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), ACTIVITIES.length - 1));
    }
  };

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
      
      {/* Section Header with Navigation Controls */}
      <div className="flex items-end justify-between mb-8 md:mb-12">
        <div>
          <div className="inline-flex items-center px-3 py-1 bg-[#234A31]/10 text-[#234A31] text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
            JEJAK KEGIATAN
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold">
            Langkah Kecil, Dampak Besar
          </h2>
        </div>

        {/* Arrow Navigation */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleScroll('left')}
            className="w-10 h-10 rounded-full border border-stone-300 hover:border-stone-800 bg-white hover:bg-stone-50 text-stone-700 flex items-center justify-center transition-colors shadow-sm"
            aria-label="Previous Activity"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="w-10 h-10 rounded-full border border-stone-300 hover:border-stone-800 bg-white hover:bg-stone-50 text-stone-700 flex items-center justify-center transition-colors shadow-sm"
            aria-label="Next Activity"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Story Rail (Mobile Swipe & Desktop Grid/Scroll) */}
      <div 
        ref={scrollRef}
        onScroll={onScroll}
        className="flex gap-4 md:gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth -mx-4 px-4 md:mx-0 md:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ACTIVITIES.map((activity) => (
          <div 
            key={activity.id}
            className="flex flex-col items-center text-center shrink-0 w-[240px] sm:w-[260px] md:w-[280px] lg:w-[calc(20%-1.2rem)] snap-center group"
          >
            {/* Card Image Container with Floating Number Badge */}
            <div className="w-full relative mb-6">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-stone-200 border border-stone-200/90 shadow-sm group-hover:shadow-md transition-shadow">
                <img 
                  src={activity.src} 
                  alt={activity.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating Circular Number Badge */}
              <div className="w-8 h-8 rounded-full bg-white border border-stone-300 text-stone-900 font-mono font-bold text-xs flex items-center justify-center shadow-md absolute -bottom-4 left-1/2 -translate-x-1/2 z-10">
                {activity.id}
              </div>
            </div>

            {/* Caption */}
            <h3 className="font-serif text-sm md:text-base font-bold text-stone-900 leading-snug px-2">
              {activity.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Mobile Pagination Indicator Dots */}
      <div className="flex justify-center items-center gap-1.5 mt-2 md:hidden">
        {ACTIVITIES.map((_, i) => (
          <span 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === i ? 'w-5 bg-[#234A31]' : 'w-1.5 bg-stone-300'
            }`}
          />
        ))}
      </div>

    </section>
  );
}
