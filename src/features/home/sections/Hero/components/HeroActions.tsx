import { Cluster } from '@/components/layout';
import { Reveal } from '@/components/motion';
import { Button } from '@/components/ui';
import type { HeroActionsProps } from '../Hero.types';

export function HeroActions({ primary, secondary }: HeroActionsProps) {
  return (
    <Reveal stagger="hero" delay={0.4}>
      <Cluster spacing="inline" className="pt-4">
        <Button variant="primary" size="lg">{primary.label}</Button>
        <Button variant="outline" size="lg" className="text-white border-white/50 hover:bg-white/10 hover:border-white">{secondary.label}</Button>
      </Cluster>
    </Reveal>
  );
}
