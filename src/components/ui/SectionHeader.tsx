import { Overline, Heading } from '@/components/typography';

interface SectionHeaderProps {
  number: string;
  title: string;
  description?: string;
}

export function SectionHeader({ number, title, description }: SectionHeaderProps) {
  return (
    <div className="flex flex-col mb-16 lg:mb-24 space-y-8">
      <div className="flex items-center space-x-6 border-b border-stone-200 pb-4">
        <span className="font-heading text-lg font-bold text-stone-400">{number}</span>
        <Overline className="text-brand-primary">{title}</Overline>
      </div>
      {description && (
        <Heading level={3} variant="editorial" className="max-w-3xl leading-snug">
          {description}
        </Heading>
      )}
    </div>
  );
}
