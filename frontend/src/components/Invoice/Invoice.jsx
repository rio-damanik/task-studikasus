import React from "react";
import "./Invoice.css";

const Invoice = () => {
  const items = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 15 },
  ];

  return (
    <div className="invoice-container">
      <h2>Invoice</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${items.reduce((total, item) => total + item.price, 0)}</h3>
    </div>
  );
};

export default Invoice;
