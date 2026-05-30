// components/Navbar.js

import React from "react";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2>VIBE CART</h2>

      <ul>
        <li>Home</li>
        <li>Products</li>

        {/* Cart Counter */}
        <li className="cart-icon">
          Cart  <span>{cartCount}</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;