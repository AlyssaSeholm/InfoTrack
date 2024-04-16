import React, { FC } from 'react';


interface OnboardingLayoutProps {
  children: React.ReactNode;
}

const OnboardingLayout: FC<OnboardingLayoutProps> = ({ children }) => {

  
  return (
    <>
      <div data-testid="OnboardingLayout">

      { children }

      </div>
    </>
  );
};

export default OnboardingLayout;
