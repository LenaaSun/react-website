import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';



function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className='nav-item'>
              <Link to='/about' className='nav-links'>About</Link>
            </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/api-demo" className="nav-links">API Demo</Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-up" className="nav-links">Contact Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

