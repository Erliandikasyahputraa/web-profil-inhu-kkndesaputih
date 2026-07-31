import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import { RootLayout } from './layout/RootLayout';

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
          <Route path={ROUTES.HOME} element={<Placeholder title="Beranda (Home)" />} />
          <Route path={ROUTES.SEJARAH} element={<Placeholder title="Sejarah" />} />
          <Route path={ROUTES.GALERI} element={<Placeholder title="Galeri" />} />
          <Route path={ROUTES.POTENSI} element={<Placeholder title="Potensi Desa" />} />
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
