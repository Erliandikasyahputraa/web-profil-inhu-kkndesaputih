import { BookOpen, Sprout, TrendingUp, MapPin, Monitor, FileText, ExternalLink, Info } from 'lucide-react';
import { kknDocumentation } from '@/content/kkn/documentation';

const PROGRAM_CATEGORIES = [
  {
    icon: BookOpen,
    title: "Edukasi & Literasi",
    description: "Kegiatan belajar, bimbingan belajar, dan literasi anak-anak."
  },
  {
    icon: Sprout,
    title: "Lingkungan & Kesehatan",
    description: "Aksi kebersihan, penghijauan, dan edukasi hidup sehat."
  },
  {
    icon: TrendingUp,
    title: "Ekonomi & UMKM",
    description: "Pendampingan usaha kecil dan penguatan ekonomi warga."
  },
  {
    icon: MapPin,
    title: "Sosial & Budaya",
    description: "Kegiatan sosial, seni, budaya dan kepemudaan."
  },
  {
    icon: Monitor,
    title: "Digital & Media",
    description: "Dokumentasi, publikasi, dan edukasi digital desa."
  }
];

export function KknPrograms() {
  const { programs } = kknDocumentation;
  
  return (
    <section id="program-kerja" className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
      
      {/* PART 1: PROGRAM KERJA CATEGORIES */}
      <div className="mb-16 md:mb-24">
        <div className="inline-flex items-center px-3 py-1 bg-[#234A31]/10 text-[#234A31] text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
          PROGRAM KERJA
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mb-8">
          Program untuk Desa Air Putih
        </h2>

        {/* 5-Column Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {PROGRAM_CATEGORIES.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-stone-200/90 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base md:text-lg font-bold text-stone-900 mt-1">
                  {cat.title}
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed font-sans">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* PART 2: DOKUMENTASI & LAPORAN (9 GOOGLE DRIVE ENTRIES) */}
      <div>
        <div className="inline-flex items-center px-3 py-1 bg-[#234A31]/10 text-[#234A31] text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
          DOKUMENTASI & LAPORAN
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mb-8">
          Dokumentasi dalam & Laporan Kegiatan
        </h2>

        {/* 9 Document Tiles Grid (Desktop 9-grid or 3x3, Mobile 2-grid) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 md:gap-4">
          {programs.map((prog, idx) => (
            <a 
              key={idx}
              href={prog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-stone-200/90 rounded-2xl p-4 shadow-sm hover:border-[#234A31] hover:shadow-md transition-all flex flex-col items-center justify-between text-center group min-h-[160px] md:min-h-[170px]"
              aria-label={`Buka arsip ${prog.title} di Google Drive`}
            >
              {/* Document Icon in Green Badge */}
              <div className="w-9 h-9 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0 mb-2 group-hover:bg-[#234A31] group-hover:text-white transition-colors">
                <FileText className="w-4 h-4" />
              </div>

              {/* Title & Target */}
              <div className="my-auto">
                <h4 className="font-serif text-xs md:text-[13px] font-bold text-stone-900 line-clamp-2 leading-snug group-hover:text-[#234A31] transition-colors">
                  {prog.title}
                </h4>
                <p className="text-[10px] text-stone-500 font-sans line-clamp-1 mt-1">
                  {prog.target}
                </p>
              </div>

              {/* Google Drive Link Label */}
              <div className="inline-flex items-center gap-1 text-[10px] font-mono text-stone-400 group-hover:text-[#234A31] transition-colors mt-2">
                <span>Google Drive</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </div>
            </a>
          ))}
        </div>

        {/* Informational Callout Helper Banner */}
        <div className="bg-[#F5F2EC] border border-stone-200/90 rounded-xl p-3.5 flex items-center gap-2.5 text-xs text-stone-600 mt-6 shadow-sm">
          <Info className="w-4 h-4 text-[#234A31] shrink-0" />
          <span>Klik setiap dokumen untuk membuka berkas arsip resolusi penuh di Google Drive (tab baru).</span>
        </div>

      </div>

    </section>
  );
}
