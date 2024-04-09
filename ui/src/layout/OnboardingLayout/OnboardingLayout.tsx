import React, { FC } from 'react';


interface OnboardingLayoutProps {
  children: React.ReactNode;
}

const OnboardingLayout: FC<OnboardingLayoutProps> = ({ children }) => {

  
  return (
    <>
      <div data-testid="OnboardingLayout">
      {/* <NavigationBar /> */}

      { children }

      {/* <Footer /> */}
      </div>
    </>
  );
  // <div data-testid="OnboardingLayout">
  //   OnboardingLayout Component
  // </div>
};

export default OnboardingLayout;
