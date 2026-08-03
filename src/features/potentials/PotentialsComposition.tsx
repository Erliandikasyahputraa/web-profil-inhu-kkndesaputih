import { Scene01Abundance } from './sections/Scene01Abundance';
import { Scene02Agriculture } from './sections/Scene02Agriculture';
import { Scene03Plantation } from './sections/Scene03Plantation';
import { Scene04to06Grid } from './sections/Scene04to06Grid';
import { Scene07Reflection } from './sections/Scene07Reflection';

export function PotentialsComposition() {
  return (
    <div className="w-full flex flex-col bg-[#F9F8F6]">
      <Scene01Abundance />
      <Scene02Agriculture />
      <Scene03Plantation />
      <Scene04to06Grid />
      <Scene07Reflection />
    </div>
  );
}
