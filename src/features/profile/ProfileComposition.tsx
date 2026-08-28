import { ProfileHero } from './sections/ProfileHero';
import { ProfileVision } from './sections/ProfileVision';
import { ProfileAbout } from './sections/ProfileAbout';
import { ProfileHistory } from './sections/ProfileHistory';
import { ProfileData } from './sections/ProfileData';
import { ProfilePotensi } from './sections/ProfilePotensi';
import { ProfileQuote } from './sections/ProfileQuote';

export function ProfileComposition() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen pt-14 md:pt-16 flex flex-col">
      <ProfileHero />
      <ProfileVision />
      <ProfileAbout />
      <ProfileHistory />
      <ProfileData />
      <ProfilePotensi />
      <ProfileQuote />
    </main>
  );
}
