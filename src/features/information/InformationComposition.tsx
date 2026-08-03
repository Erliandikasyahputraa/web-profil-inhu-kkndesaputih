import { Scene01WelcomeDesk } from './sections/Scene01WelcomeDesk';
import { Scene02Announcements } from './sections/Scene02Announcements';
import { Scene03Services } from './sections/Scene03Services';
import { Scene04Closing } from './sections/Scene04Closing';

export function InformationComposition() {
  return (
    <div className="w-full flex flex-col bg-[#F9F8F6]">
      <Scene01WelcomeDesk />
      <Scene02Announcements />
      <Scene03Services />
      <Scene04Closing />
    </div>
  );
}
