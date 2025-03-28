
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking a link
  const closeMenu = () => {
    if (isOpen) setIsOpen(false);
  };

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-foreground" onClick={closeMenu}>
              Rajiv<span className="text-primary">Ranjan</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
              <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
              <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
              <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md">
          <a 
            href="#about" 
            className="block px-3 py-2 rounded-md text-base nav-link"
            onClick={closeMenu}
          >
            About
          </a>
          <a 
            href="#skills" 
            className="block px-3 py-2 rounded-md text-base nav-link"
            onClick={closeMenu}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className="block px-3 py-2 rounded-md text-base nav-link"
            onClick={closeMenu}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="block px-3 py-2 rounded-md text-base nav-link"
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
