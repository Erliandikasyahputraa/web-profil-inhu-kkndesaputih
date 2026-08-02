import { PageMetadata } from '@/components/common/PageMetadata';
import { Stack } from '@/components/layout';
import { Hero } from './sections/Hero/Hero';
import { Leadership } from './sections/Leadership/Leadership';
import { Organization } from './sections/Organization/Organization';
import { Transparency } from './sections/Transparency/Transparency';
import { Participation } from './sections/Participation/Participation';

import {
  governanceMetadata,
  governanceHero,
  governanceLeadership,
  governanceOrganization,
  governanceTransparency,
  governanceParticipation
} from '@/content/governance';

export function GovernanceComposition() {
  return (
    <>
      <PageMetadata {...governanceMetadata} />
      
      <main className="min-h-screen">
        <Stack spacing="none">
          <Hero content={governanceHero} />
          <Leadership content={governanceLeadership} />
          <Organization content={governanceOrganization} />
          <Transparency content={governanceTransparency} />
          <Participation content={governanceParticipation} />
        </Stack>
      </main>
    </>
  );
}
