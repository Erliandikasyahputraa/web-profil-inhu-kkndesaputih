import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<main className="p-8"><h1>Desa Air Putih Digital Experience</h1></main>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
