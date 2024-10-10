// components/Nav.tsx
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav style={{ backgroundColor: 'black', padding: '10px', textAlign: 'center' }}>
      <Link to="/" style={{ color: 'lime', margin: '0 15px', textDecoration: 'none', fontFamily: 'Press Start 2P, cursive' }}>Home</Link>
      <Link to="/about" style={{ color: 'lime', margin: '0 15px', textDecoration: 'none', fontFamily: 'Press Start 2P, cursive' }}>About</Link>
    </nav>
  );
}

export default Nav;