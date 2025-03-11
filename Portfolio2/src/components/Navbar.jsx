import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Sheikh Arsalan</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-400 transition-all">Home</Link>
        <Link to="/projects" className="hover:text-yellow-400 transition-all">Projects</Link>
        <Link to="/hire-me" className="hover:text-yellow-400 transition-all">Hire Me</Link>
        <Link to="/my-journey" className="hover:text-yellow-400 transition-all">My Journey</Link>
      </div>
    </nav>
  );
}
