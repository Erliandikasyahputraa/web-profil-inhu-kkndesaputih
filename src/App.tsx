import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import { RootLayout } from './layout/RootLayout';
import { HomePage } from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import { GeographyPage } from './pages/GeographyPage';
import { GovernancePage } from './pages/GovernancePage';
import { PotentialsPage } from './pages/PotentialsPage';
import { InformationPage } from './pages/InformationPage';

// Temporary placeholder for features until we build them in Phase 3 & 4
function Placeholder({ title }: { title: string }) {
  return (
    <main className="flex-1 flex items-center justify-center min-h-[50vh]">
      <h1 className="font-heading text-4xl text-brand-primary">{title}</h1>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.PROFIL} element={<ProfilePage />} />
          <Route path={ROUTES.GEOGRAFI} element={<GeographyPage />} />
          <Route path={ROUTES.PEMERINTAHAN} element={<GovernancePage />} />
          <Route path={ROUTES.POTENSI} element={<PotentialsPage />} />
          <Route path={ROUTES.INFORMASI} element={<InformationPage />} />
          <Route path={ROUTES.GALERI} element={<Placeholder title="Galeri" />} />
          <Route path={ROUTES.ORGANISASI} element={<Placeholder title="Organisasi" />} />
          <Route path={ROUTES.DIGITAL_TWIN} element={<Placeholder title="Digital Twin" />} />
          <Route path={ROUTES.TENTANG} element={<Placeholder title="Tentang Kami" />} />
          <Route path={ROUTES.KONTAK} element={<Placeholder title="Kontak" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
