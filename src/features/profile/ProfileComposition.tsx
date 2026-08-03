import { Scene01Identity } from './sections/Scene01Identity';
import { Scene02Beginning } from './sections/Scene02Beginning';
import { Scene03People } from './sections/Scene03People';
import { Scene04Values } from './sections/Scene04Values';
import { Scene05IdentityToday } from './sections/Scene05IdentityToday';

export function ProfileComposition() {
  return (
    <main className="bg-stone-50 min-h-screen">
      <Scene01Identity />
      <Scene02Beginning />
      <Scene03People />
      <Scene04Values />
      <Scene05IdentityToday />
    </main>
  );
}
