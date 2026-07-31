import { Overline } from '../../../../../components/typography';
import type { StoryMetaProps } from '../Story.types';

export function StoryMeta({ label, value }: StoryMetaProps) {
  return (
    <div className="border-l border-brand-accent pl-5 py-1 mt-8 mb-4">
      <Overline className="text-stone-400 block text-[10px] md:text-xs mb-1">{label}</Overline>
      <span className="font-body text-xs md:text-sm font-bold text-stone-800 uppercase tracking-widest">{value}</span>
    </div>
  );
}
