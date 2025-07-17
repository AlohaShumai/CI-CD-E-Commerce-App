// src/components/Navbar.jsx
import React from 'react';

const Navbar = ({ cartCount }) => {
  return (
    <nav>
      <h2>My E-Commerce Store</h2>
      <div>
        Cart: <span data-testid="cart-count">{cartCount}</span>
      </div>
    </nav>
  );
};

export default Navbar;
