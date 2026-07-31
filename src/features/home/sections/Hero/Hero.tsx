import { Section } from '@/components/ui';
import { HeroMedia } from './components/HeroMedia';
import { HeroContent } from './components/HeroContent';
import { HeroActions } from './components/HeroActions';
import { heroContent } from '@/content/homepage/hero';

export function Hero() {
  return (
    <Section variant="hero" background="transparent">
      <HeroMedia image={heroContent.media.image} />
      <HeroContent title={heroContent.title} description={heroContent.description}>
        <HeroActions primary={heroContent.cta.primary} secondary={heroContent.cta.secondary} />
      </HeroContent>
    </Section>
  );
}
