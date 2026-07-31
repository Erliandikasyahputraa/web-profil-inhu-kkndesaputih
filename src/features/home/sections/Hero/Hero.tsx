import { Section } from '../../../../components/ui/Section';
import { HeroBackground } from './components/HeroBackground';
import { HeroContent } from './components/HeroContent';
import { heroContent } from '../../../../content/homepage/hero';

export function Hero() {
  return (
    <Section 
      spacing="none" 
      background="transparent" 
      className="relative min-h-[90vh] flex items-end pb-24 pt-32 overflow-hidden"
    >
      <HeroBackground imageSrc={heroContent.image} />
      <HeroContent title={heroContent.title} description={heroContent.description} />
    </Section>
  );
}
