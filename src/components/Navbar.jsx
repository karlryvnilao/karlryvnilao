import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"></div>
      <div className="menu-button" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/tooling">Tooling</Link>
        </li>
        <li className="nav-item">
          <Link to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link to="/training">Training</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
