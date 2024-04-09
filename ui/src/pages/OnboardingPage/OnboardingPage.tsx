import React, { FC } from 'react';


interface OnboardingPageProps {}

const OnboardingPage: FC<OnboardingPageProps> = () => (
  <div data-testid="OnboardingPage">
    <h1>OnboardingPage Component</h1>
    <img alt="Tailwind CSS Navbar component"  src={'/logo.png'} />
  </div>
);

export default OnboardingPage;
