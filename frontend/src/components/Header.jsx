import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-text">AsperoWeb</span>
        </div>

        <nav className="desktop-nav">
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
          <button onClick={() => scrollToSection('portfolio')} className="nav-link">Portfolio</button>
          <button onClick={() => scrollToSection('testimonials')} className="nav-link">Testimonials</button>
          <Button onClick={() => scrollToSection('contact')} className="cta-button">Get in Touch</Button>
        </nav>

        <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => scrollToSection('about')} className="mobile-nav-link">About</button>
          <button onClick={() => scrollToSection('services')} className="mobile-nav-link">Services</button>
          <button onClick={() => scrollToSection('portfolio')} className="mobile-nav-link">Portfolio</button>
          <button onClick={() => scrollToSection('testimonials')} className="mobile-nav-link">Testimonials</button>
          <Button onClick={() => scrollToSection('contact')} className="w-full mt-4">Get in Touch</Button>
        </div>
      )}
    </header>
  );
};

export default Header;
