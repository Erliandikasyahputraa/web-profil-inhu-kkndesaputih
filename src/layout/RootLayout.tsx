import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navbar } from '../components/navigation/Navbar';

/**
 * RootLayout provides the base structure for the entire application.
 * It includes an ErrorBoundary (to be implemented at the router level) and Suspense boundaries.
 */
export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-brand-accent/30 selection:text-brand-primary">
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-background animate-pulse" />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
