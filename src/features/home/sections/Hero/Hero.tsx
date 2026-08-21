import { Section, EditorialImage } from '@/components/ui';
import { heroContent } from '@/content/homepage/hero';

export function Hero() {
  return (
    <Section variant="default" spacing="none" className="relative h-[70svh] md:h-[calc(100svh-6rem)] w-full flex flex-col overflow-hidden bg-[#1A1A1A]">
      {/* 
        Scene 1: Arrival
        A cinematic opening shot. Wonder before information. 
      */}
      <div className="absolute inset-0 z-0">
        <EditorialImage 
          image={heroContent.media.image} 
          priority 
          preset="hero" 
          overlay="none"
          className="w-full h-full object-cover"
        />
        {/* Subtle cinematic gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent pointer-events-none" />
      </div>
      
      <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 h-full w-full max-w-[1400px] mx-auto">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] text-white drop-shadow-sm leading-[1.1] font-normal mb-16 md:mb-24">
            Jejak Waktu<br/>di Tepian<br/>Indragiri.
          </h1>
          
          <div className="flex flex-col items-start gap-4">
            <div className="w-[1px] h-16 md:h-24 bg-white/40 ml-[10px]" />
            <a href={heroContent.cta.primary.href} className="text-[9px] uppercase tracking-[0.2em] text-white font-bold hover:text-white/70 transition-colors flex flex-col items-start gap-6">
              <span>{heroContent.cta.primary.label}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="ml-[2px] opacity-80">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
