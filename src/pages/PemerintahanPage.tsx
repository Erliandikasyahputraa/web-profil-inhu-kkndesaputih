import { PageMetadata } from '@/components/common';
import { EditorialImage } from '@/components/ui';
export function PemerintahanPage() {
  return (
    <>
      <PageMetadata 
        title="Pemerintahan & Informasi | Desa Air Putih" 
        description="Struktur pemerintahan, pelayanan publik, dan informasi terkini di Desa Air Putih." 
      />
      <main className="flex-1 flex flex-col bg-[#F8F6F3] min-h-[70vh] md:min-h-screen">
        
        {/* HERO SECTION - GAYA PROFIL/BERANDA */}
        <section className="w-full bg-[#1A1A1A] relative min-h-[70vh] md:min-h-screen md:min-h-[85vh] flex items-center overflow-hidden">
          {/* Background Image with Gradient Fade */}
          <div className="absolute inset-0 z-0">
            <EditorialImage 
              image={{ src: '/images/pemerintahan/pemerintahan_hero_01.webp', alt: 'Pemerintahan Desa Air Putih' }}
              preset="custom"
              overlay="none"
              className="w-full h-full object-cover object-right md:object-center opacity-70 md:w-3/4 md:absolute md:right-0 grayscale-[0.2]"
            />
            {/* Gradient to blend image into the dark background on the left and bottom */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent md:via-[#1A1A1A]/90 md:to-transparent" />
          </div>

          <div className="max-w-6xl mx-auto w-full relative z-10 px-6 pt-32 pb-24 md:py-32 flex flex-col justify-end md:justify-center h-full">
            <div className="w-full md:w-3/5 lg:w-1/2 flex flex-col gap-6 md:gap-8 mt-auto md:mt-0">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/50 font-bold">
                GOVERNANCE & INFORMATION
              </p>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-[4.5rem] leading-[1.1] tracking-tight text-white">
                Penggerak<br />roda desa &<br />transparansi.
              </h1>
              <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-sm md:max-w-md">
                Pemerintah Desa Air Putih berkomitmen untuk melayani masyarakat, menjaga ketertiban, dan menyediakan informasi publik yang terbuka dan dapat diakses oleh semua.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: VISI & MISI PELAYANAN */}
        <section className="w-full bg-[#EBE7E0] py-20 md:py-32">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 text-center">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-stone-500 mb-8">
              PRINSIP PELAYANAN
            </p>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-stone-900 leading-[1.3] max-w-4xl mx-auto italic">
              "Menjadi pelayan masyarakat yang tanggap, transparan, dan berakar teguh pada nilai-nilai gotong royong."
            </h2>
          </div>
        </section>

        {/* SECTION 01: STRUKTUR PEMERINTAHAN (GAMBAR) */}
        <section className="w-full bg-[#F8F6F3] pt-20 md:pt-32 pb-20 md:pb-32">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
            <div className="flex flex-col gap-8 md:gap-16 items-center">
              <div className="w-full text-center">
                <h2 className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-stone-500 mb-4">
                  01 — STRUKTUR PEMERINTAHAN
                </h2>
                <h3 className="font-serif text-3xl md:text-4xl text-stone-900 leading-tight mb-6">
                  Penggerak roda desa.
                </h3>
                <p className="text-stone-700 leading-relaxed max-w-2xl mx-auto">
                  Dipimpin oleh Kepala Desa dan dibantu oleh perangkat desa lainnya, pemerintahan beroperasi untuk memastikan seluruh aspek administratif dan sosial berjalan dengan baik.
                </p>
              </div>

              <div className="w-full max-w-5xl mx-auto mt-8 md:mt-12 overflow-x-auto">
                <img 
                  src="/images/pemerintahan/struktur-perangkat-desa.svg" 
                  alt="Struktur Organisasi Pemerintahan Desa Air Putih"
                  className="w-full h-auto min-w-[600px] md:min-w-0 object-contain"
                  onError={(e) => {
                    // Fallback to png if svg fails to load
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/images/pemerintahan/struktur-perangkat-desa.webp';
                  }}
                />
              </div>
            </div>
          </div>
        </section>



        {/* SECTION 02: LAYANAN PUBLIK */}
        <section className="w-full bg-[#F8F6F3] pt-20 pb-24 md:pt-32 md:pb-40">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              
              <div className="w-full lg:w-4/12">
                <h2 className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-stone-400 mb-4">
                  02 — LAYANAN PUBLIK
                </h2>
                <h3 className="font-serif text-3xl md:text-4xl text-stone-900 leading-tight mb-6">
                  Akses layanan administrasi.
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Kantor Kepala Desa Air Putih melayani kebutuhan administrasi kependudukan dan surat-menyurat pada hari kerja.
                </p>
              </div>

              <div className="w-full lg:w-4/12">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-900 mb-6 border-b border-stone-200 pb-2">
                  JAM OPERASIONAL
                </h4>
                <ul className="flex flex-col gap-3 text-sm md:text-base text-stone-600">
                  <li className="flex justify-between items-center">
                    <span>Senin - Kamis</span>
                    <span className="font-mono text-sm">08.00 - 15.00 WIB</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Jumat</span>
                    <span className="font-mono text-sm">08.00 - 11.30 WIB</span>
                  </li>
                  <li className="flex justify-between items-center text-stone-400">
                    <span>Sabtu - Minggu</span>
                    <span className="font-mono text-sm">Tutup</span>
                  </li>
                </ul>
              </div>

              <div className="w-full lg:w-4/12">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-900 mb-6 border-b border-stone-200 pb-2">
                  LAYANAN UTAMA
                </h4>
                <ul className="flex flex-col gap-3 text-sm md:text-base text-stone-600">
                  <li className="flex gap-3">
                    <span className="text-stone-400">•</span>
                    <span>Pembuatan Surat Pengantar KTP / KK</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-stone-400">•</span>
                    <span>Surat Keterangan Domisili</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-stone-400">•</span>
                    <span>Surat Keterangan Usaha</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-stone-400">•</span>
                    <span>Surat Keterangan Tidak Mampu</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-stone-400">•</span>
                    <span>Pengurusan Akta Kelahiran & Kematian</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}
