import { Display, Body } from '@/components/typography';
import type { ClosingStatementProps } from '../CTA.types';

export function ClosingStatement({ text, description }: ClosingStatementProps) {
  return (
    <div className="flex flex-col items-center space-y-8 max-w-5xl mx-auto text-center">
      <Display className="text-white text-5xl md:text-7xl lg:text-[100px] tracking-tight font-bold leading-tight drop-shadow-sm">
        {text}
      </Display>
      <Body className="text-stone-200 text-lg md:text-2xl max-w-3xl leading-relaxed drop-shadow-sm">
        {description}
      </Body>
    </div>
  );
}
