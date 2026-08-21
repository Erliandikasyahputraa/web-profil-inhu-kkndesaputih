export function KknHero() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
      <div className="flex flex-col items-center text-center pt-8 md:pt-16 pb-12 md:pb-16">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-500 font-bold mb-6">
          KULIAH KERJA NYATA · 2026
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-stone-900 mb-6 leading-tight">
          Desa Air Putih
        </h1>
        <p className="font-serif text-xl md:text-2xl text-stone-800 italic mb-6 max-w-lg mx-auto">
          "Mengabdi Dengan Hati, Menginspirasi Dengan Aksi"
        </p>
        <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10">
          Profil program Kuliah Kerja Nyata mahasiswa UIN Sultan Syarif Kasim Riau di Desa Air Putih — tiga proker inti untuk digitalisasi, ekonomi warga, dan edukasi masyarakat.
        </p>
        
        <div className="flex flex-col gap-2 text-[10px] md:text-xs uppercase tracking-[0.15em] text-stone-600 w-full max-w-4xl border-t border-b border-stone-200 py-4">
          <div className="flex flex-col md:flex-row justify-between w-full">
            <span><strong>Desa:</strong> Air Putih</span>
            <span><strong>Kecamatan:</strong> Lubuk Batu Jaya</span>
            <span><strong>Kabupaten:</strong> Indragiri Hulu</span>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:gap-12 w-full mt-2">
            <span><strong>Provinsi:</strong> Riau</span>
            <span><strong>Periode:</strong> Juli s.d. Agustus 2026</span>
          </div>
        </div>
      </div>
      
      <div className="w-full relative bg-stone-200 overflow-hidden" style={{ aspectRatio: '16/9', maxHeight: '50vh' }}>
        <img 
          src="/images/kkn/kkn_activity_07.jpg" 
          alt="Gotong Royong KKN Desa Air Putih" 
          className="w-full h-[50vh] md:h-full object-cover"
        />
      </div>
    </section>
  );
}
