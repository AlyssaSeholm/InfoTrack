import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyDemo from './MyDemo';

describe('<MyDemo />', () => {
  test('it should mount', () => {
    render(<MyDemo />);
    
    const myDemo = screen.getByTestId('MyDemo');

    expect(myDemo).toBeInTheDocument();
  });
});