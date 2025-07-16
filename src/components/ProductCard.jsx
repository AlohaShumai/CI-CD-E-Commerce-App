// src/components/ProductCard.jsx
import React from 'react';

function ProductCard({ title }) {
  return <div data-testid="product-title">{title}</div>;
}

export default ProductCard;
