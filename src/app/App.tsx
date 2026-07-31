import { Providers } from './providers';
import { AppRouter } from './router';
import { ErrorBoundary } from '@/components';

export default function App() {
  return (
    <ErrorBoundary>
      <Providers>
        <AppRouter />
      </Providers>
    </ErrorBoundary>
  );
}
