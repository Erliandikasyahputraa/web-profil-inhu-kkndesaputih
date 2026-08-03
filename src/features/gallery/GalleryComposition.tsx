import { useEffect } from 'react';
import { Scene01ArchiveOpening } from './sections/Scene01ArchiveOpening';
import { Scene02CuratedCollection } from './sections/Scene02CuratedCollection';

export function GalleryComposition() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#F2EFE9] min-h-screen">
      <Scene01ArchiveOpening />
      <Scene02CuratedCollection />
    </div>
  );
}
