import { Section } from '@/components/ui';

export function Scene04Values() {
  return (
    <Section variant="default" spacing="none" className="bg-[#1A1A1A] py-32 md:py-48 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative text-white">
        
        {/* Kicker */}
        <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold mb-20 md:mb-32">
          04 — NILAI YANG KAMI PEGANG
        </p>

        {/* Two Column Layout with Vertical Divider */}
        <div className="flex flex-col md:flex-row relative">
          
          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />
          {/* Horizontal Divider (Mobile Only) */}
          <div className="md:hidden w-full h-[1px] bg-white/10 my-16" />

          {/* Value 1: Tangan yang Terbuka */}
          <div className="w-full md:w-1/2 flex flex-row gap-8 md:gap-12 md:pr-24">
            <div className="w-12 md:w-16 flex-shrink-0 opacity-60">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-auto">
                <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                <path d="M6 12V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                <path d="M4 14.5a3.5 3.5 0 0 0 7 0" />
                <path d="M22 14.5a3.5 3.5 0 0 1-7 0" />
                <path d="M12 18v3" />
                <path d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="font-serif text-2xl md:text-3xl text-white/90 mb-4 md:mb-6">
                Tangan yang Terbuka
              </h3>
              <p className="text-white/50 text-sm md:text-base leading-[1.8]">
                Kami percaya bahwa kehidupan adalah tentang berbagi. Di desa ini, tidak ada meja yang terlalu penuh untuk tidak dibagi bersama.
              </p>
            </div>
          </div>

          {/* Value 2: Hormat pada Tanah */}
          <div className="w-full md:w-1/2 flex flex-row gap-8 md:gap-12 mt-16 md:mt-0 md:pl-24">
            <div className="w-12 md:w-16 flex-shrink-0 opacity-60">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-auto">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="font-serif text-2xl md:text-3xl text-white/90 mb-4 md:mb-6">
                Hormat pada Tanah
              </h3>
              <p className="text-white/50 text-sm md:text-base leading-[1.8]">
                Kami hidup dari tanah, maka kami menjaganya. Alam bukan milik kami, kami hanya merawatnya untuk generasi berikutnya.
              </p>
            </div>
          </div>

        </div>

      </div>
    </Section>
  );
}
