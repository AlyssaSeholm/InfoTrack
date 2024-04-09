import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OnboardingLayout from './OnboardingLayout';

describe('<OnboardingLayout />', () => {
  test('it should mount', () => {
    render(<OnboardingLayout><div>Test Child</div></OnboardingLayout>);    
    
    const onboardingLayout = screen.getByTestId('OnboardingLayout');
    
    expect(onboardingLayout).toBeInTheDocument();
  });
  test('renders layout with children', () => {
    render(<OnboardingLayout><div>Test Child</div></OnboardingLayout>);
    const childElement = screen.getByText(/test child/i);
    expect(childElement).toBeInTheDocument();
  });
});