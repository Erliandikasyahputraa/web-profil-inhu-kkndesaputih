import { PageMetadata } from '@/components';
import { homeMetadata } from '../constants/metadata/home';
import { HomeComposition } from '../features/home';

export function HomePage() {
  return (
    <>
      <PageMetadata {...homeMetadata} />
      <HomeComposition />
    </>
  );
}
