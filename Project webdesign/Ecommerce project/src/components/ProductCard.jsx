// ProductCard.js

import React, { useState } from "react";

function ProductCard({
  product,
  count,
  setCount,
  cartItems,
  setCartItems
}) {

  const [added, setAdded] = useState(false);

  // Add To Cart
  const addToCart = () => {

    // Prevent multiple clicks
    if (!added) {

      setAdded(true);

      // Increase cart count
      setCount(count + 1);

      // Add product to cart list
      setCartItems([...cartItems, product]);
    }
  };

  // Remove From Cart
  const removeFromCart = () => {

    setAdded(false);

    // Decrease cart count
    setCount(count - 1);

    // Remove product from cart list
    const updatedCart = cartItems.filter(
      (item) => item.id !== product.id
    );

    setCartItems(updatedCart);
  };

  return (
    <div className="card">

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      {!added ? (
        <button onClick={addToCart}>
          Add to Cart
        </button>
      ) : (
        <button
          className="remove-btn"
          onClick={removeFromCart}
        >
          Remove from Cart
        </button>
      )}

    </div>
  );
}

export default ProductCard;