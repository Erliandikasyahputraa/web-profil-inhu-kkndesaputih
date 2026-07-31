import { Display } from '@/components';
import type { TimelineYearProps } from '../Timeline.types';

export function TimelineYear({ year }: TimelineYearProps) {
  return (
    <div className="sticky top-32">
      <Display className="text-6xl md:text-8xl lg:text-[140px] text-brand-primary leading-none font-bold tracking-tighter opacity-90">
        {year}
      </Display>
    </div>
  );
}
