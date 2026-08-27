
import { Section, EditorialImage } from '@/components/ui';
import { villageHistory } from '@/content/village/history';

export function Scene02Beginning() {
  return (
    <Section variant="default" spacing="none" className="bg-[#F2EFE9] py-16 md:py-32 px-6">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        
        {/* Left Column: Sejarah */}
        <div className="w-full md:w-5/12 flex flex-col pt-0 md:pt-12">
          <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-10">
            {villageHistory.sectionTitle}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-stone-900 leading-[1.2] mb-12 mix-blend-multiply">
            {villageHistory.mainHeading}
          </h2>
          <div className="flex flex-col gap-4">
            {villageHistory.paragraphs.map((paragraph, index) => {
              // Convert simple **bold** to strong tags safely without full markdown parser
              const parts = paragraph.split(/(\*\*.*?\*\*)/g);
              return (
                <p key={index} className="text-stone-800 text-sm md:text-base leading-[1.8]">
                  {parts.map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={i}>{part.slice(2, -2)}</strong>;
                    }
                    return part;
                  })}
                </p>
              );
            })}
          </div>
        </div>

        {/* Right Column: Riwayat Kepala Desa & Foto */}
        <div className="w-full md:w-7/12 relative mt-8 md:mt-0">
          <div className="w-full bg-[#E8E5DF] p-6 md:p-12 mb-12">
            <h3 className="font-serif text-2xl text-stone-900 mb-8 border-b border-stone-300 pb-4">
              Riwayat Kepala Desa
            </h3>
            <ul className="flex flex-col gap-4">
              {villageHistory.kadesList.map((k, i) => (
                <li key={i} className="flex flex-col md:flex-row md:justify-between md:items-start border-b border-stone-300/50 pb-3 gap-1">
                  <div className="flex flex-col">
                    <span className="text-stone-800 text-sm md:text-base font-medium">{i + 1}. {k.name}</span>
                    <span className="text-stone-500 text-xs md:text-sm">{k.desc}</span>
                  </div>
                  <span className="text-stone-600 text-xs md:text-sm font-mono mt-1 md:mt-0 md:text-right shrink-0">{k.period}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full aspect-[16/9] shadow-md relative">
            <EditorialImage 
              image={villageHistory.image}
              preset="landscape"
              overlay="none"
              className="w-full h-full object-cover sepia-[0.3] grayscale-[0.8]"
            />
          </div>
        </div>

      </div>
    </Section>
  );
}
