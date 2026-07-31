import { Container } from '../../../../../components/ui/Container';
import { Display, Lead } from '../../../../../components/typography';
import { FadeIn, Reveal } from '../../../../../components/motion';
import type { HeroContentProps } from '../Hero.types';

export function HeroContent({ title, description }: Pick<HeroContentProps, 'title' | 'description'>) {
  return (
    <Container className="relative z-10">
      <div className="max-w-4xl space-y-6">
        <FadeIn>
          <Display className="text-white drop-shadow-md">{title}</Display>
        </FadeIn>
        <Reveal delay={0.2}>
          <Lead className="text-stone-100 max-w-2xl drop-shadow-sm font-normal">
            {description}
          </Lead>
        </Reveal>
      </div>
    </Container>
  );
}
