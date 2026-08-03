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

import { Scene01Hero } from './sections/Scene01Hero';
import { Scene02Location } from './sections/Scene02Location';
import { Scene03Boundaries } from './sections/Scene03Boundaries';
import { Scene04Topography } from './sections/Scene04Topography';
import { Scene05Climate } from './sections/Scene05Climate';
import { Scene06Reflection } from './sections/Scene06Reflection';

export function GeographyComposition() {
  return (
    <div className="w-full flex flex-col bg-[#F2EFE9]">
      <PageMetadata {...geographyMetadata} />
      <Scene01Hero />
      <Scene02Location />
      <Scene03Boundaries />
      <Scene04Topography />
      <Scene05Climate />
      <Scene06Reflection />
    </div>
  );
}
