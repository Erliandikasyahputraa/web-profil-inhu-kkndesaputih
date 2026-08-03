import { HeroSection } from './sections/Hero';
import { StorySection } from './sections/Story';
import { TimelineSection } from './sections/Timeline';
import { CTASection } from './sections/CTA';
import { PotentialsSection } from './sections/Potentials';
import { GallerySection } from './sections/Gallery';

export function HomeComposition() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <CTASection />
      <TimelineSection />
      <PotentialsSection />
      <GallerySection />
    </>
  );
}
