import React, { lazy, Suspense } from 'react';

const LazyOnboardingPage = lazy(() => import('./OnboardingPage'));

const OnboardingPage = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
    <Suspense fallback={null}>
      <LazyOnboardingPage {...props} />
    </Suspense>
);

export default OnboardingPage;
