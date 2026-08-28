
import { Section } from '@/components/ui';
import { villageDemographics } from '@/content/village/demographics';

export function Scene03Geografi() {
  return (
    <Section variant="default" spacing="none" className="bg-[#F8F6F3] pt-32 pb-32 px-6">
      <div className="max-w-6xl mx-auto w-full text-stone-900">
        
        {/* OPENING & MAPS */}
        <div className="w-full max-w-5xl mb-32">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs font-bold text-stone-400">§ 03</span>
            <span className="w-6 h-px bg-stone-300"></span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-500 font-bold">
              GEOGRAFI & DEMOGRAFI
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[4rem] leading-[1.1] text-stone-900 mb-8">
            {villageDemographics.mainHeading}
          </h2>
          <div className="text-stone-700 text-lg md:text-xl leading-relaxed max-w-2xl mb-16 md:mb-24 flex flex-col gap-4">
            {villageDemographics.descriptions.map((desc, i) => {
              const parts = desc.split(/(\*\*.*?\*\*)/g);
              return (
                <p key={i}>
                  {parts.map((part, j) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={j}>{part.slice(2, -2)}</strong>;
                    }
                    return part;
                  })}
                </p>
              );
            })}
          </div>

          {/* Google Maps */}
          <div className="w-full h-[260px] md:h-[450px] overflow-hidden bg-[#E8E1D7] mb-4">
            <iframe 
              src={villageDemographics.mapIframeUrl} 
              className="w-full h-full border-0" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi"
            />
          </div>
          <p className="text-stone-500 text-xs tracking-wide mb-12">
            {villageDemographics.mapCaption}
          </p>

          {/* Peta Administrasi */}
          <div className="w-full flex flex-col mb-20 md:mb-28">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-6">
              PETA ADMINISTRASI DESA
            </h3>
            <div className="w-full bg-[#EBE7E0] p-4 md:p-8 flex items-center justify-center border border-stone-200">
              <img 
                src="/images/profil/peta_administrasi.webp" 
                alt="Peta Administrasi Desa Air Putih" 
                loading="lazy"
                decoding="async"
                className="w-full max-w-4xl h-auto object-contain"
              />
            </div>
          </div>

        </div>

        {/* 03 & 04 — BATAS & ORBITASI */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 mb-32 border-t border-stone-200 pt-16">
          <div className="w-full md:w-1/2 flex flex-col">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-6">
              {villageDemographics.borders.sectionTitle}
            </h3>
            
            <ul className="flex flex-col gap-6 mt-4">
              {villageDemographics.borders.items.map((item, i) => (
                <li key={i} className="flex flex-col border-b border-stone-200 pb-4">
                  <span className="text-stone-400 text-xs uppercase tracking-wider mb-1">{item.direction}</span>
                  <span className="text-stone-800 text-lg font-serif">{item.detail}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold mt-12 mb-6">
              {villageDemographics.topography.sectionTitle}
            </h3>
            
            <ul className="flex flex-col gap-6 mt-4">
              {villageDemographics.topography.items.map((item, i) => (
                <li key={i} className="flex justify-between border-b border-stone-200 pb-4">
                  <span className="text-stone-500">{item.label}</span>
                  <span className={`text-stone-800 font-medium ${item.isMissing ? 'italic' : ''}`}>
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col md:border-l md:border-stone-200 md:pl-16">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-6">
              {villageDemographics.orbitation.sectionTitle}
            </h3>
            
            <div className="flex flex-col gap-8 mt-4">
              <div className="flex flex-col border-b border-stone-200 pb-4">
                <span className="text-stone-400 text-xs uppercase tracking-wider mb-2">{villageDemographics.orbitation.kecamatan.label}</span>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-stone-500 text-xs mb-1">Orbitasi</span>
                    <span className="text-stone-800 text-lg font-serif">{villageDemographics.orbitation.kecamatan.distance}</span>
                  </div>
                  <div>
                    <span className="block text-stone-500 text-xs mb-1">Waktu Tempuh</span>
                    <span className="text-stone-800 text-lg font-serif">{villageDemographics.orbitation.kecamatan.time}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-stone-500 text-xs mt-2 italic">{villageDemographics.orbitation.kecamatan.note}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col border-b border-stone-200 pb-4">
                <span className="text-stone-400 text-xs uppercase tracking-wider mb-2">{villageDemographics.orbitation.kabupaten.label}</span>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-stone-500 text-xs mb-1">Orbitasi</span>
                    <span className="text-stone-800 text-lg font-serif">{villageDemographics.orbitation.kabupaten.distance}</span>
                  </div>
                  <div>
                    <span className="block text-stone-500 text-xs mb-1">Waktu Tempuh</span>
                    <span className="text-stone-800 text-lg font-serif">{villageDemographics.orbitation.kabupaten.time}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-stone-500 text-xs mt-2 italic">{villageDemographics.orbitation.kabupaten.note}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </Section>
  );
}
