
import { ProfileComposition } from '@/features/profile/ProfileComposition';
import { PageMetadata } from '@/components/common';
import { profileMetadata } from '@/constants/metadata/profile';
import { useEffect } from 'react';

export function ProfilePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageMetadata {...profileMetadata} />
      <ProfileComposition />
    </>
  );
}

