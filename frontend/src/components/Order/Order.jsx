// src/components/Order/Order.jsx
import React, { useState } from "react";
import Cart from "../Cart/Cart"; // Pastikan lokasi ini sesuai dengan struktur direktori
import "./Order.css";

// Format rupiah untuk Indonesia
const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(number);
};

const Order = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Burger", price: 10000, quantity: 2 },
    { id: 2, name: "Coffee", price: 5000, quantity: 1 },
  ]);

  const handleCheckout = () => {
    console.log("Checkout completed!");
    setCartItems([]); // Clear cart after checkout
  };

  return (
    <div className="order-container">
      <h2>Pesanan Anda</h2>
      <Cart cartItems={cartItems} onCheckout={handleCheckout} />
    </div>
  );
};

export default Order;
