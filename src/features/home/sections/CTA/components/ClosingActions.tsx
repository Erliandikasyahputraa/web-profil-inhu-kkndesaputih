import type { ClosingActionsProps } from '../CTA.types';

export function ClosingActions({ actions }: ClosingActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
      {actions.map((action) => (
        <a 
          key={action.label} 
          href={action.href} 
          className={`inline-flex items-center justify-center font-heading font-medium tracking-wide transition-colors h-14 px-10 text-lg ${
            action.primary 
              ? 'bg-white text-stone-900 hover:bg-stone-200' 
              : 'border-2 border-white text-white hover:bg-white/10'
          }`}
        >
          {action.label}
        </a>
      ))}
    </div>
  );
}
