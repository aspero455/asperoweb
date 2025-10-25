import React from 'react';
import { Award, Users, Zap, Target } from 'lucide-react';

export const AboutSection = () => {
  const highlights = [
    {
      icon: <Award size={32} />,
      title: 'Award-Winning Design',
      description: 'Recognized for exceptional creativity and innovation in web design'
    },
    {
      icon: <Users size={32} />,
      title: 'Client-Centric Approach',
      description: 'Your success is our mission. We listen, understand, and deliver'
    },
    {
      icon: <Zap size={32} />,
      title: 'Lightning-Fast Delivery',
      description: 'Efficient workflows ensure your project launches on time'
    },
    {
      icon: <Target size={32} />,
      title: 'Results-Driven',
      description: 'Beautiful designs that convert visitors into customers'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Us</span>
          <h2 className="section-title">Crafting Digital Excellence Since 2022</h2>
          <p className="section-description">
            AsperoWeb is a premier web design agency dedicated to creating exceptional digital experiences. 
            We blend creativity, strategy, and cutting-edge technology to deliver websites that don't just 
            look amazing—they perform exceptionally.
          </p>
        </div>

        <div className="about-grid">
          {highlights.map((item, index) => (
            <div key={index} className="about-card">
              <div className="about-icon">{item.icon}</div>
              <h3 className="about-card-title">{item.title}</h3>
              <p className="about-card-description">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="about-image-section">
          <img 
            src="https://images.unsplash.com/photo-1542744094-3a31f272c490?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHw0fHx3ZWIlMjBkZXNpZ258ZW58MHx8fHwxNzYxMzk1MTAzfDA&ixlib=rb-4.1.0&q=85"
            alt="Our team at work"
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
