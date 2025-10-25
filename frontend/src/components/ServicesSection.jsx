import React from 'react';
import { Code, Palette, Rocket, Search, Smartphone, ShoppingCart } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies for optimal performance and scalability'
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that create memorable user experiences'
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Responsive Design',
      description: 'Pixel-perfect designs that work flawlessly across all devices and screen sizes'
    },
    {
      icon: <ShoppingCart size={40} />,
      title: 'E-Commerce Solutions',
      description: 'Powerful online stores that drive sales and enhance customer experience'
    },
    {
      icon: <Search size={40} />,
      title: 'SEO Optimization',
      description: 'Strategic optimization to boost your visibility and organic traffic'
    },
    {
      icon: <Rocket size={40} />,
      title: 'Performance Optimization',
      description: 'Lightning-fast load times and seamless interactions for better conversions'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Services</span>
          <h2 className="section-title">What We Do Best</h2>
          <p className="section-description">
            Comprehensive web solutions tailored to your unique needs and goals
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
