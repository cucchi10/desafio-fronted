import React from 'react';
import '../utils/styles/NavBar.css';
import logo from '../assets/logo__large_plus.png';

function NavBar() {
  return (
    <header>
      <nav className="nav ml-navbar">
        <div className="nav-center">
          <a href="/" className="nav-logo">
            <img src={logo} alt="Bsmart" style={{ height: '5.5rem', }}/>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
