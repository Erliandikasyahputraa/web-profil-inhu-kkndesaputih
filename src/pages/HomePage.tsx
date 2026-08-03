import { PageMetadata } from '@/components/common';
import { HomeComposition } from '../features/home';

export function HomePage() {
  return (
    <>
      <PageMetadata 
        title="Jejak Waktu di Tepian Indragiri | Desa Air Putih" 
        description="Sebuah dokumenter interaktif tentang kehidupan, harapan, dan harmoni masyarakat Desa Air Putih di tepi sungai Indragiri." 
      />
      <HomeComposition />
    </>
  );
}
