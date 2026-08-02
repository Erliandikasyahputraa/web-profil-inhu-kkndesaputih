import { PageMetadata } from '@/components/common/PageMetadata';
import { Stack } from '@/components/layout';
import { Hero } from './sections/Hero/Hero';
import { Intro } from './sections/Intro/Intro';
import { Announcements } from './sections/Announcements/Announcements';
import { Services } from './sections/Services/Services';
import { Documents } from './sections/Documents/Documents';
import { Contact } from './sections/Contact/Contact';

import {
  informationMetadata,
  informationHero,
  informationIntro,
  informationAnnouncements,
  informationServices,
  informationDocuments,
  informationContact
} from '@/content/information';

export function InformationComposition() {
  return (
    <>
      <PageMetadata {...informationMetadata} />
      
      <main className="min-h-screen">
        <Stack spacing="none">
          <Hero content={informationHero} />
          <Intro content={informationIntro} />
          <Announcements content={informationAnnouncements} />
          <Services content={informationServices} />
          <Documents content={informationDocuments} />
          <Contact content={informationContact} />
        </Stack>
      </main>
    </>
  );
}
