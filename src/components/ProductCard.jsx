// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ title, onAddToCart }) => {
  return (
    <div className="product-card">
      <h3 data-testid="product-title">{title}</h3>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
// test test adding another test