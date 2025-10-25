import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-logo">AsperoWeb</h3>
            <p className="footer-description">
              Creating exceptional digital experiences that drive results. 
              Your vision, our expertise.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
              <li><button onClick={() => scrollToSection('services')}>Services</button></li>
              <li><button onClick={() => scrollToSection('portfolio')}>Portfolio</button></li>
              <li><button onClick={() => scrollToSection('testimonials')}>Testimonials</button></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('services')}>Web Development</button></li>
              <li><button onClick={() => scrollToSection('services')}>UI/UX Design</button></li>
              <li><button onClick={() => scrollToSection('services')}>E-Commerce</button></li>
              <li><button onClick={() => scrollToSection('services')}>SEO Optimization</button></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>
                <Mail size={18} />
                <a href="mailto:aspero455@gmail.com">aspero455@gmail.com</a>
              </li>
              <li>
                <Phone size={18} />
                <a href="tel:+919179284903">+91 9179284903</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} AsperoWeb. All rights reserved.
          </p>
          <div className="footer-legal">
            <button>Privacy Policy</button>
            <span className="separator">•</span>
            <button>Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
