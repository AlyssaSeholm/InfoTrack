import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SiteLayout from './SiteLayout';

describe('<SiteLayout />', () => {
  test('it should mount', () => {
    render(<SiteLayout><div>Test Child</div></SiteLayout>);
    
    const siteLayout = screen.getByTestId('SiteLayout');

    expect(siteLayout).toBeInTheDocument();
  });
  test('renders layout with children', () => {
    render(<SiteLayout><div>Test Child</div></SiteLayout>);

    const childElement = screen.getByText(/test child/i);

    expect(childElement).toBeInTheDocument();
  });
});