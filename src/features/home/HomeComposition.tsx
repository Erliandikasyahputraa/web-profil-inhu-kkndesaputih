import { HomeHero } from './components/HomeHero';
import { HomeStats } from './components/HomeStats';
import { HomeAbout } from './components/HomeAbout';
import { HomeQuickAccess } from './components/HomeQuickAccess';
import { HomeClosing } from './components/HomeClosing';

export function HomeComposition() {
  return (
    <main className="w-full bg-[#FAF8F5] text-stone-900 overflow-hidden pt-20 md:pt-28 flex flex-col">
      <HomeHero />
      <HomeStats />
      <HomeAbout />
      <HomeQuickAccess />
      <HomeClosing />
    </main>
  );
}
