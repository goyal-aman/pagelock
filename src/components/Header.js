import React from 'react';
import logo from '../logo.svg'; // Assuming logo.svg will be moved to src/

function Header({ onAboutClick }) {
  return (
    <header className="header">
      {/* Hidden but SEO-visible site title */}
      <h1 style={{ position: 'absolute', left: '-9999px', top: '-9999px', height: '1px', width: '1px', overflow: 'hidden' }}>
        PageLock — Password-Protected, Encrypted Links
      </h1>

      {/* For now, using a placeholder, will place the logo from archive/v1/logo.svg to public/logo.svg */}
      <img src="/logo.svg" alt="PageLock logo — secure link generator" className="logo" />

      <nav>
        <a href="#" id="aboutLink" onClick={onAboutClick}>Help</a>
      </nav>
    </header>
  );
}

export default Header;
