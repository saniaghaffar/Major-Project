import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-cyan-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">MyStore</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded">Home</Link>
          <Link to="/about" className="hover:bg-blue-700 px-3 py-2 rounded">About</Link>
          <Link to="/login" className="text-white mx-2">Login</Link>
          <Link to="/signup" className="text-white mx-2">Sign Up</Link>
       
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
