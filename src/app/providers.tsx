import { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <HelmetProvider>
      {/* Additional providers like ThemeProvider, QueryClientProvider, etc. go here in the future */}
      {children}
    </HelmetProvider>
  );
}
