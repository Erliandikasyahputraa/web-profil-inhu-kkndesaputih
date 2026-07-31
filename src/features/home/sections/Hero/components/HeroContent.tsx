import { Stack } from '@/components/layout';
import { Container } from '@/components/ui';
import { Display, Lead } from '@/components/typography';
import { FadeIn, Reveal } from '@/components/motion';
import type { HeroContentProps } from '../Hero.types';

export function HeroContent({ title, description, children }: HeroContentProps & { children?: React.ReactNode }) {
  return (
    <Container size="editorial" className="relative z-10">
      <Stack spacing="content">
        <FadeIn>
          <Display tone="inverse">{title}</Display>
        </FadeIn>
        <Reveal stagger="hero">
          <Lead tone="inverse" className="font-normal">
            {description}
          </Lead>
        </Reveal>
        {children}
      </Stack>
    </Container>
  );
}
