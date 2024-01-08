import React from "react";
import "./Header.css"; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo">{/* Add your logo */}</div>
      <h1 className="site-title">Your HealthCheck Title</h1>
      <button className="reset-button">Reset</button>
    </header>
  );
};

export default Header;
