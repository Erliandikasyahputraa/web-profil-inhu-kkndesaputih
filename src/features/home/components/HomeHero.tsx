import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ROUTES } from '@/constants/routes';

export function HomeHero() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 pt-4 md:pt-8 mb-12 md:mb-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center relative min-h-[460px] lg:min-h-[520px]">
        
        {/* Left Column: Heading, Subtitle & CTA */}
        <div className="md:col-span-6 lg:col-span-6 flex flex-col items-start z-10 pr-0 md:pr-4">
          
          <span className="text-xs uppercase tracking-[0.2em] text-stone-500 font-mono font-bold mb-3">
            SELAMAT DATANG DI
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] text-stone-900 leading-[1.1] tracking-tight font-bold mb-6">
            Desa<br />
            <span className="text-[#234A31]">Air Putih.</span>
          </h1>

          <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-md mb-8 font-sans">
            Desa agamis dan mandiri di Kabupaten Indragiri Hulu yang bertumbuh melalui gotong royong warga, keterbukaan informasi, dan pemerataan pembangunan.
          </p>

          <Link 
            to={ROUTES.PROFIL}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#1E3A2B] hover:bg-[#152B1F] text-white text-xs font-semibold rounded-full shadow-sm hover:shadow-md transition-all group"
          >
            <span>Lihat Profil Desa</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

        </div>

        {/* Right Column: Hero Visual with Organic Curve & Botanical Line Art */}
        <div className="md:col-span-6 lg:col-span-6 relative h-[300px] sm:h-[380px] md:h-[460px] flex items-center justify-center">
          
          {/* Subtle Botanical SVG Line Art */}
          <div className="absolute -top-6 -left-8 w-32 h-32 pointer-events-none opacity-25 text-[#234A31] z-20">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
              <path d="M20,90 Q40,50 80,20 M40,65 Q60,60 70,45 M30,78 Q50,80 65,70 M60,35 Q75,30 85,15" strokeLinecap="round" />
              <path d="M45,60 C50,55 55,55 60,60 C55,65 50,65 45,60 Z" fill="currentColor" fillOpacity="0.3" />
              <path d="M65,40 C70,35 75,35 80,40 C75,45 70,45 65,40 Z" fill="currentColor" fillOpacity="0.3" />
            </svg>
          </div>

          {/* Hero Image Container */}
          <div className="w-full h-full rounded-3xl overflow-hidden shadow-md relative bg-stone-200 border border-stone-200/90">
            <img 
              src="/images/home/home_hero_01.webp" 
              srcSet="/images/home/home_hero_01_sm.webp 768w, /images/home/home_hero_01.webp 1920w"
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Kantor Desa Air Putih" 
              width={1920}
              height={1280}
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover object-center scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
}
