
import { kknDocumentation } from '@/content/kkn/documentation';

export function KknJejakKegiatan() {
  const { jejakKegiatan } = kknDocumentation;
  
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-12">
        <div className="w-full md:w-3/12">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-500 font-bold mb-1">
            {jejakKegiatan.sectionTitle}
          </p>
          <p className="font-serif text-2xl text-stone-900">
            {jejakKegiatan.sectionHeading}
          </p>
        </div>
        <div className="w-full md:w-9/12 lg:w-7/12">
          <p className="font-serif text-xl md:text-2xl text-stone-800 italic">
            {jejakKegiatan.quote}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:gap-8">
        {/* Dominant Image */}
        <div className="w-full bg-stone-200 overflow-hidden relative max-h-[300px] md:max-h-[500px]" style={{ aspectRatio: '16/9' }}>
          <img 
            src={jejakKegiatan.mainImage.src} 
            alt={jejakKegiatan.mainImage.alt} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Supporting Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {jejakKegiatan.gridImages.map((img, i) => (
            <div key={i} className="w-full bg-stone-200 overflow-hidden relative aspect-[4/3] max-h-[220px] md:max-h-none">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
