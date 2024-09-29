// src/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">Quiz App</h1>
        <div>
          <Link to="/" className="text-white px-4 hover:underline">Home</Link>
          <Link to="/quiz" className="text-white px-4 hover:underline">Quiz</Link>
          <Link to="/about" className="text-white px-4 hover:underline">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
