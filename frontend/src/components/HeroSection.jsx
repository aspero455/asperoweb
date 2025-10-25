import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ258ZW58MHx8fHwxNzYxMzk1MTAzfDA&ixlib=rb-4.1.0&q=85" 
          alt="Hero background"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <Sparkles size={16} />
          <span>Award-Winning Web Design Agency</span>
        </div>
        
        <h1 className="hero-title">
          We Create Digital
          <span className="gradient-text"> Experiences</span>
          <br />That Drive Results
        </h1>
        
        <p className="hero-description">
          Transforming visions into stunning digital realities. With 3 years of excellence 
          and 20+ successful projects, we craft websites that captivate and convert.
        </p>
        
        <div className="hero-cta">
          <Button onClick={scrollToContact} size="lg" className="primary-cta">
            Start Your Project
            <ArrowRight size={20} className="ml-2" />
          </Button>
          <Button onClick={scrollToPortfolio} size="lg" variant="outline" className="secondary-cta">
            View Our Work
          </Button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">20+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">3</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
