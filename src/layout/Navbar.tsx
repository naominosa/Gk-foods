import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import "../styles/Navbar.css";
import logo from "../assets/GKLOGO.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar-main">
      <div className="navbar-logo">
        <img src={logo} alt="GK Foods Logo" className="logo" />
      </div>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <HiX /> : <HiMenuAlt3 />}
      </div>

      {/* Links */}
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link className={location.pathname === "/" ? "active" : ""} to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link className={location.pathname === "/catering" ? "active" : ""} to="/catering" onClick={closeMenu}>Catering</Link>
        </li>
        <li>
          <Link className={location.pathname === "/AboutUs" ? "active" : ""} to="/AboutUs" onClick={closeMenu}>About Us</Link>
        </li>
        <li>
          <Link className={location.pathname === "/contact" ? "active" : ""} to="/contact" onClick={closeMenu}>Contact</Link>
        </li>
      </ul>
      
      {/* Overlay backdrop for mobile */}
      {isOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;