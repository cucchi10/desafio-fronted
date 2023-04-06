import React from 'react';
import '../utils/styles/NavBar.css';
import logo from '../assets/logo__large_plus.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <nav className="nav ml-navbar">
        <div className="nav-center">
          <Link to={'/'} className="nav-logo">
            <img src={logo} alt="Bsmart" style={{ height: '5.5rem', }} />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
