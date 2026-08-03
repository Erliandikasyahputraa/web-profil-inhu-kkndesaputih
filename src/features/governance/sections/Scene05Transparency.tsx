import { Section } from '@/components/ui';

export function Scene05Transparency() {
  return (
    <Section variant="default" spacing="none" className="bg-[#1A1A1A] py-32 md:py-48 px-6 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-24 items-start">
        
        {/* Left Column: Typography */}
        <div className="w-full md:w-5/12 flex flex-col relative z-20">
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold mb-10">
            04 — TRANSPARANSI
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[4rem] text-white/90 leading-[1.2] mb-10 pr-8">
            Terbuka kepada publik.
          </h2>
          <p className="text-white/60 text-sm md:text-base leading-[1.8] max-w-sm mb-16">
            Kepercayaan tidak turun dari langit. Ia dibangun di atas dasar keterbukaan, akuntabilitas, dan komunikasi yang jujur.
          </p>
          
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Total Anggaran (Estimasi)</span>
              <p className="font-serif text-3xl md:text-4xl text-white mt-2">Rp 1.450.000.000</p>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Infographic (Budget Allocation) */}
        <div className="w-full md:w-7/12 flex flex-col gap-12 mt-12 md:mt-0 pt-0 md:pt-32">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            
            {/* Item 1 */}
            <div className="flex flex-col relative group">
              <div className="flex items-end justify-between mb-3 border-b border-white/20 pb-2">
                <span className="font-serif text-xl md:text-2xl text-white/90 group-hover:text-white transition-colors">Infrastruktur</span>
                <span className="text-xs text-white/50">40%</span>
              </div>
              <p className="text-[11px] text-white/40 leading-relaxed max-w-xs">Pembangunan jalan desa, jembatan, dan fasilitas air bersih.</p>
              
              {/* Subtle line graphic */}
              <div className="absolute top-[-10px] right-0 w-8 h-8 opacity-20">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2 L12 22 M2 12 L22 12 M4.93 4.93 L19.07 19.07 M4.93 19.07 L19.07 4.93" />
                </svg>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col relative group">
              <div className="flex items-end justify-between mb-3 border-b border-white/20 pb-2">
                <span className="font-serif text-xl md:text-2xl text-white/90 group-hover:text-white transition-colors">Pendidikan</span>
                <span className="text-xs text-white/50">25%</span>
              </div>
              <p className="text-[11px] text-white/40 leading-relaxed max-w-xs">Bantuan operasional PAUD, beasiswa, dan pengembangan literasi.</p>
              
              {/* Subtle line graphic */}
              <div className="absolute top-[-10px] right-0 w-8 h-8 opacity-20">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="5" />
                </svg>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col relative group">
              <div className="flex items-end justify-between mb-3 border-b border-white/20 pb-2">
                <span className="font-serif text-xl md:text-2xl text-white/90 group-hover:text-white transition-colors">Pertanian</span>
                <span className="text-xs text-white/50">20%</span>
              </div>
              <p className="text-[11px] text-white/40 leading-relaxed max-w-xs">Subsidi benih, pupuk, dan perbaikan saluran irigasi.</p>
              
              {/* Subtle line graphic */}
              <div className="absolute top-[-10px] right-0 w-8 h-8 opacity-20">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 22 L12 8 M5 15 L12 8 L19 15" />
                </svg>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col relative group">
              <div className="flex items-end justify-between mb-3 border-b border-white/20 pb-2">
                <span className="font-serif text-xl md:text-2xl text-white/90 group-hover:text-white transition-colors">Pelayanan Publik</span>
                <span className="text-xs text-white/50">15%</span>
              </div>
              <p className="text-[11px] text-white/40 leading-relaxed max-w-xs">Operasional kantor desa, kesehatan masyarakat, dan keamanan.</p>
              
              {/* Subtle line graphic */}
              <div className="absolute top-[-10px] right-0 w-8 h-8 opacity-20">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9 L21 9 M9 21 L9 9" />
                </svg>
              </div>
            </div>

          </div>
        </div>

      </div>
    </Section>
  );
}
