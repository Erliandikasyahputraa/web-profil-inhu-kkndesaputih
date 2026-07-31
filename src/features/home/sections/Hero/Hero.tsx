import { Section } from '../../../../components/ui/Section';
import { HeroMedia } from './components/HeroMedia';
import { HeroContent } from './components/HeroContent';
import { HeroActions } from './components/HeroActions';
import { heroContent } from '../../../../content/homepage/hero';

export function Hero() {
  return (
    <Section variant="hero" background="transparent">
      <HeroMedia imageSrc={heroContent.image} />
      <HeroContent title={heroContent.title} description={heroContent.description}>
        <HeroActions primaryLabel={heroContent.cta.primary} secondaryLabel={heroContent.cta.secondary} />
      </HeroContent>
    </Section>
  );
}
