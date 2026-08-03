import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { RootLayout } from '@/layout/RootLayout';

// Temporary placeholder for features until we build them
function Placeholder({ title }: { title: string }) {
  return (
    <main className="flex-1 flex items-center justify-center min-h-[50vh]">
      <h1 className="font-heading text-4xl text-brand-primary">{title}</h1>
    </main>
  );
}

// We will import HomePage from pages
// We will import HomePage from pages
import { HomePage } from '../pages/HomePage';
import { ProfilePage } from '../pages/ProfilePage';
import { GalleryPage } from '../pages/GalleryPage';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.PROFIL} element={<ProfilePage />} />
          <Route path={ROUTES.GALERI} element={<GalleryPage />} />
          <Route path={ROUTES.POTENSI} element={<Placeholder title="Potensi Desa" />} />
          <Route path={ROUTES.ORGANISASI} element={<Placeholder title="Organisasi" />} />
          <Route path={ROUTES.DIGITAL_TWIN} element={<Placeholder title="Digital Twin" />} />
          <Route path={ROUTES.TENTANG} element={<Placeholder title="Tentang Kami" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
