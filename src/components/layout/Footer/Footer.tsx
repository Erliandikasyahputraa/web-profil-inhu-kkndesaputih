import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

export function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] pt-16 md:pt-32 pb-12 px-6 flex flex-col items-center overflow-hidden">
      
      {/* Footer Navigation & Information */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 border-t border-white/10 pt-12 md:pt-24 relative z-20">
        
        <div className="md:col-span-1">
          <Link to="/" className="text-white hover:opacity-70 transition-opacity">
            <span className="font-serif text-lg md:text-xl uppercase tracking-[0.2em] font-medium">Desa Air Putih</span>
          </Link>
          <p className="text-[10px] text-white/50 mt-4 leading-relaxed max-w-xs uppercase tracking-widest">
            Sebuah dokumenter interaktif<br />di tepi Indragiri.
          </p>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-6 font-bold">Indeks</h4>
          <ul className="flex flex-col gap-4">
            <li><Link to={ROUTES.HOME} className="text-[11px] uppercase tracking-widest text-white/80 hover:text-white transition-colors">Home</Link></li>
            <li><Link to={ROUTES.PROFIL} className="text-[11px] uppercase tracking-widest text-white/80 hover:text-white transition-colors">Profil Desa</Link></li>
            <li><Link to={ROUTES.KKN} className="text-[11px] uppercase tracking-widest text-white/80 hover:text-white transition-colors">KKN</Link></li>
            <li><Link to={ROUTES.GALERI} className="text-[11px] uppercase tracking-widest text-white/80 hover:text-white transition-colors">Galeri</Link></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-6 font-bold">Kontak</h4>
          <ul className="flex flex-col gap-4 text-[11px] uppercase tracking-widest text-white/80 leading-relaxed">
            <li>Jl. Lintas Air Putih No. 01</li>
            <li>Lubuk Batu Jaya, INHU</li>
            <li>(+62) 812-3456-7890</li>
            <li>info@airputih.desa.id</li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-6 font-bold">Terhubung</h4>
          <ul className="flex flex-col gap-4 text-[11px] uppercase tracking-widest text-white/80">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                YouTube
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* 4. Tiny copyright */}
      <div className="w-full max-w-6xl mx-auto mt-16 md:mt-32 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5 pt-8 relative z-20">
        <p className="text-[9px] text-white/30 uppercase tracking-widest">
          &copy; 2026 Desa Air Putih.
        </p>
        <p className="text-[9px] text-white/30 uppercase tracking-widest text-center md:text-right">
          Dirancang sebagai dokumenter digital.
        </p>
      </div>

    </footer>
  );
}
