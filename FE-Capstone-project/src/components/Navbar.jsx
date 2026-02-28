import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1d1e25] text-white shadow-lg hover:bg-blue-700">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🌤️</span>
            <span className="font-bold text-xl">WeatherDashboard</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-sky-light transition">Home</Link>
            <Link to="/about" className="hover:text-sky-light transition">About</Link>
            <Link to="/contact" className="hover:text-sky-light transition">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="block py-2 hover:text-sky-light" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="block py-2 hover:text-sky-light" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" className="block py-2 hover:text-sky-light" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;