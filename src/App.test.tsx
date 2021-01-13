import React from 'react';
import { render, screen } from '@testing-library/react';
import AppFC from './AppFC';

test('renders learn react link', () => {
  render(<AppFC />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});