import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import vitLogo from '../assets/vit-logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <button className="logo" type="button" onClick={scrollToTop}>
        <img className="logo-image" src={vitLogo} alt="VIT logo" />
        <span className="logo-text">
          <span className="logo-title">CLUBVERSE</span>
          <span className="logo-subtitle">INSTITUTIONAL CLUBS PORTAL</span>
        </span>
      </button>
      
      <button className="hamburger" type="button" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><button onClick={() => scrollToSection('clubs')}>Clubs</button></li>
        <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
}

export default Navbar; 
