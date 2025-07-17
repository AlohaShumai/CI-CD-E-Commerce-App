// src/__tests__/Cart.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('adds product to cart and updates cart count', () => {
  render(<App />);
  
  const addButton = screen.getByText(/Add to Cart/i);
  fireEvent.click(addButton);

  const cartCount = screen.getByTestId('cart-count');
  expect(cartCount).toHaveTextContent('1');
});
