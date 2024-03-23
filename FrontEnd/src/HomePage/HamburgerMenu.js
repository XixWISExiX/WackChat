import React, { useState } from "react";
import "./HamburgerMenu.css"; // Import CSS file for styling

const HamburgerMenu = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        <li className="first-li">
          <button className="msg-btn">Message Person 💬</button>
        </li>
        <li>
          {" "}
          <button onClick={handleLogout} className="sign-out-button">
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
