import { useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_PHOTOS, type Photo } from '@/content/gallery';

const CATEGORIES: ('Semua' | 'Landscape' | 'Portrait')[] = ['Semua', 'Landscape', 'Portrait'];

export function GalleryComposition() {
  const [activeCategory, setActiveCategory] = useState<'Semua' | 'Landscape' | 'Portrait'>('Semua');
  const [visibleCount, setVisibleCount] = useState(24);
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);

  // Filter photos by category
  const categoryFilteredPhotos = useMemo(() => {
    if (activeCategory === 'Semua') return GALLERY_PHOTOS;
    if (activeCategory === 'Landscape') return GALLERY_PHOTOS.filter(p => p.orientation !== 'portrait');
    if (activeCategory === 'Portrait') return GALLERY_PHOTOS.filter(p => p.orientation === 'portrait');
    return GALLERY_PHOTOS;
  }, [activeCategory]);

  const visiblePhotos = categoryFilteredPhotos.slice(0, visibleCount);

  // Split into landscape and portrait based on orientation tag
  const landscapePhotos = useMemo(() => visiblePhotos.filter(p => p.orientation !== 'portrait'), [visiblePhotos]);
  const portraitPhotos = useMemo(() => visiblePhotos.filter(p => p.orientation === 'portrait'), [visiblePhotos]);

  // Handlers
  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, categoryFilteredPhotos.length));
  };

  const handleCategoryChange = (category: 'Semua' | 'Landscape' | 'Portrait') => {
    setActiveCategory(category);
    setVisibleCount(24);
  };

  const openLightbox = (photo: Photo) => {
    setLightboxPhoto(photo);
  };

  const closeLightbox = () => {
    setLightboxPhoto(null);
  };

  const nextPhoto = useCallback(() => {
    if (lightboxPhoto) {
      const currentIndex = categoryFilteredPhotos.findIndex(p => p.id === lightboxPhoto.id);
      if (currentIndex !== -1) {
        const nextIndex = (currentIndex + 1) % categoryFilteredPhotos.length;
        setLightboxPhoto(categoryFilteredPhotos[nextIndex]);
      }
    }
  }, [lightboxPhoto, categoryFilteredPhotos]);

  const prevPhoto = useCallback(() => {
    if (lightboxPhoto) {
      const currentIndex = categoryFilteredPhotos.findIndex(p => p.id === lightboxPhoto.id);
      if (currentIndex !== -1) {
        const prevIndex = (currentIndex - 1 + categoryFilteredPhotos.length) % categoryFilteredPhotos.length;
        setLightboxPhoto(categoryFilteredPhotos[prevIndex]);
      }
    }
  }, [lightboxPhoto, categoryFilteredPhotos]);

  // Keyboard navigation
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

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (lightboxPhoto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxPhoto]);

  return (
    <div className="w-full bg-[#F8F6F3] min-h-[70vh] md:min-h-screen pt-32 pb-24 px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Header */}
        <header className="mb-12 md:mb-16">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-500 font-bold mb-4">
            06 — GALERI
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-6 leading-[1.1]">
            Fragmen kehidupan<br className="hidden md:block" /> Desa Air Putih.
          </h1>
          <p className="text-stone-600 text-sm md:text-base max-w-xl">
            Potongan kecil dari kehidupan, ruang, dan orang-orang yang menghidupkan Desa Air Putih.
          </p>
        </header>



        {/* Filter */}
        <nav className="mb-12 md:mb-16 overflow-x-auto no-scrollbar pb-2">
          <ul className="flex items-center gap-2 w-max">
            {CATEGORIES.map(cat => (
              <li key={cat}>
                <button
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 text-[10px] md:text-xs uppercase tracking-[0.1em] font-medium rounded-full transition-colors border ${
                    activeCategory === cat 
                      ? 'bg-stone-900 text-white border-stone-900' 
                      : 'bg-transparent text-stone-500 border-transparent hover:border-stone-300 hover:text-stone-900'
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* LANDSCAPE SECTION */}
        {landscapePhotos.length > 0 && (
          <section className="mb-16 md:mb-24">
            <h2 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-400 font-bold mb-6">
              LANDSCAPE
            </h2>
            <motion.div 
              layout
              className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6"
            >
              <AnimatePresence mode="popLayout">
                {landscapePhotos.map((photo, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    key={photo.id}
                    onClick={() => openLightbox(photo)}
                    className="relative overflow-hidden cursor-pointer group bg-stone-200 aspect-[4/3] border border-stone-200/50"
                  >
                    <img 
                      src={photo.src}
                      alt={photo.alt}
                      loading={index < 4 ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex flex-col justify-end p-6 pointer-events-none">
                      <p className="text-white font-serif text-lg">{photo.category} · Air Putih</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </section>
        )}

        {/* PORTRAIT SECTION */}
        {portraitPhotos.length > 0 && (
          <section className="mb-16 md:mb-24">
            <h2 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-400 font-bold mb-6">
              PORTRAIT
            </h2>
            <motion.div 
              layout
              className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 lg:gap-6"
            >
              <AnimatePresence mode="popLayout">
                {portraitPhotos.map((photo, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
                    key={photo.id}
                    onClick={() => openLightbox(photo)}
                    className="relative overflow-hidden cursor-pointer group bg-stone-200 aspect-[3/4] border border-stone-200/50"
                  >
                    <img 
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex flex-col justify-end p-6 pointer-events-none">
                      <p className="text-white font-serif text-base leading-tight">{photo.category}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </section>
        )}

        {/* Load More */}
        {visibleCount < categoryFilteredPhotos.length && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={handleLoadMore}
              className="px-8 py-3 border border-stone-300 text-stone-600 text-xs uppercase tracking-[0.2em] font-bold hover:bg-stone-900 hover:text-white transition-colors"
            >
              Tampilkan Lebih Banyak ({categoryFilteredPhotos.length - visibleCount})
            </button>
          </div>
        )}

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
