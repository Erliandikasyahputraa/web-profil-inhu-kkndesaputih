import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-[#1E3A2B] text-white pt-16 md:pt-20 pb-12 px-6 lg:px-12 flex flex-col items-center overflow-hidden border-t border-[#2A4E38]">
      
      {/* 5-Column Navigation & Information Grid */}
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 relative z-20">
        
        {/* Col 1: Brand & Description */}
        <div className="sm:col-span-2 lg:col-span-3 flex flex-col items-start">
          <Link to="/" className="flex items-center gap-3 mb-4 hover:opacity-90 transition-opacity">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center p-1.5 border border-white/20 shrink-0">
              <img 
                src="/logo_inhu.webp" 
                alt="Lambang Kabupaten Indragiri Hulu" 
                width={40}
                height={28}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-wider uppercase leading-tight">Desa Air Putih</span>
              <span className="text-[10px] text-emerald-200/80 font-mono tracking-widest uppercase">Kab. Indragiri Hulu · Riau</span>
            </div>
          </Link>
          
          <p className="text-xs text-emerald-100/80 leading-relaxed font-sans mb-6 max-w-sm">
            Website resmi Pemerintah Desa Air Putih. Ruang informasi, pelayanan publik, dokumentasi sejarah, dan keterbukaan transparansi desa.
          </p>

          <div className="flex items-center gap-3 text-emerald-200">
            <a 
              href="https://instagram.com/kkn.airputih.26" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
              aria-label="Instagram KKN Desa Air Putih"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a 
              href="https://tiktok.com/@kkn_desa.air.putih" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-xs font-mono font-bold text-white"
              aria-label="TikTok KKN Desa Air Putih"
            >
              TT
            </a>
          </div>
        </div>

        {/* Col 2: Menu Index */}
        <div className="lg:col-span-2">
          <h4 className="text-xs uppercase tracking-[0.2em] text-emerald-300 font-mono font-bold mb-4">
            Menu
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li><Link to={ROUTES.HOME} className="text-xs text-emerald-100/80 hover:text-white transition-colors">Beranda</Link></li>
            <li><Link to={ROUTES.PROFIL} className="text-xs text-emerald-100/80 hover:text-white transition-colors">Profil Desa</Link></li>
            <li><Link to={ROUTES.PEMERINTAHAN} className="text-xs text-emerald-100/80 hover:text-white transition-colors">Pemerintahan</Link></li>
            <li><Link to={ROUTES.GALERI} className="text-xs text-emerald-100/80 hover:text-white transition-colors">Galeri</Link></li>
            <li><Link to={ROUTES.KKN} className="text-xs text-emerald-100/80 hover:text-white transition-colors">KKN 2026</Link></li>
          </ul>
        </div>

        {/* Col 3: Kontak */}
        <div className="lg:col-span-3">
          <h4 className="text-xs uppercase tracking-[0.2em] text-emerald-300 font-mono font-bold mb-4">
            Kontak
          </h4>
          <ul className="flex flex-col gap-3 text-xs text-emerald-100/80 font-sans">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
              <span>Desa Air Putih, Kec. Lubuk Batu Jaya, Kab. Indragiri Hulu, Riau</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>(+62) 812-3456-7890</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>desaairputih26@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Col 4: Jam Layanan */}
        <div className="lg:col-span-2">
          <h4 className="text-xs uppercase tracking-[0.2em] text-emerald-300 font-mono font-bold mb-4">
            Jam Layanan
          </h4>
          <div className="flex flex-col gap-3 text-xs text-emerald-100/80 font-sans">
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Senin – Jumat</p>
                <p className="text-emerald-200/70">08.00 – 16.00 WIB</p>
              </div>
            </div>
            <div className="flex items-start gap-2 pl-6">
              <div>
                <p className="font-semibold text-white">Sabtu</p>
                <p className="text-emerald-200/70">08.00 – 12.00 WIB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Col 5: Lokasi Map Card */}
        <div className="lg:col-span-2 flex flex-col">
          <h4 className="text-xs uppercase tracking-[0.2em] text-emerald-300 font-mono font-bold mb-4">
            Lokasi
          </h4>
          <div className="w-full bg-[#172D21] border border-white/15 rounded-xl p-2 flex flex-col gap-2 shadow-sm">
            <div className="w-full h-20 rounded-lg overflow-hidden relative bg-stone-800">
              <img 
                src="/images/profil/peta_administrasi.png" 
                alt="Peta Desa Air Putih" 
                className="w-full h-full object-cover opacity-80"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <a 
              href="https://maps.google.com/?q=Desa+Air+Putih+Lubuk+Batu+Jaya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-1.5 px-2 bg-[#234A31] hover:bg-[#2C5C3D] text-white text-[10px] font-semibold rounded-lg text-center flex items-center justify-center gap-1 transition-colors"
            >
              <span>Buka Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full max-w-[1400px] mx-auto mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-emerald-200/60 font-sans">
        <p>
          &copy; 2026 Desa Air Putih. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link to="/kebijakan-privasi" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
          <span>·</span>
          <Link to="/syarat-ketentuan" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
        </div>
      </div>

    </footer>
  );
}
