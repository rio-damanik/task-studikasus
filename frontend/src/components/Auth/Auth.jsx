// src/components/Auth/Auth.jsx
import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleAuthMode = () => setIsLogin(!isLogin);

  const handleAuth = (e) => {
    e.preventDefault();
    // Add authentication logic here (e.g., API calls)
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleAuth}>
        {!isLogin && <input type="text" placeholder="Username" />}
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
      <button className="toggle-button" onClick={toggleAuthMode}>
        {isLogin ? "Switch to Register" : "Switch to Login"}
      </button>
    </div>
  );
};

export default Auth;
