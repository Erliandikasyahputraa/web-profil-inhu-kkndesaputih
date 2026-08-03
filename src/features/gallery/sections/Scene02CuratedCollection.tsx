import { useState, useEffect } from 'react';
import { Section, EditorialImage } from '@/components/ui';
import { GALLERY_PHOTOS, type Photo } from '@/content/gallery';

const FILTERS = ['Semua', 'Alam', 'Masyarakat', 'Budaya', 'Pertanian', 'Sejarah', 'Arsip'] as const;
type Filter = typeof FILTERS[number];

export function Scene02CuratedCollection() {
  const [activeFilter, setActiveFilter] = useState<Filter>('Semua');
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (activePhoto) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [activePhoto]);

  const filteredPhotos = GALLERY_PHOTOS.filter(
    photo => activeFilter === 'Semua' || photo.category === activeFilter
  );

  // Group photos into chunks for varied layouts
  // The layout sequence will just repeat indefinitely: 
  // 1 (full bleed), 3 (collage), 4 (contact sheet), 2 (spread), 1 (floating), 3 (strip)
  const chunks: Photo[][] = [];
  let i = 0;
  const chunkSizes = [1, 3, 4, 2, 1, 3, 5];
  let chunkIndex = 0;

  while (i < filteredPhotos.length) {
    const size = chunkSizes[chunkIndex % chunkSizes.length];
    chunks.push(filteredPhotos.slice(i, i + size));
    i += size;
    chunkIndex++;
  }

  return (
    <>
      <Section variant="default" spacing="none" className="bg-[#F2EFE9] pt-12 pb-32 md:pb-48 px-6 min-h-screen">
        
        {/* Filters */}
        <div className="max-w-6xl mx-auto w-full mb-24 md:mb-32">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 md:gap-12 border-b border-stone-300/50 pb-8">
            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-500 ${
                  activeFilter === filter 
                    ? 'text-stone-900 font-bold' 
                    : 'text-stone-400 hover:text-stone-600 font-medium'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="mt-8 flex justify-between items-center text-[9px] uppercase tracking-widest text-stone-400">
            <span>{filteredPhotos.length} DOKUMEN VISUAL</span>
            <span>ARSIP DESA</span>
          </div>
        </div>

        {/* Gallery Chunks */}
        <div className="w-full flex flex-col gap-32 md:gap-48">
          {chunks.map((chunk, idx) => {
            const layoutType = idx % 7;
            
            // 0: Massive Full Bleed (1 photo)
            if (layoutType === 0 && chunk.length > 0) {
              const photo = chunk[0];
              return (
                <div key={idx} className="w-full max-w-[1400px] mx-auto group cursor-pointer" onClick={() => setActivePhoto(photo)}>
                  <div className="w-full aspect-[21/9] md:aspect-[3/1] bg-stone-200 overflow-hidden">
                    <EditorialImage image={photo} preset="custom" overlay="none" className="w-full h-full [&>img]:transition-transform [&>img]:duration-[2s] group-hover:[&>img]:scale-105" />
                  </div>
                  <div className="mt-4 flex justify-between opacity-50 group-hover:opacity-100 transition-opacity">
                    <p className="text-[10px] uppercase tracking-widest text-stone-600">{photo.caption}</p>
                    {photo.date && <p className="text-[9px] uppercase tracking-widest text-stone-400">{photo.date}</p>}
                  </div>
                </div>
              );
            }

            // 1: Editorial Collage (3 photos)
            if (layoutType === 1 && chunk.length === 3) {
              return (
                <div key={idx} className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
                  <div className="md:col-span-7 group cursor-pointer" onClick={() => setActivePhoto(chunk[0])}>
                    <div className="w-full aspect-[4/3] bg-stone-200 overflow-hidden">
                      <EditorialImage image={chunk[0]} preset="custom" className="w-full h-full [&>img]:transition-transform [&>img]:duration-[2s] group-hover:[&>img]:scale-105" />
                    </div>
                    <p className="mt-3 text-[9px] uppercase tracking-widest text-stone-500 opacity-50 group-hover:opacity-100">{chunk[0].caption}</p>
                  </div>
                  <div className="md:col-span-5 flex flex-col gap-8 md:gap-16">
                    <div className="group cursor-pointer md:pl-12" onClick={() => setActivePhoto(chunk[1])}>
                      <div className="w-full aspect-square bg-stone-200 overflow-hidden">
                        <EditorialImage image={chunk[1]} preset="custom" className="w-full h-full [&>img]:transition-transform [&>img]:duration-[2s] group-hover:[&>img]:scale-105" />
                      </div>
                      <p className="mt-3 text-[9px] uppercase tracking-widest text-stone-500 opacity-50 group-hover:opacity-100">{chunk[1].caption}</p>
                    </div>
                    <div className="group cursor-pointer md:pr-12" onClick={() => setActivePhoto(chunk[2])}>
                      <div className="w-full aspect-[16/9] bg-stone-200 overflow-hidden">
                        <EditorialImage image={chunk[2]} preset="custom" className="w-full h-full [&>img]:transition-transform [&>img]:duration-[2s] group-hover:[&>img]:scale-105" />
                      </div>
                      <p className="mt-3 text-[9px] uppercase tracking-widest text-stone-500 opacity-50 group-hover:opacity-100">{chunk[2].caption}</p>
                    </div>
                  </div>
                </div>
              );
            }

            // 2: Contact Sheet (4 photos)
            if (layoutType === 2 && chunk.length >= 2) {
              return (
                <div key={idx} className="w-full max-w-5xl mx-auto">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {chunk.map((photo, i) => (
                      <div key={i} className="group cursor-pointer" onClick={() => setActivePhoto(photo)}>
                        <div className="w-full aspect-[3/4] bg-stone-200 overflow-hidden border-[8px] border-white shadow-sm">
                          <EditorialImage image={photo} preset="custom" className="w-full h-full [&>img]:grayscale [&>img]:opacity-80 [&>img]:transition-all [&>img]:duration-[1s] group-hover:[&>img]:grayscale-0 group-hover:[&>img]:opacity-100" />
                        </div>
                        <p className="mt-3 text-[8px] uppercase tracking-widest text-stone-400 text-center opacity-50 group-hover:opacity-100">{photo.caption}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            // 3: Magazine Spread (2 photos)
            if (layoutType === 3 && chunk.length === 2) {
              return (
                <div key={idx} className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start">
                  <div className="group cursor-pointer md:mt-32" onClick={() => setActivePhoto(chunk[0])}>
                    <div className="w-full aspect-[3/4] bg-stone-200 overflow-hidden">
                      <EditorialImage image={chunk[0]} preset="custom" className="w-full h-full [&>img]:transition-transform [&>img]:duration-[2s] group-hover:[&>img]:scale-[1.03]" />
                    </div>
                    <p className="mt-4 text-[10px] uppercase tracking-widest text-stone-600 opacity-60 group-hover:opacity-100">{chunk[0].caption}</p>
                  </div>
                  <div className="group cursor-pointer" onClick={() => setActivePhoto(chunk[1])}>
                    <div className="w-full aspect-[4/5] bg-stone-200 overflow-hidden">
                      <EditorialImage image={chunk[1]} preset="custom" className="w-full h-full [&>img]:transition-transform [&>img]:duration-[2s] group-hover:[&>img]:scale-[1.03]" />
                    </div>
                    <p className="mt-4 text-[10px] uppercase tracking-widest text-stone-600 opacity-60 group-hover:opacity-100">{chunk[1].caption}</p>
                  </div>
                </div>
              );
            }

            // 4: Floating Image (1 photo, massive whitespace)
            if (layoutType === 4 && chunk.length > 0) {
              const photo = chunk[0];
              return (
                <div key={idx} className="w-full max-w-5xl mx-auto flex justify-end md:justify-center">
                  <div className="w-[85%] md:w-[60%] group cursor-pointer" onClick={() => setActivePhoto(photo)}>
                    <div className="w-full aspect-[16/9] bg-stone-200 overflow-hidden shadow-2xl">
                      <EditorialImage image={photo} preset="custom" className="w-full h-full [&>img]:transition-transform [&>img]:duration-[3s] group-hover:[&>img]:scale-110" />
                    </div>
                    <div className="mt-6 ml-12">
                      <p className="text-[10px] uppercase tracking-widest text-stone-500 font-medium">{photo.caption}</p>
                    </div>
                  </div>
                </div>
              );
            }

            // 5: Horizontal Strip (3 photos)
            if (layoutType === 5 && chunk.length === 3) {
              return (
                <div key={idx} className="w-full max-w-[1600px] mx-auto px-4 md:px-12">
                  <div className="flex flex-nowrap md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide">
                    {chunk.map((photo, i) => (
                      <div key={i} className="group cursor-pointer min-w-[85vw] md:min-w-0 flex-shrink-0 snap-center" onClick={() => setActivePhoto(photo)}>
                        <div className="w-full aspect-[16/9] bg-stone-200 overflow-hidden">
                          <EditorialImage image={photo} preset="custom" className="w-full h-full [&>img]:transition-transform [&>img]:duration-[1s] group-hover:[&>img]:scale-105" />
                        </div>
                        <p className="mt-3 text-[9px] uppercase tracking-widest text-stone-500 opacity-40 group-hover:opacity-100">{photo.caption}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            // 6: Dense Archive (Fallback grid for remaining)
            return (
              <div key={idx} className="w-full max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {chunk.map((photo, i) => (
                  <div key={i} className="group cursor-pointer break-inside-avoid" onClick={() => setActivePhoto(photo)}>
                    <div className="w-full bg-stone-200 overflow-hidden">
                      <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full h-auto object-cover transition-transform duration-[2s] group-hover:scale-[1.02]" />
                    </div>
                    <p className="mt-2 text-[9px] uppercase tracking-widest text-stone-400 opacity-50 group-hover:opacity-100">{photo.caption}</p>
                  </div>
                ))}
              </div>
            );
          })}
          
          {filteredPhotos.length === 0 && (
            <div className="w-full py-32 text-center flex flex-col items-center opacity-50">
              <p className="text-xs uppercase tracking-widest font-bold text-stone-400">Arsip Kosong</p>
            </div>
          )}
        </div>

      </Section>

      {/* Lightbox */}
      <div 
        className={`fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center transition-opacity duration-700 ease-in-out ${activePhoto ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setActivePhoto(null)}
      >
        <button 
          className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors uppercase tracking-[0.2em] text-[9px] font-bold z-10"
          onClick={() => setActivePhoto(null)}
        >
          Tutup
        </button>
        
        {activePhoto && (
          <div className="relative w-full max-w-7xl mx-auto px-6 max-h-screen flex flex-col items-center justify-center">
            <img 
              src={activePhoto.src} 
              alt={activePhoto.alt}
              className="max-w-full max-h-[80vh] object-contain shadow-2xl"
            />
            <div className="mt-8 flex flex-col items-center text-center max-w-md">
              <p className="text-white/80 text-xs tracking-widest uppercase mb-2">{activePhoto.caption}</p>
              <p className="text-white/40 text-[9px] uppercase tracking-widest">{activePhoto.date || 'Arsip Desa Air Putih'}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
