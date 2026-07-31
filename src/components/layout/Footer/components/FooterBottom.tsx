import type { FooterBottomProps } from '../Footer.types';

export function FooterBottom({ copyright, credit }: FooterBottomProps) {
  return (
    <div className="py-8 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
      <span className="font-sans text-sm text-stone-500">{copyright}</span>
      <span className="font-sans text-sm text-stone-500">{credit}</span>
    </div>
  );
}
