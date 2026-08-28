import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';
import { GALLERY_PHOTOS, type Photo } from '@/content/gallery';
import { ROUTES } from '@/constants/routes';

export function GalleryComposition() {
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);

  const firstPhoto = GALLERY_PHOTOS[0];
  const gridPhotos = GALLERY_PHOTOS.slice(1);

  const openLightbox = (photo: Photo) => setLightboxPhoto(photo);
  const closeLightbox = () => setLightboxPhoto(null);

  const nextPhoto = useCallback(() => {
    if (lightboxPhoto) {
      const currentIndex = GALLERY_PHOTOS.findIndex(p => p.id === lightboxPhoto.id);
      if (currentIndex !== -1) {
        const nextIndex = (currentIndex + 1) % GALLERY_PHOTOS.length;
        setLightboxPhoto(GALLERY_PHOTOS[nextIndex]);
      }
    }
  }, [lightboxPhoto]);

  const prevPhoto = useCallback(() => {
    if (lightboxPhoto) {
      const currentIndex = GALLERY_PHOTOS.findIndex(p => p.id === lightboxPhoto.id);
      if (currentIndex !== -1) {
        const prevIndex = (currentIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
        setLightboxPhoto(GALLERY_PHOTOS[prevIndex]);
      }
    }
  }, [lightboxPhoto]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxPhoto) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxPhoto, nextPhoto, prevPhoto]);

  useEffect(() => {
    document.body.style.overflow = lightboxPhoto ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [lightboxPhoto]);

  return (
    <main className="w-full bg-[#FAF8F5] text-stone-900 overflow-hidden pt-28 md:pt-36 pb-24 px-4 md:px-8 lg:px-12 xl:px-16 min-h-[70vh]">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* 1. HERO + FEATURED PHOTO #01 */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
          
          {/* Hero Typography */}
          <div className="lg:col-span-6 flex flex-col items-start relative z-10">
            
            {/* Subtle Botanical SVG Line Art */}
            <div className="absolute -top-6 -left-8 w-28 h-28 pointer-events-none opacity-20 text-[#234A31] z-0">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                <path d="M20,90 Q40,50 80,20 M40,65 Q60,60 70,45 M30,78 Q50,80 65,70 M60,35 Q75,30 85,15" strokeLinecap="round" />
                <path d="M45,60 C50,55 55,55 60,60 C55,65 50,65 45,60 Z" fill="currentColor" fillOpacity="0.3" />
                <path d="M65,40 C70,35 75,35 80,40 C75,45 70,45 65,40 Z" fill="currentColor" fillOpacity="0.3" />
              </svg>
            </div>

            <div className="flex items-center gap-2 mb-3 relative z-10">
              <span className="w-4 h-0.5 bg-[#234A31]"></span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#234A31] font-mono font-bold">
                GALERI FOTOGRAFI DESA
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 leading-[1.15] font-bold mb-5 relative z-10">
              Beberapa potret kehidupan, ruang, aktivitas, dan kebersamaan.
            </h1>

            <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-lg font-sans relative z-10">
              Dokumentasi visual yang merekam denyut keseharian, keramahan warga, dan jejak langkah pengabdian di Desa Air Putih.
            </p>
          </div>

          {/* Featured Image #01 */}
          {firstPhoto && (
            <div className="lg:col-span-6 relative">
              <div 
                onClick={() => openLightbox(firstPhoto)}
                className="relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer group bg-stone-200 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] border border-stone-200/90 shadow-sm hover:shadow-md transition-all"
              >
                <img 
                  src={firstPhoto.src}
                  srcSet="/images/gallery/galeri_hero_sm.webp 768w, /images/gallery/galeri_hero.webp 1280w"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt={firstPhoto.alt}
                  width={1280}
                  height={720}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
                
                {/* Floating Badge 01 */}
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1E3A2B] text-white font-mono text-xs font-bold shadow-sm">
                    01
                  </span>
                </div>

                <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </div>
          )}

        </section>

        {/* 2. PHOTO GRID (#02 – #29) — 2 cols (mobile), 3 cols (tablet), 4 cols (desktop) */}
        <section className="mb-16 md:mb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {gridPhotos.map((photo, index) => {
              const photoNumber = String(index + 2).padStart(2, '0');
              return (
                <div
                  key={photo.id}
                  onClick={() => openLightbox(photo)}
                  className="relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer group bg-stone-200 aspect-[4/3] border border-stone-200/90 shadow-sm hover:shadow-md transition-all"
                >
                  <img 
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  />
                  
                  {/* Floating Number Badge */}
                  <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 z-10">
                    <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1E3A2B]/90 text-white font-mono text-[10px] sm:text-xs font-bold shadow-sm backdrop-blur-sm">
                      {photoNumber}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. COMPACT DOKUMENTASI KEGIATAN CTA */}
        <section className="mb-12 md:mb-20">
          <div className="w-full bg-white border border-stone-200/90 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#234A31] text-white flex items-center justify-center shrink-0 shadow-sm">
                <FileText className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#234A31] font-mono font-bold block mb-1">
                  ARSIP DOKUMENTASI LENGKAP
                </span>
                <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-stone-900 leading-snug">
                  Dokumentasi lengkap program kerja dan kegiatan KKN Tematik 2026 Desa Air Putih.
                </h3>
              </div>
            </div>

            <Link
              to={ROUTES.KKN}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1E3A2B] hover:bg-[#152B1F] text-white text-xs sm:text-sm font-semibold rounded-full shadow-sm hover:shadow-md transition-all shrink-0 group self-stretch sm:self-auto justify-center"
            >
              <span>Lihat Dokumentasi KKN</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

          </div>
        </section>

      </div>

      {/* 4. LIGHTBOX (Fully Preserved & Responsive) */}
      {lightboxPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-stone-950/95 flex flex-col animate-in fade-in duration-200"
        >
          {/* Lightbox Header */}
          <div className="flex items-center justify-between p-4 md:p-6 text-white absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/60 to-transparent">
            <div>
              <p className="font-mono text-[10px] md:text-xs opacity-70 mb-0.5">
                Foto {String(GALLERY_PHOTOS.findIndex(p => p.id === lightboxPhoto.id) + 1).padStart(2, '0')} / {GALLERY_PHOTOS.length}
              </p>
              <p className="text-xs md:text-sm tracking-wider uppercase font-semibold text-emerald-300">
                {lightboxPhoto.category} · Desa Air Putih
              </p>
            </div>
            <button 
              onClick={closeLightbox}
              className="p-2.5 hover:bg-stone-800 text-white rounded-full transition-colors"
              aria-label="Tutup"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Lightbox Content */}
          <div 
            className="flex-1 flex items-center justify-center p-4 md:p-12 relative w-full h-full"
            onClick={closeLightbox}
          >
            <img 
              src={lightboxPhoto.src}
              alt={lightboxPhoto.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[85vh] object-contain pointer-events-auto rounded-lg shadow-2xl"
            />
            
            {/* Navigation Buttons */}
            <button 
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-white p-3 bg-stone-900/60 hover:bg-stone-800 rounded-full transition-colors"
              aria-label="Foto Sebelumnya"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-white p-3 bg-stone-900/60 hover:bg-stone-800 rounded-full transition-colors"
              aria-label="Foto Selanjutnya"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
