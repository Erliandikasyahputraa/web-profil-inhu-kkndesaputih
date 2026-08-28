import { Link } from 'react-router-dom';
import { Compass, Landmark, GraduationCap, Image, ArrowRight } from 'lucide-react';
import { ROUTES } from '@/constants/routes';

const ACCESS_CARDS = [
  {
    icon: Compass,
    title: "Profil Desa",
    description: "Kenali lebih dekat Desa Air Putih.",
    to: ROUTES.PROFIL
  },
  {
    icon: Landmark,
    title: "Pemerintahan",
    description: "Struktur organisasi dan pelayanan desa.",
    to: ROUTES.PEMERINTAHAN
  },
  {
    icon: GraduationCap,
    title: "KKN Tematik",
    description: "Program pengabdian mahasiswa.",
    to: ROUTES.KKN
  },
  {
    icon: Image,
    title: "Galeri Desa",
    description: "Dokumentasi kegiatan dan potret desa.",
    to: ROUTES.GALERI
  }
];

export function HomeQuickAccess() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-16 md:mb-24">
      
      <div className="text-center mb-8">
        <span className="text-xs uppercase tracking-[0.2em] text-[#234A31] font-mono font-bold">
          AKSES CEPAT
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {ACCESS_CARDS.map((card, idx) => {
          const IconComp = card.icon;
          return (
            <Link
              key={idx}
              to={card.to}
              className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#234A31]/40 transition-all flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-[#234A31]/10 text-[#234A31] group-hover:bg-[#234A31] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                <IconComp className="w-6 h-6" />
              </div>

              <h3 className="font-serif text-lg font-bold text-stone-900 mb-1.5 group-hover:text-[#234A31] transition-colors">
                {card.title}
              </h3>

              <p className="text-xs text-stone-500 font-sans leading-relaxed mb-6">
                {card.description}
              </p>

              <div className="mt-auto inline-flex items-center gap-1 text-[#234A31] text-xs font-semibold group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          );
        })}
      </div>

    </section>
  );
}
