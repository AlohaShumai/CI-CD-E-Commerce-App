import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

test('renders store title in navbar', () => {
  render(<Navbar />);
  const titleElement = screen.getByText(/My E-Commerce Store/i);
  expect(titleElement).toBeInTheDocument();
});
