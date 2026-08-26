export function KknJejakKegiatan() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-12">
        <div className="w-full md:w-3/12">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-500 font-bold mb-1">
            03
          </p>
          <p className="font-serif text-2xl text-stone-900">
            JEJAK KEGIATAN
          </p>
        </div>
        <div className="w-full md:w-9/12 lg:w-7/12">
          <p className="font-serif text-xl md:text-2xl text-stone-800 italic">
            "Beberapa langkah kecil, beberapa cerita yang akan tinggal lebih lama."
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:gap-8">
        {/* Dominant Image */}
        <div className="w-full bg-stone-200 overflow-hidden relative max-h-[300px] md:max-h-[500px]" style={{ aspectRatio: '16/9' }}>
          <img 
            src="/images/kkn/kkn_activity_10.webp" 
            alt="Dokumentasi KKN Desa Air Putih" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Supporting Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="w-full bg-stone-200 overflow-hidden relative aspect-[4/3] max-h-[220px] md:max-h-none">
            <img 
              src="/images/kkn/kkn_activity_02.webp" 
              alt="Dokumentasi Edukasi" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full bg-stone-200 overflow-hidden relative aspect-[4/3] max-h-[220px] md:max-h-none">
            <img 
              src="/images/kkn/kkn_activity_08.webp" 
              alt="Dokumentasi Gotong Royong" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full bg-stone-200 overflow-hidden relative aspect-[4/3] max-h-[220px] md:max-h-none">
            <img 
              src="/images/kkn/kkn_activity_03.webp" 
              alt="Dokumentasi Interaksi Warga" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full bg-stone-200 overflow-hidden relative aspect-[4/3] max-h-[220px] md:max-h-none">
            <img 
              src="/images/kkn/kkn_activity_05.webp" 
              alt="Dokumentasi KKN" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
