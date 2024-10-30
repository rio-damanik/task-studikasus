// src/components/Navbar/Navbar.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ onCategorySelect }) => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value.toLowerCase();
    setCategory(selectedCategory);
    onCategorySelect(selectedCategory); // Pass the selected category
    navigate("/product"); // Navigate to the Product page
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/product" className="navbar-logo">
          POS
        </Link>
        <div className="navbar-category">
          <select value={category} onChange={handleCategoryChange}>
            <option value="">Category</option>
            <option value="food">Food</option>
            <option value="drink">Drink</option>
            <option value="pretty">Pretty</option>
          </select>
        </div>
      </div>
      <div className="navbar-center">
        <input type="text" placeholder="Search for products..." className="navbar-search" />
        <button className="navbar-search-button">
          <FaSearch size={18} />
        </button>
      </div>
      <div className="navbar-right">
        <Link to="/cart" className="navbar-icon">
          <FaShoppingCart size={20} />
        </Link>
        <Link to="/auth" className="navbar-icon">
          <FaUser size={20} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
