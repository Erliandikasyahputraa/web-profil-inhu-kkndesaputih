import { EditorialImage } from '../../../../components/ui/EditorialImage';
import { Container } from '../../../../components/ui/Container';
import { Section } from '../../../../components/ui/Section';
import { Display, Lead } from '../../../../components/typography';
import { FadeIn, Reveal } from '../../../../components/motion';
import { heroContent } from '../../../../content/homepage';

export function HeroSection() {
  return (
    <Section className="relative min-h-[90vh] flex items-end pb-24 pt-32 overflow-hidden border-none p-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <EditorialImage
          src={heroContent.image}
          alt="Desa Air Putih Aerial View"
          priority
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-stone-900/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl space-y-6">
          <FadeIn>
            <Display className="text-white drop-shadow-md">{heroContent.title}</Display>
          </FadeIn>
          <Reveal delay={0.2}>
            <Lead className="text-stone-100 max-w-2xl drop-shadow-sm font-normal">
              {heroContent.description}
            </Lead>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
