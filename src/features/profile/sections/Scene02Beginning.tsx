import { Section, EditorialImage } from '@/components/ui';
import { villageHistory } from '@/content/village/history';

export function Scene02Beginning() {
  return (
    <Section variant="default" spacing="none" className="bg-[#F2EFE9] py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-12 md:gap-20 items-center">
        
        {/* Left Column: Sejarah & Narasi */}
        <div className="w-full md:w-6/12 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs font-bold text-stone-400">§ 02</span>
            <span className="w-6 h-px bg-stone-300"></span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold">
              SEJARAH & PEMBENTUKAN
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-stone-900 leading-[1.15] mb-8 mix-blend-multiply">
            {villageHistory.mainHeading}
          </h2>
          <div className="flex flex-col gap-5">
            {villageHistory.paragraphs.map((paragraph, index) => {
              const parts = paragraph.split(/(\*\*.*?\*\*)/g);
              return (
                <p key={index} className="text-stone-700 text-sm md:text-base leading-[1.8]">
                  {parts.map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={i} className="text-stone-900 font-semibold">{part.slice(2, -2)}</strong>;
                    }
                    return part;
                  })}
                </p>
              );
            })}
          </div>
        </div>

        {/* Right Column: Foto Arsip Sejarah */}
        <div className="w-full md:w-6/12 flex flex-col gap-4">
          <div className="w-full aspect-[4/3] md:aspect-[16/11] bg-[#E8E5DF] overflow-hidden border border-stone-300/60 shadow-sm relative">
            <EditorialImage 
              image={villageHistory.image}
              preset="custom"
              overlay="none"
              className="w-full h-full object-cover grayscale-[0.3] contrast-[1.05]"
            />
          </div>
          <p className="text-stone-500 text-xs tracking-wide italic text-right">
            Arsip Dokumentasi Lanskap Desa Air Putih
          </p>
        </div>

      </div>
    </Section>
  );
}
