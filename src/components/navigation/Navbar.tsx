import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { Container } from '@/components/ui';
import { Overline } from '@/components/typography';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-stone-200/50">
      <Container className="flex items-center justify-between h-16">
        <Link to={ROUTES.HOME} className="hover:opacity-80 transition-opacity">
          <Overline className="text-foreground tracking-widest">Desa Air Putih</Overline>
        </Link>
        <button 
          className="md:hidden p-2 text-foreground" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <nav className="hidden md:flex gap-8">
          <Link to={ROUTES.SEJARAH} className="text-sm font-medium hover:text-brand-accent transition-colors">Sejarah</Link>
          <Link to={ROUTES.POTENSI} className="text-sm font-medium hover:text-brand-accent transition-colors">Potensi</Link>
          <Link to={ROUTES.GALERI} className="text-sm font-medium hover:text-brand-accent transition-colors">Galeri</Link>
        </nav>
      </Container>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-stone-200/50 bg-background/95 backdrop-blur-md absolute w-full left-0">
          <Container className="flex flex-col space-y-4 py-6">
            <Link to={ROUTES.SEJARAH} onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-brand-accent transition-colors">Sejarah</Link>
            <Link to={ROUTES.POTENSI} onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-brand-accent transition-colors">Potensi</Link>
            <Link to={ROUTES.GALERI} onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-brand-accent transition-colors">Galeri</Link>
          </Container>
        </div>
      )}
    </header>
  );
}
