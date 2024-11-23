import React, { useState } from "react";
import "./Cart.css";

// Helper function to format numbers as Rupiah currency
const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(number);
};

const Cart = () => {
  // Mock cart data
  const [cart, setCart] = useState({
    recipient_name: "Jane Doe", // Add recipient's name
    cartItems: [
      { id: "1", name: "Burger", price: 20000, quantity: 2 },
      { id: "2", name: "Cake", price: 15000, quantity: 1 },
      { id: "3", name: "Coffee", price: 10000, quantity: 3 },
    ],
  });

  const calculateTotal = () => {
    return cart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      <div className="cart-details">
        {/* Displaying the recipient's name */}
        <div className="cart-recipient">
          <h3>Recipient</h3>
          <p>{cart.recipient_name}</p>
        </div>

        <div className="cart-items">
          {cart.cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-details">
                <span className="item-name">{item.name}</span>
                <span className="item-quantity">x{item.quantity}</span>
              </div>
              <div className="item-price">{formatRupiah(item.price * item.quantity)}</div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-item total">
            <span>Total:</span>
            <span>{formatRupiah(calculateTotal())}</span>
          </div>
        </div>

        <button className="cart-button">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
