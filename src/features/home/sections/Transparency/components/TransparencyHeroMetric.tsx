import { Display, Heading, Body } from '../../../../../components/typography';
import type { TransparencyHeroMetricProps } from '../Transparency.types';

export function TransparencyHeroMetric({ value, label, description }: TransparencyHeroMetricProps) {
  return (
    <div className="flex flex-col space-y-6">
      <Display className="text-6xl md:text-8xl lg:text-[120px] text-stone-900 tracking-tighter font-bold leading-none">
        {value}
      </Display>
      <div className="flex flex-col space-y-3">
        <Heading level={4} variant="editorial">
          {label}
        </Heading>
        <Body className="text-stone-600 max-w-sm leading-relaxed">
          {description}
        </Body>
      </div>
    </div>
  );
}
