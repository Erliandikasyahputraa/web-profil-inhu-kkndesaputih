import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RootLayout } from './layout/RootLayout';
import { ROUTES } from './constants/routes';

import { HomePage } from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import { PemerintahanPage } from './pages/PemerintahanPage';
import { GalleryPage } from './pages/GalleryPage';
import { KknPage } from './pages/KknPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
        {/* Phase 3 Implementation Pages */}
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.PROFIL} element={<ProfilePage />} />
        <Route path={ROUTES.PEMERINTAHAN} element={<PemerintahanPage />} />
        <Route path={ROUTES.GALERI} element={<GalleryPage />} />
        <Route path={ROUTES.KKN} element={<KknPage />} />
        
        {/* Legacy Routes Redirects */}
        <Route path={ROUTES.GEOGRAFI} element={<Navigate to={ROUTES.PROFIL} replace />} />
        <Route path={ROUTES.POTENSI} element={<Navigate to={ROUTES.PROFIL} replace />} />
        <Route path={ROUTES.INFORMASI} element={<Navigate to={ROUTES.PEMERINTAHAN} replace />} />

        {/* Catch-all 404 Route */}
        <Route path="*" element={
          <main className="h-[70vh] flex flex-col items-center justify-center">
            <h1 className="font-serif text-4xl text-brand-primary mb-4">404</h1>
            <p className="font-body text-muted">Halaman tidak ditemukan.</p>
          </main>
        } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
