import React, { useState } from "react";
import "./DeliveryAddress.css";

const DeliveryAddress = () => {
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address submitted:", address);
  };

  return (
    <div className="delivery-address-container">
      <h2>Delivery Address</h2>
      <form onSubmit={handleSubmit}>
        <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter delivery address" />
        <button type="submit">Save Address</button>
      </form>
    </div>
  );
};

export default DeliveryAddress;
