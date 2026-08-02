import { profileContent } from '@/content/profile';
import { Hero } from './sections/Hero';
import { Welcome } from './sections/Welcome';
import { History } from './sections/History';
import { Vision } from './sections/Vision';
import { Philosophy } from './sections/Philosophy';
export function ProfileComposition() {
  return (
    <main>
      <Hero content={profileContent.hero} />
      <Welcome content={profileContent.welcome} />
      <History content={profileContent.history} />
      <Vision content={profileContent.vision} />
      <Philosophy content={profileContent.philosophy} />
    </main>
  );
}
