import React, { useContext } from "react";
import Order from "../Order/Order";
import "./Cart.css";

const Cart = () => {
  // Replace with real context or state management
  const cartItems = [
    { name: "Product 1", price: 10, quantity: 1 },
    { name: "Product 2", price: 15, quantity: 2 },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal()}</h3>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
