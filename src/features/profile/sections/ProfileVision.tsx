import { Sprout } from 'lucide-react';
import { villageVisionMission } from '@/content/village/visionMission';

export function ProfileVision() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-28">
      <div className="w-full bg-[#1E3A2B] border border-[#2A4E38] rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-md relative overflow-hidden text-white">
        
        {/* Botanical SVG Background Watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 pointer-events-none opacity-10 text-white">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path d="M20,90 Q40,50 80,20 M40,65 Q60,60 70,45 M30,78 Q50,80 65,70 M60,35 Q75,30 85,15" strokeLinecap="round" />
            <path d="M45,60 C50,55 55,55 60,60 C55,65 50,65 45,60 Z" fill="currentColor" fillOpacity="0.3" />
            <path d="M65,40 C70,35 75,35 80,40 C75,45 70,45 65,40 Z" fill="currentColor" fillOpacity="0.3" />
          </svg>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-8 relative z-10">
          
          {/* Green Circle Icon */}
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-400/20 border border-emerald-400/30 text-emerald-300 flex items-center justify-center shrink-0">
            <Sprout className="w-6 h-6 md:w-7 md:h-7" />
          </div>

          {/* Vision Statement */}
          <div className="flex flex-col">
            <h2 className="text-xs uppercase tracking-[0.2em] text-emerald-300 font-mono font-bold mb-2">
              Visi Desa Air Putih
            </h2>
            <p className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-50 leading-relaxed font-medium">
              {villageVisionMission.visionStatement.replace(/"/g, '')}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
