import { Link } from 'react-router-dom';
import { FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="glass-effect backdrop-blur-lg py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white flex items-center group">
            <FaMoon className="mr-2 group-hover:rotate-12 transition-transform duration-300 text-cosmic-accent glow-effect" />
            <span className="custom-gradient font-bold">
              Cosmic Guide
            </span>
          </Link>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-cosmic-primary p-2">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <div className={`md:flex items-center space-x-8 ${isOpen ? 'block absolute top-full left-0 right-0 glass-effect p-4 backdrop-blur-lg' : 'hidden md:flex'}`}>
            <Link to="/" className="text-cosmic-primary hover:text-cosmic-accent transition-colors block md:inline-block py-2 md:py-0">Home</Link>
            <Link to="/horoscope" className="text-cosmic-primary hover:text-cosmic-accent transition-colors block md:inline-block py-2 md:py-0">Daily Horoscope</Link>
            <Link to="/zodiac" className="text-cosmic-primary hover:text-cosmic-accent transition-colors block md:inline-block py-2 md:py-0">Zodiac Signs</Link>
            <Link to="/quiz" className="text-cosmic-primary hover:text-cosmic-accent transition-colors block md:inline-block py-2 md:py-0">Personality Quiz</Link>
            <Link to="/login" className="cosmic-border glass-effect px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 block md:inline-block text-center text-cosmic-primary hover:text-cosmic-accent">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;