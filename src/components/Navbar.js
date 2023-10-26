import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home" className="mini-logo">
        <label>THE BARBER</label>
      </a>
      <a href="#home">
        <label className="nav-items">Home</label>
      </a>
      <a href="#about">
        <label className="nav-items">About</label>
      </a>
      <a href="#products">
        <label className="nav-items">Products</label>
      </a>
      <a href="#where">
        <label className="nav-items">Where</label>
      </a>
    </nav>
  );
};

export default Navbar;
