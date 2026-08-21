import { Scene01Identity } from './sections/Scene01Identity';
import { Scene02Beginning } from './sections/Scene02Beginning';
import { Scene03Geografi } from './sections/Scene03Geografi';
import { Scene03People } from './sections/Scene03People';

export function ProfileComposition() {
  return (
    <main className="bg-[#F8F6F3] min-h-[70vh] md:min-h-screen">
      <Scene01Identity />
      <Scene02Beginning />
      <Scene03Geografi />
      <Scene03People />
    </main>
  );
}
