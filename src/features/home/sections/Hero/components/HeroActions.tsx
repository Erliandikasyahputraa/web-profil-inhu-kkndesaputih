import { Reveal } from '@/components/motion';
import { Button } from '@/components/ui';
import type { HeroActionsProps } from '../Hero.types';

export function HeroActions({ primaryLabel, secondaryLabel }: HeroActionsProps) {
  return (
    <Reveal stagger="hero" delay={0.4} className="flex flex-col sm:flex-row gap-4 pt-4">
      <Button variant="primary" size="lg">{primaryLabel}</Button>
      <Button variant="outline" size="lg" className="text-white border-white/50 hover:bg-white/10 hover:border-white">{secondaryLabel}</Button>
    </Reveal>
  );
}
