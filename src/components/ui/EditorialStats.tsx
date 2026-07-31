import { Overline, Heading } from '@/components/typography';

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

interface EditorialStatsProps {
  stats: readonly StatItem[];
  layout?: 'horizontal' | 'vertical';
}

export function EditorialStats({ stats, layout = 'vertical' }: EditorialStatsProps) {
  return (
    <div className={`grid gap-8 lg:gap-12 border-t border-stone-200 pt-8 ${layout === 'vertical' ? 'grid-cols-1 md:grid-cols-3 lg:grid-cols-1' : 'grid-cols-1 md:grid-cols-3'}`}>
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
