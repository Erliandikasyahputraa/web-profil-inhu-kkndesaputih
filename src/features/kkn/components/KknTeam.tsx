import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    name: "Dr. Muslim, S.Ag., S.H., M.Hum",
    role: "Dosen Pembimbing Lapangan",
    image: "/images/kkn/kkn_team_dpl.webp"
  },
  {
    name: "Rufai Asyafi’i",
    role: "Koordes Desa",
    image: "/images/kkn/kkn_team_rufai.webp"
  },
  {
    name: "Putri Halimah Tusyadiah",
    role: "Sekretaris 1",
    image: "/images/kkn/kkn_team_putri.webp"
  },
  {
    name: "Toni Syariffudin",
    role: "Sekretaris 2",
    image: "/images/kkn/kkn_team_toni.webp"
  },
  {
    name: "Inaayah Nazhifah",
    role: "Bendahara",
    image: "/images/kkn/kkn_team_inaayah.webp"
  },
  {
    name: "Deffarul Syahroyza",
    role: "Humas 1",
    image: "/images/kkn/kkn_team_deffarul.webp"
  },
  {
    name: "Alya Fitri Herianti",
    role: "Humas 2",
    image: "/images/kkn/kkn_team_alya.webp"
  },
  {
    name: "Aisyah Ahmad",
    role: "Perlengkapan",
    image: "/images/kkn/kkn_team_aisyah.webp"
  },
  {
    name: "Marsya Sofianti",
    role: "Medkom 1",
    image: "/images/kkn/kkn_team_marsya.webp"
  },
  {
    name: "Silvia",
    role: "Medkom 2",
    image: "/images/kkn/kkn_team_silvi.webp"
  },
  {
    name: "Elsa Yuni Rahmawati",
    role: "Medkom 3",
    image: "/images/kkn/kkn_team_elsa.webp"
  }
];

export function KknTeam() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 260;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
      
      {/* Section Header with Navigation Controls */}
      <div className="flex items-end justify-between mb-8 md:mb-12">
        <div>
          <div className="inline-flex items-center px-3 py-1 bg-[#234A31]/10 text-[#234A31] text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
            TIM KKN 2026
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold">
            Bersama Membangun Desa Air Putih
          </h2>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleScroll('left')}
            className="w-10 h-10 rounded-full border border-stone-300 hover:border-stone-800 bg-white hover:bg-stone-50 text-stone-700 flex items-center justify-center transition-colors shadow-sm"
            aria-label="Previous Member"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="w-10 h-10 rounded-full border border-stone-300 hover:border-stone-800 bg-white hover:bg-stone-50 text-stone-700 flex items-center justify-center transition-colors shadow-sm"
            aria-label="Next Member"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Rail of 11 Members */}
      <div 
        ref={scrollRef}
        className="flex gap-4 md:gap-5 overflow-x-auto pb-6 pt-1 scrollbar-none snap-x snap-mandatory scroll-smooth -mx-4 px-4 md:mx-0 md:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {TEAM_MEMBERS.map((member, idx) => (
          <div 
            key={idx}
            className="bg-white border border-stone-200/90 rounded-2xl p-3 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center shrink-0 w-[160px] sm:w-[180px] md:w-[200px] snap-center group"
          >
            {/* Arched Portrait Container */}
            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#EBE7E0] relative">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Member Details */}
            <h3 className="font-serif text-xs sm:text-sm font-bold text-stone-900 mt-3 leading-snug line-clamp-2 px-1">
              {member.name}
            </h3>
            <p className="text-[10px] sm:text-xs text-stone-500 font-sans mt-0.5 uppercase tracking-wide line-clamp-1">
              {member.role}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
