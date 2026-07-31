import { Container } from '@/components';
import { Display, Lead } from '@/components';
import { FadeIn, Reveal } from '@/components';
import type { HeroContentProps } from '../Hero.types';

export function HeroContent({ title, description, children }: HeroContentProps & { children?: React.ReactNode }) {
  return (
    <Container size="editorial" className="relative z-10">
      <div className="space-y-6">
        <FadeIn>
          <Display className="text-white">{title}</Display>
        </FadeIn>
        <Reveal stagger="hero">
          <Lead className="text-stone-200 font-normal">
            {description}
          </Lead>
        </Reveal>
        {children}
      </div>
    </Container>
  );
}
