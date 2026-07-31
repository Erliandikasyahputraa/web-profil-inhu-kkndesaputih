import { PageMetadata } from '../components/common/PageMetadata';
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
