import { PageMetadata } from '@/components/common/PageMetadata';
import { Stack } from '@/components/layout';
import { Hero } from './sections/Hero/Hero';
import { Location } from './sections/Location/Location';
import { Boundaries } from './sections/Boundaries/Boundaries';
import { Topography } from './sections/Topography/Topography';
import { Map } from './sections/Map/Map';

import {
  geographyMetadata,
  geographyHero,
  geographyLocation,
  geographyBoundaries,
  geographyTopography,
  geographyMap
} from '@/content/geography';

export function GeographyComposition() {
  return (
    <>
      <PageMetadata {...geographyMetadata} />
      
      <main className="min-h-screen">
        <Stack spacing="none">
          <Hero content={geographyHero} />
          <Location content={geographyLocation} />
          <Boundaries content={geographyBoundaries} />
          <Topography content={geographyTopography} />
          <Map content={geographyMap} />
        </Stack>
      </main>
    </>
  );
}
