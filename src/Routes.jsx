import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Coin from './components/Coin';
import Favorites from './components/Favorites';
import Navbar from './components/Navbar';

function RoutesProvider() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<Coin />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default RoutesProvider;
