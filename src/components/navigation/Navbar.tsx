import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

const DESKTOP_LINKS = [
  { label: 'BERANDA', href: ROUTES.HOME },
  { label: 'PROFIL DESA', href: ROUTES.PROFIL },
  { label: 'PEMERINTAHAN', href: ROUTES.PEMERINTAHAN },
  { label: 'GALERI', href: ROUTES.GALERI },
  { label: 'KKN', href: ROUTES.KKN },
];

const NAVIGATION_GROUPS = [
  {
    label: 'JOURNEY',
    items: [
      { id: '01', label: 'Beranda', href: ROUTES.HOME },
      { id: '02', label: 'Profil Desa', href: ROUTES.PROFIL },
    ]
  },
  {
    label: 'VILLAGE',
    items: [
      { id: '03', label: 'Pemerintahan', href: ROUTES.PEMERINTAHAN },
    ]
  },
  {
    label: 'EXPLORE',
    items: [
      { id: '04', label: 'Galeri', href: ROUTES.GALERI },
      { id: '05', label: 'KKN 2026', href: ROUTES.KKN },
    ]
  }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let animationDelayCounter = 0; 

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-700 ${
          scrolled 
            ? 'bg-[#F2EFE9]/95 backdrop-blur-md shadow-sm border-b border-[#E5E0D8]' 
            : 'bg-[#F2EFE9] border-b border-[#E5E0D8]/50'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 h-12 md:h-14 max-w-[1440px] mx-auto transition-all duration-700">
          <Link to={ROUTES.HOME} className="text-stone-900 hover:opacity-70 transition-opacity flex items-center gap-3">
            <img 
              src="/logo_inhu.webp" 
              alt="Logo Kabupaten Indragiri Hulu" 
              width={32}
              height={23}
              className="w-6 h-auto md:w-8 aspect-[256/182]" 
            />
            <span className="font-serif text-sm md:text-base uppercase tracking-[0.2em] font-medium">Desa Air Putih</span>
          </Link>
          
          <div className="flex items-center gap-10 lg:gap-12">
            <nav className="hidden xl:flex items-center gap-8">
              {DESKTOP_LINKS.map(link => {
                const isActive = location.pathname === link.href;
                return (
                  <Link 
                    key={link.href}
                    to={link.href} 
                    onClick={(e) => {
                      if (isActive) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="relative text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-500 text-stone-900 group py-2"
                  >
                    <span className={`transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}>
                      {link.label}
                    </span>
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-stone-900 block" />
                    )}
                  </Link>
                )
              })}
            </nav>

            <button 
              onClick={() => setIsOpen(true)}
              className="text-stone-900 opacity-50 hover:opacity-100 transition-opacity flex flex-col justify-center gap-[4px] w-5 h-5 group"
              aria-label="Open menu"
            >
              <span className="w-full h-[1px] bg-stone-900 block transition-transform group-hover:scale-x-110 origin-right" />
              <span className="w-4/5 h-[1px] bg-stone-900 block transition-transform group-hover:scale-x-110 origin-right self-end" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content jump due to fixed header */}
      <div className="h-12 md:h-14 w-full bg-transparent" />

      {/* Background fade overlay */}
      <div 
        className={`fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 transition-opacity duration-1000 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Panel sliding from top (Does not occupy full height, acts as an index) */}
      <div 
        className={`fixed top-0 left-0 right-0 bg-[#F2EFE9] z-[60] shadow-2xl transition-transform duration-[1000ms] ease-[cubic-bezier(0.77,0,0.175,1)] flex flex-col max-h-[75vh] rounded-b-[2rem] overflow-hidden ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="px-6 md:px-10 h-12 md:h-14 flex justify-between items-center w-full border-b border-[#E5E0D8]/40 max-w-[1440px] mx-auto">
          <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">TABLE OF CONTENTS</span>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-stone-900 opacity-50 hover:opacity-100 transition-opacity flex items-center justify-center w-5 h-5 relative"
            aria-label="Close menu"
          >
            <span className="w-full h-[1px] bg-stone-900 block absolute rotate-45 transition-transform duration-500" />
            <span className="w-full h-[1px] bg-stone-900 block absolute -rotate-45 transition-transform duration-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto w-full">
          <nav className="flex flex-col pt-10 pb-16 md:pt-16 md:pb-20 px-8 md:px-16 max-w-4xl mx-auto w-full">
            <div className="flex flex-col gap-12 md:gap-16">
              {NAVIGATION_GROUPS.map((group) => (
                <div key={group.label} className="flex flex-col gap-6">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-stone-400 border-b border-stone-300 pb-2 mb-2">
                    {group.label}
                  </span>
                  <ul className="flex flex-col gap-4">
                    {group.items.map((chapter) => {
                      const isActive = location.pathname === chapter.href;
                      const delay = 0.1 + (animationDelayCounter++) * 0.04;
                      
                      return (
                        <li key={chapter.href} className="overflow-hidden flex items-baseline gap-3">
                          <span 
                            className="font-serif text-sm text-stone-400"
                            style={{
                              transform: isOpen ? 'translateY(0)' : 'translateY(150%)',
                              opacity: isOpen ? 1 : 0,
                              transition: `transform 1s cubic-bezier(0.77, 0, 0.175, 1) ${delay}s, opacity 1s cubic-bezier(0.77, 0, 0.175, 1) ${delay}s`
                            }}
                          >
                            {chapter.id}
                          </span>
                          <Link 
                            to={chapter.href}
                            onClick={(e) => {
                              if (isActive) {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                setIsOpen(false);
                              }
                            }}
                            className={`inline-block font-serif transition-colors duration-500 ${
                              isActive 
                                ? 'text-stone-900 text-2xl md:text-3xl' 
                                : 'text-stone-500 hover:text-stone-900 text-xl md:text-2xl'
                            }`}
                            style={{
                              transform: isOpen ? 'translateY(0)' : 'translateY(150%)',
                              opacity: isOpen ? 1 : 0,
                              transition: `transform 1s cubic-bezier(0.77, 0, 0.175, 1) ${delay + 0.02}s, opacity 1s cubic-bezier(0.77, 0, 0.175, 1) ${delay + 0.02}s`
                            }}
                          >
                            {chapter.label}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
