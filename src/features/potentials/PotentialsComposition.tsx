import { PageMetadata } from '@/components/common/PageMetadata';
import { Stack } from '@/components/layout';
import { Hero } from './sections/Hero/Hero';
import { Intro } from './sections/Intro/Intro';
import { Sector } from './sections/Sector/Sector';
import { Stats } from './sections/Stats/Stats';
import { Gallery } from './sections/Gallery/Gallery';
import { Closing } from './sections/Closing/Closing';

import {
  potentialsMetadata,
  potentialsHero,
  potentialsIntro,
  potentialsAgriculture,
  potentialsPlantation,
  potentialsFishery,
  potentialsMSME,
  potentialsTourism,
  potentialsStats,
  potentialsGallery,
  potentialsClosing
} from '@/content/potentials';

export function PotentialsComposition() {
  return (
    <>
      <PageMetadata {...potentialsMetadata} />
      
      <main className="min-h-screen">
        <Stack spacing="none">
          <Hero content={potentialsHero} />
          <Intro content={potentialsIntro} />
          
          <Sector content={potentialsAgriculture} background="primary" />
          <Sector content={potentialsPlantation} background="muted" reverse />
          <Sector content={potentialsFishery} background="primary" />
          <Sector content={potentialsMSME} background="muted" reverse />
          <Sector content={potentialsTourism} background="primary" />
          
          <Stats content={potentialsStats} />
          <Gallery content={potentialsGallery} />
          <Closing content={potentialsClosing} />
        </Stack>
      </main>
    </>
  );
}
