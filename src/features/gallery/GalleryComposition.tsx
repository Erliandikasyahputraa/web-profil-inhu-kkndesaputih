import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_PHOTOS, type Photo } from '@/content/gallery';

const FEATURED_IDS = [
  '119', '016', '008', '325', 
  '030', '173', '160', '107', 
  '014', '209', '183', '060', 
  '442', '012', '410', '255'
];

export function GalleryComposition() {
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);

  const featuredPhotos = GALLERY_PHOTOS.filter(photo => FEATURED_IDS.includes(photo.id));

  const openLightbox = (photo: Photo) => setLightboxPhoto(photo);
  const closeLightbox = () => setLightboxPhoto(null);

  const nextPhoto = useCallback(() => {
    if (lightboxPhoto) {
      const currentIndex = featuredPhotos.findIndex(p => p.id === lightboxPhoto.id);
      if (currentIndex !== -1) {
        const nextIndex = (currentIndex + 1) % featuredPhotos.length;
        setLightboxPhoto(featuredPhotos[nextIndex]);
      }
    }
  }, [lightboxPhoto, featuredPhotos]);

  const prevPhoto = useCallback(() => {
    if (lightboxPhoto) {
      const currentIndex = featuredPhotos.findIndex(p => p.id === lightboxPhoto.id);
      if (currentIndex !== -1) {
        const prevIndex = (currentIndex - 1 + featuredPhotos.length) % featuredPhotos.length;
        setLightboxPhoto(featuredPhotos[prevIndex]);
      }
    }
  }, [lightboxPhoto, featuredPhotos]);

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

  const driveLinks = [
    { title: "PROKER SMPN", subtitle: "Anti Bullying", url: "https://drive.google.com/drive/folders/1mex7HllDsr3Y7TVONnQz7DLz0dLrZT_I?usp=sharing" },
    { title: "KARNAVAL 18 AGUSTUS", subtitle: "Desa Air Putih · 2026", url: "https://drive.google.com/drive/folders/1OFHzxBplVNaaW8z3FTbPBN43qTQr2hE7?usp=sharing" },
    { title: "KARNAVAL 15 AGUSTUS", subtitle: "Kecamatan · 2026", url: "https://drive.google.com/drive/folders/1GORdOfTg6MamxI0Y1utuzmf_uPuojHtk?usp=sharing" },
    { title: "SDN 010", subtitle: "Kolase Kertas", url: "https://drive.google.com/drive/folders/1GORdOfTg6MamxI0Y1utuzmf_uPuojHtk?usp=sharing" },
    { title: "SDN 008", subtitle: "Kolase Plastik", url: "https://drive.google.com/drive/folders/11L6TUuBRar1LGqw9SY4oIxkK-M4HcBmX?usp=drive_link" },
    { title: "TK TUNAS HARAPAN", subtitle: "Gunung Meletus", url: "https://drive.google.com/drive/folders/15aSmU-AlyKpBjD7uix5v3XJFziUXiqqg?usp=sharing" },
    { title: "RA AL KAUTSAR", subtitle: "Gunung Meletus", url: "https://drive.google.com/drive/folders/1PparaTz7Ja6L3qsfyry2hwSm3Xj0aoZ6?usp=sharing" },
    { title: "GORO", subtitle: "Gotong Royong", url: "https://drive.google.com/drive/folders/1468AeZUUlVpqplAzGBoZ8UJpBEFkTBah?usp=sharing" },
    { title: "SMAN 02 LBJ", subtitle: "Dokumentasi", url: "https://drive.google.com/drive/folders/1dPMxvf-WPy3Kg1sFOXYe27yWxKpoWa2u" }
  ];

  return (
    <div className="w-full bg-[#F8F6F3] min-h-[70vh] md:min-h-screen pt-32 pb-24 px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Header */}
        <header className="mb-16 md:mb-24">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-500 font-bold mb-4">
            06 — GALERI
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-6 leading-[1.1]">
            Beberapa potret kehidupan, <br className="hidden md:block" />
            ruang, aktivitas, dan keseharian.
          </h1>
          <p className="text-stone-600 text-sm md:text-base max-w-xl">
            Desa Air Putih yang kami pilih untuk diceritakan di sini.
          </p>
        </header>

        {/* FEATURED GALLERY */}
        <section className="mb-24 md:mb-32">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12"
          >
            <AnimatePresence mode="popLayout">
              {featuredPhotos.map((photo, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
                  key={photo.id}
                  onClick={() => openLightbox(photo)}
                  className="relative overflow-hidden cursor-pointer group bg-stone-200 aspect-[4/3]"
                >
                  <img 
                    src={photo.src}
                    alt={photo.alt}
                    loading={index < 6 ? "eager" : "lazy"}
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-stone-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex flex-col justify-end p-6 pointer-events-none">
                    <p className="text-white font-serif text-lg">{photo.category} · Air Putih</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* DOKUMENTASI KEGIATAN */}
        <section className="mb-16 md:mb-24 max-w-3xl">
          <div className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-stone-900 mb-4">
              DOKUMENTASI KEGIATAN
            </h2>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              Cerita lengkap dari beberapa kegiatan dan pengabdian
              tersimpan dalam dokumentasi masing-masing.
            </p>
          </div>
          
          <div className="flex flex-col border-t border-stone-300">
            {driveLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-stone-300 hover:bg-stone-200/50 transition-colors px-4 -mx-4 md:px-6 md:-mx-6"
              >
                <div className="flex items-start md:items-center gap-6 md:gap-12 mb-4 md:mb-0">
                  <span className="text-[10px] md:text-xs font-mono opacity-50 font-bold pt-1 md:pt-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-sm md:text-base uppercase tracking-wider font-medium text-stone-900 mb-1">
                      {link.title}
                    </h3>
                    <p className="text-stone-500 font-serif text-sm">
                      {link.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-xs uppercase tracking-widest text-stone-500 group-hover:text-stone-900 transition-colors ml-12 md:ml-0">
                  Lihat dokumentasi <span className="ml-2">→</span>
                </div>
              </a>
            ))}
          </div>
        </section>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-stone-900 flex flex-col"
          >
            {/* Lightbox Header */}
            <div className="flex items-center justify-between p-4 md:p-6 text-white absolute top-0 left-0 right-0 z-20">
              <div>
                <p className="font-mono text-[10px] md:text-xs opacity-70 mb-1">
                  {lightboxPhoto.src.split('/').pop()}
                </p>
                <p className="text-xs md:text-sm tracking-wider uppercase">
                  {lightboxPhoto.category}
                </p>
              </div>
              <button 
                onClick={closeLightbox}
                className="p-2 hover:opacity-70 transition-opacity flex items-center justify-center bg-stone-800/50 rounded-full"
                aria-label="Close"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
                className="max-w-full max-h-full object-contain pointer-events-auto"
              />
              
              {/* Navigation Buttons */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
                className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-stone-800/50 rounded-full transition-colors"
                aria-label="Previous"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
                className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-stone-800/50 rounded-full transition-colors"
                aria-label="Next"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
