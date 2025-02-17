import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="nav-brand">
          <h1>Seamus Sutula</h1>
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 