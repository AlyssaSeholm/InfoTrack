import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OnboardingPage from './OnboardingPage';

describe('<OnboardingPage />', () => {
  test('it should mount', () => {
    render(<OnboardingPage />);
    
    const onboardingPage = screen.getByTestId('OnboardingPage');

    expect(onboardingPage).toBeInTheDocument();
  });
});