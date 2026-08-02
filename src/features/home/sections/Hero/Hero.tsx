import { Section, EditorialImage } from '@/components/ui';
import { heroContent } from '@/content/homepage/hero';

export function Hero() {
  return (
    <Section variant="default" spacing="none" className="relative h-[100dvh] w-full flex flex-col overflow-hidden bg-stone-100">
      {/* 
        Scene 1: Arrival (The Wide Shot)
        Total immersion. The feeling of stepping off a boat into the morning mist. 
      */}
      <div className="absolute inset-0 z-0">
        <EditorialImage 
          image={heroContent.media.image} 
          priority 
          preset="hero" 
          overlay="none"
        />
        <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply pointer-events-none" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-between text-center px-6 h-full pb-12 pt-32 max-w-5xl mx-auto">
        <div className="flex-1 flex items-center justify-center">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-stone-50 drop-shadow-md leading-[1.05]">
            Jejak Waktu di<br/>Tepian Indragiri.
          </h1>
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
          <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-stone-100 font-medium opacity-80">
            Desa Air Putih
          </p>
        </div>
      </div>
    </Section>
  );
}
