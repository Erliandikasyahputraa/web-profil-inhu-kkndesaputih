import { Body } from '@/components';
import type { NatureContentProps } from '../Nature.types';

export function NatureContent({ paragraphs }: NatureContentProps) {
  return (
    <div className="flex flex-col space-y-6 lg:pr-12">
      {paragraphs.map((p) => (
        <Body key={p.id} className="text-stone-600">
          {p.text}
        </Body>
      ))}
    </div>
  );
}
