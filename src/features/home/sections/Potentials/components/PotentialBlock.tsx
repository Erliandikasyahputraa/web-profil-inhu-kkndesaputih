import { Heading, Body } from '@/components';
import { EditorialImage } from '@/components';
import { EditorialStats } from '@/components';
import { FadeIn, Reveal } from '@/components';
import type { PotentialBlockProps } from '../Potentials.types';

export function PotentialBlock({ title, description, image, imageAlt, stats }: PotentialBlockProps) {
  return (
    <div className="flex flex-col space-y-8 lg:space-y-12">
      <Reveal className="w-full">
        <EditorialImage src={image} alt={imageAlt} preset="landscape" />
      </Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-24">
        <div className="col-span-1 lg:col-span-8">
          <FadeIn stagger="editorial">
            <Heading level={3} variant="editorial" className="mb-6">{title}</Heading>
            <Body className="text-stone-600 max-w-3xl">{description}</Body>
          </FadeIn>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <FadeIn stagger="editorial" delay={0.2}>
            <EditorialStats stats={stats} layout="horizontal" />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
