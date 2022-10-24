import React from 'react';
import { Navbar } from '../../common';

import './Header.css';

function Header() {

  return (
    <header className="header">
        <div className="header-logo">
            <a href="/" className="home-logo">UXID Headphones</a>
        </div>

        <div className="header-cart">
            <Navbar />
        </div>
    </header>
  );

}

export default Header;