export function KknAbout() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        <div className="w-full md:w-3/12 md:sticky md:top-32">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-500 font-bold mb-1">
            01
          </p>
          <p className="font-serif text-2xl text-stone-900">
            TENTANG KKN
          </p>
        </div>
        <div className="w-full md:w-9/12 lg:w-7/12">
          <div className="prose prose-stone mb-12">
            <p className="text-stone-800 text-lg md:text-xl leading-relaxed mb-6 font-serif">
              "Program KKN kelompok ini berjalan hingga Agustus 2026, berfokus pada tiga arah kerja utama: penguatan identitas digital desa, peningkatan nilai jual produk UMKM lokal, dan edukasi masyarakat terkhusus kepada siswa-siswi sekolah baik TK hingga SMA."
            </p>
          </div>
          <div className="w-full relative bg-stone-200 overflow-hidden max-h-[260px] md:max-h-[500px]" style={{ aspectRatio: '3/2' }}>
            <img 
              src="/images/kkn/kkn_activity_04.webp" 
              alt="Interaksi KKN dengan anak-anak Desa Air Putih" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
