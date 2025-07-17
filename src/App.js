// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const sampleProduct = { id: 1, title: 'Cool Shirt' };

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <ProductCard
        title={sampleProduct.title}
        onAddToCart={() => handleAddToCart(sampleProduct)}
      />
    </div>
  );
}

export default App;
