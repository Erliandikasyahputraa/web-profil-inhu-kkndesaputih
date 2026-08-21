export function KknPrograms() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        <div className="w-full md:w-3/12 md:sticky md:top-32">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-500 font-bold mb-1">
            02
          </p>
          <p className="font-serif text-2xl text-stone-900">
            PROKER INTI
          </p>
        </div>
        
        <div className="w-full md:w-9/12 lg:w-8/12 flex flex-col">
          
          {/* Program 1 */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 border-b border-stone-300 pb-12 mb-12">
            <div className="w-8 shrink-0">
              <span className="font-mono text-stone-400">01</span>
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-2xl text-stone-900 mb-4">WEB DESA</h3>
              <p className="text-stone-700 leading-relaxed mb-6">
                Membangun profil digital Desa Air Putih agar informasi desa mudah diakses publik.
              </p>
              <ul className="flex flex-col space-y-2 text-stone-600 text-sm">
                <li className="flex gap-3"><span className="text-stone-400">—</span> Profil & potensi desa</li>
                <li className="flex gap-3"><span className="text-stone-400">—</span> Informasi pelayanan warga</li>
                <li className="flex gap-3"><span className="text-stone-400">—</span> Publikasi kegiatan desa</li>
              </ul>
            </div>
          </div>

          {/* Program 2 */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 border-b border-stone-300 pb-12 mb-12">
            <div className="w-8 shrink-0">
              <span className="font-mono text-stone-400">02</span>
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-2xl text-stone-900 mb-4">PACKAGING JAMUR TIRAM</h3>
              <p className="text-stone-700 leading-relaxed mb-6">
                Mendesain ulang kemasan produk jamur tiram warga untuk menaikkan nilai jual dan daya saing pasar.
              </p>
              <ul className="flex flex-col space-y-2 text-stone-600 text-sm">
                <li className="flex gap-3"><span className="text-stone-400">—</span> Desain label & kemasan</li>
                <li className="flex gap-3"><span className="text-stone-400">—</span> Standar branding produk</li>
                <li className="flex gap-3"><span className="text-stone-400">—</span> Pendampingan pelaku UMKM</li>
              </ul>
            </div>
          </div>

          {/* Program 3 */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 border-b border-stone-300 pb-12 mb-12">
            <div className="w-8 shrink-0">
              <span className="font-mono text-stone-400">03</span>
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-2xl text-stone-900 mb-4">SOSIALISASI & EDUKASI</h3>
              <p className="text-stone-700 leading-relaxed mb-6">
                Rangkaian kegiatan edukatif untuk anak-anak dan masyarakat desa.
              </p>
              <ul className="flex flex-col space-y-2 text-stone-600 text-sm">
                <li className="flex gap-3"><span className="text-stone-400">—</span> Eksperimen gunung meletus (TK/RA)</li>
                <li className="flex gap-3"><span className="text-stone-400">—</span> Kolase sampah plastik</li>
                <li className="flex gap-3"><span className="text-stone-400">—</span> Edukasi pernikahan dini</li>
                <li className="flex gap-3"><span className="text-stone-400">—</span> Edukasi stop Bullying</li>
                <li className="flex gap-3"><span className="text-stone-400">—</span> Pendidikan karakter</li>
              </ul>
            </div>
          </div>

          {/* Additional Activities */}
          <div className="pt-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-6">
              PROGRAM PENDUKUNG
            </p>
            <ul className="flex flex-col space-y-3 text-stone-700">
              <li className="flex gap-3 items-start"><span className="text-stone-400 mt-1">+</span> Kegiatan tambahan: Mengajar Di Sekolah dan Maghrib Mengaji</li>
              <li className="flex gap-3 items-start"><span className="text-stone-400 mt-1">+</span> Kegiatan tambahan: Perayaan HUT RI ke-81 tingkat kecamatan</li>
              <li className="flex gap-3 items-start"><span className="text-stone-400 mt-1">+</span> Kegiatan tambahan: Membuat Dan Merenovasi Plang Jalan Di Desa Air Putih</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
