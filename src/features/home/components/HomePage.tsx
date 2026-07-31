import { PageMetadata } from '../../../components/common/PageMetadata';
import { homeMetadata } from '../../../constants/metadata/home';
import { HeroSection } from '../sections/Hero';
import { StorySection } from '../sections/Story';
import { NatureSection } from '../sections/Nature';
import { PotentialsSection } from '../sections/Potentials';
import { TimelineSection } from '../sections/Timeline';
import { GallerySection } from '../sections/Gallery';
import { TransparencySection } from '../sections/Transparency';
import { CTASection } from '../sections/CTA';

export function HomePage() {
  return (
    <>
      <PageMetadata {...homeMetadata} />
      <HeroSection />
      <StorySection />
      <NatureSection />
      <PotentialsSection />
      <TimelineSection />
      <GallerySection />
      <TransparencySection />
      <CTASection />
    </>
  );
}
