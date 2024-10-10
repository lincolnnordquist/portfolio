// pages/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Nav from './nav';
import Footer from './footer';

function App() {
  return (
    <div style={{ backgroundColor: 'black', color: 'lime', fontFamily: 'Press Start 2P, cursive' }}>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}
      </style>
      {/* <Nav /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;