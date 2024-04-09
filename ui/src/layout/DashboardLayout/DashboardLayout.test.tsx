import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DashboardLayout from './DashboardLayout';

describe('<DashboardLayout />', () => {
  test('it should mount', () => {
    render(<DashboardLayout />);
    
    const dashboardLayout = screen.getByTestId('DashboardLayout');

    expect(dashboardLayout).toBeInTheDocument();
  });
});