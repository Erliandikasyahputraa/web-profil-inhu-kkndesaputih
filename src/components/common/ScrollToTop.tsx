import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop provides centralized SPA scroll management.
 * Whenever the route pathname changes, it instantly scrolls to (0,0)
 * before browser paint, preventing stale scroll positions from previous routes.
 * If a URL hash is present, it scrolls directly to the target element.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  // Configure history scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    // If hash is present (e.g. #tentang-kkn, #struktur-organisasi, #layanan-administrasi)
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId) || document.querySelector(hash);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      // Fallback timeout for dynamically rendered elements
      const timer = setTimeout(() => {
        const delayedElement = document.getElementById(targetId) || document.querySelector(hash);
        if (delayedElement) {
          delayedElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);

      return () => clearTimeout(timer);
    }

    // Standard route transition: Instant jump to top (0,0) before paint
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    document.documentElement.scrollTop = 0;
    if (document.body) {
      document.body.scrollTop = 0;
    }
  }, [pathname, hash]);

  return null;
}
