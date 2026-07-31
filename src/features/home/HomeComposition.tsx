import { HeroSection } from './sections/Hero';
import { StorySection } from './sections/Story';
import { NatureSection } from './sections/Nature';
/* 
import { PotentialsSection } from './sections/Potentials';
import { TimelineSection } from './sections/Timeline';
import { GallerySection } from './sections/Gallery';
import { TransparencySection } from './sections/Transparency';
import { CTASection } from './sections/CTA';
*/

export function HomeComposition() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <NatureSection />
      {/* 
        Placeholder for future sections:
        <PotentialsSection />
        <TimelineSection />
        <GallerySection />
        <TransparencySection />
        <CTASection />
      */}
    </>
  );
}
