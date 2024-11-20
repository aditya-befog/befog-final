import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/befog_logo.svg";
import { FaBars, FaTimes, FaGlobe, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile navbar toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown toggle
  const [selectedCountry, setSelectedCountry] = useState("Select Country"); // Selected country

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false); // Close dropdown
    setIsOpen(false); // Close mobile navbar
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Befog Logo" className="logo" />
      </div>

      <ul
        className={isOpen ? "nav-links open" : "nav-links"}
        onClick={() => isOpen && toggleMenu()} // Close navbar on link click
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => !isOpen && toggleDropdown()} // Prevent mobile dropdown hover conflict
          onMouseLeave={() => !isOpen && toggleDropdown()}
        >
          <button
            className="dropdown-toggle"
            onClick={toggleDropdown}
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            <FaGlobe className="world-icon" />
            <span>{selectedCountry}</span>
            <FaChevronDown className="dropdown-icon" />
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              {["India", "USA", "Canada", "Germany"].map((country) => (
                <li
                  key={country}
                  onClick={() => handleCountrySelect(country)}
                  className="dropdown-item"
                >
                  {country}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
      <button
        className="menu-icon"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
