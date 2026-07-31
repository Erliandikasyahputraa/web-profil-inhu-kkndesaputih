import { Cluster } from '@/components/layout';
import type { ClosingActionsProps } from '../CTA.types';

export function ClosingActions({ actions }: ClosingActionsProps) {
  return (
    <Cluster justify="center" spacing="content" className="flex-col sm:flex-row">
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
    </Cluster>
  );
}
