import { Scene01Office } from './sections/Scene01Office';
import { Scene02Trust } from './sections/Scene02Trust';
import { Scene03People } from './sections/Scene03People';
import { Scene04WorkingTogether } from './sections/Scene04WorkingTogether';
import { Scene05Transparency } from './sections/Scene05Transparency';
import { Scene06Reflection } from './sections/Scene06Reflection';

export function GovernanceComposition() {
  return (
    <div className="w-full flex flex-col bg-[#F2EFE9]">
      <Scene01Office />
      <Scene02Trust />
      <Scene03People />
      <Scene04WorkingTogether />
      <Scene05Transparency />
      <Scene06Reflection />
    </div>
  );
}
