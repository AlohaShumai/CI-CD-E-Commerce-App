import { render, screen } from '@testing-library/react';
import ProductCard from '../src/components/ProductCard';

test('renders product title', () => {
  render(<ProductCard title="Cool Shirt" />);
  const titleElement = screen.getByTestId('product-title');
  expect(titleElement).toHaveTextContent('Cool Shirt');
});
