import type { TransparencyBreakdownProps } from '../Transparency.types';

export function TransparencyBreakdown({ metrics }: TransparencyBreakdownProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12 mt-16 lg:mt-24 pt-16 lg:pt-24 border-t border-stone-200">
      {metrics.map((m) => (
        <div key={m.id} className="flex flex-col space-y-2">
          <span className="font-heading text-4xl lg:text-5xl text-stone-900">{m.value}</span>
          <span className="font-sans text-sm tracking-widest text-stone-500 uppercase">{m.label}</span>
        </div>
      ))}
    </div>
  );
}
