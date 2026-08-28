import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navbar } from '@/components/navigation';
import { Footer } from '@/components/layout';
import { ScrollToTop } from '@/components/common';

/**
 * RootLayout provides the base structure for the entire application.
 * It includes centralized ScrollToTop, navigation, Suspense boundaries, and Footer.
 */
export function RootLayout() {
  return (
    <div className="min-h-[70vh] md:min-h-screen flex flex-col bg-background text-foreground selection:bg-brand-accent/30 selection:text-brand-primary">
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<div className="flex-1 bg-background animate-pulse" />}>
        <main className="flex-1 flex flex-col">
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </div>
  );
}
