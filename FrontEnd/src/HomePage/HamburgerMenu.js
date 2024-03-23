import React, { useState } from "react";
import "./HamburgerMenu.css"; // Import CSS file for styling

const HamburgerMenu = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //   const handleLogout = () => {
  //     // Perform Google sign-out logic...
  //     // After successful sign-out, call onLogout callback
  //     onLogout();
  //   };

  return (
    <div className="hamburger-menu">
      {/* Hamburger menu button */}
      <button
        className={`menu-button ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="menu-icon">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </button>

      {/* Menu items */}
      <ul className={`menu-items ${isOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>
          {" "}
          <button onClick={handleLogout}>Sign out</button>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
