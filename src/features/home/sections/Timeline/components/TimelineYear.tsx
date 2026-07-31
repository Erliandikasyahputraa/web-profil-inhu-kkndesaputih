import { Display } from '@/components/typography';
import type { TimelineYearProps } from '../Timeline.types';

export function TimelineYear({ year }: TimelineYearProps) {
  return (
    <div className="sticky top-32">
      <Display tone="brand" className="opacity-90">
        {year}
      </Display>
    </div>
  );
}
