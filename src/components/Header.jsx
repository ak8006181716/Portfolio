import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars as faBarsSolid, faTimes as faTimesSolid } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle keyboard navigation and focus management
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
      
      // Focus the first link in the mobile menu
      const firstLink = document.querySelector('#mobile-menu nav a');
      if (firstLink) {
        firstLink.focus();
      }
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  

  return (
    <header className="relative z-50 backdrop-blur-sm bg-black/20 border-b border-white/10 ">
      <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="group text-2xl sm:text-3xl md:text-4xl font-bold text-white hover:text-blue-300 transition-all duration-300 relative">
          <span className="relative z-10 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
            AK
          </span>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 lg:gap-8 text-lg font-semibold">
            <li>
              <Link className="text-white hover:text-blue-300 transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/10" to="/">
                <span className="relative z-10">Home</span>
                <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transition-all duration-300 group-hover:w-full scale-x-0 group-hover:scale-x-100"></span>
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-blue-300 transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/10" to="/about">
                <span className="relative z-10">About</span>
                <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transition-all duration-300 group-hover:w-full scale-x-0 group-hover:scale-x-100"></span>
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-blue-300 transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/10" to="/projects">
                <span className="relative z-10">Projects</span>
                <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transition-all duration-300 group-hover:w-full scale-x-0 group-hover:scale-x-100"></span>
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-blue-300 transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/10" to="/technology">
                <span className="relative z-10">Technology</span>
                <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transition-all duration-300 group-hover:w-full scale-x-0 group-hover:scale-x-100"></span>
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-blue-300 transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/10" to="/contact">
                <span className="relative z-10">Contact</span>
                <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transition-all duration-300 group-hover:w-full scale-x-0 group-hover:scale-x-100"></span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Links - Desktop */}
        <div className="hidden md:flex text-xl gap-4">
          <a className="group hover:text-blue-300 text-white transition-all duration-300 hover:scale-110 transform p-2 rounded-lg hover:bg-white/10" href="https://www.linkedin.com/in/ankit-kumar-5206b42aa" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="group-hover:drop-shadow-lg" />
          </a>
          <a className="group hover:text-blue-300 text-white transition-all duration-300 hover:scale-110 transform p-2 rounded-lg hover:bg-white/10" href="https://github.com/ak8006181716" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="group-hover:drop-shadow-lg" />
          </a>
          <a className="group hover:text-blue-300 text-white transition-all duration-300 hover:scale-110 transform p-2 rounded-lg hover:bg-white/10" href="https://www.instagram.com/i_am_ankitkumar89" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="group-hover:drop-shadow-lg" />
          </a>
          <a className="group hover:text-blue-300 text-white transition-all duration-300 hover:scale-110 transform p-2 rounded-lg hover:bg-white/10" href="https://x.com/yourname" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className="group-hover:drop-shadow-lg" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl hover:text-blue-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg p-2 hover:bg-white/10"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimesSolid : faBarsSolid} className="hover:drop-shadow-lg" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed  inset-0 z-40 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        aria-hidden={!isMenuOpen}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMenu}
        ></div>
        
        {/* Menu Panel */}
        <div 
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div className="p-6 bg-gray-900 rounded-xl">
            {/* Hidden title for accessibility */}
            <h2 id="mobile-menu-title" className="sr-only">Mobile Navigation Menu</h2>
            
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <button
                onClick={closeMenu}
                className="text-white text-2xl hover:text-blue-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded-lg p-2"
                aria-label="Close menu"
              >
                <FontAwesomeIcon icon={faTimesSolid} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav id="mobile-menu" className="mb-8">
              <ul className="space-y-6">
                <li>
                  <Link 
                    className="block text-xl font-semibold text-white hover:text-blue-300 transition-colors duration-300 py-2" 
                    to="/"
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    className="block text-xl font-semibold text-white hover:text-blue-300 transition-colors duration-300 py-2" 
                    to="/about"
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    className="block text-xl font-semibold text-white hover:text-blue-300 transition-colors duration-300 py-2" 
                    to="/projects"
                    onClick={closeMenu}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link 
                    className="block text-xl font-semibold text-white hover:text-blue-300 transition-colors duration-300 py-2" 
                    to="/technology"
                    onClick={closeMenu}
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link 
                    className="block text-xl font-semibold text-white hover:text-blue-300 transition-colors duration-300 py-2" 
                    to="/contact"
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Social Links */}
            <div className="flex gap-6 text-2xl">
              <a className="hover:text-blue-300 text-white transition-colors duration-300 hover:scale-110 transform" href="https://www.linkedin.com/in/ankit-kumar-5206b42aa" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a className="hover:text-blue-300 text-white transition-colors duration-300 hover:scale-110 transform" href="https://github.com/ak8006181716" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a className="hover:text-blue-300 text-white transition-colors duration-300 hover:scale-110 transform" href="https://www.instagram.com/i_am_ankitkumar89" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className="hover:text-blue-300 text-white transition-colors duration-300 hover:scale-110 transform" href="https://x.com/yourname" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
