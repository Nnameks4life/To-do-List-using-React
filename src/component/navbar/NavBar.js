import React from "react";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-light navbar-light">
      <Cart />
      <i className="fas fa-star"></i>
      <Link to="/" className="navbar-brand">
        Frankdinerooo
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-link">
              Contact Us Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
