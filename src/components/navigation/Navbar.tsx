import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { Container } from '@/components/ui';
import { Overline } from '@/components/typography';

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-stone-200/50">
      <Container className="flex items-center justify-between h-16">
        <Link to={ROUTES.HOME} className="hover:opacity-80 transition-opacity">
          <Overline className="text-foreground tracking-widest">Desa Air Putih</Overline>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link to={ROUTES.SEJARAH} className="text-sm font-medium hover:text-brand-accent transition-colors">Sejarah</Link>
          <Link to={ROUTES.POTENSI} className="text-sm font-medium hover:text-brand-accent transition-colors">Potensi</Link>
          <Link to={ROUTES.GALERI} className="text-sm font-medium hover:text-brand-accent transition-colors">Galeri</Link>
        </nav>
      </Container>
    </header>
  );
}
