import { Heading, Overline } from '../../../../../components/typography';
import type { NatureStatsProps } from '../Nature.types';

export function NatureStats({ stats }: NatureStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-12 lg:gap-16 border-t border-stone-200 lg:border-t-0 pt-12 lg:pt-0">
      {stats.map((stat) => (
        <div key={stat.id} className="flex flex-col">
          <Heading level={3} className="text-4xl lg:text-5xl font-light text-brand-primary mb-2">
            {stat.value}
          </Heading>
          <Overline className="text-stone-500 tracking-wider">
            {stat.label}
          </Overline>
        </div>
      ))}
    </div>
  );
}
