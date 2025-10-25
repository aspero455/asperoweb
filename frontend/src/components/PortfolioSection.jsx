import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Superlist',
      category: 'Productivity',
      type: 'web',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXNpZ258ZW58MHx8fHwxNzYxMzk1MTAzfDA&ixlib=rb-4.1.0&q=85',
      description: 'A powerful task management platform with elegant design and seamless UX',
      link: 'https://superlist.com'
    },
    {
      id: 2,
      title: 'The Ocean Agency',
      category: 'Environmental',
      type: 'design',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXNpZ258ZW58MHx8fHwxNzYxMzk1MTAzfDA&ixlib=rb-4.1.0&q=85',
      description: 'Interactive platform showcasing ocean conservation initiatives',
      link: '#'
    },
    {
      id: 3,
      title: 'Firewatch',
      category: 'Gaming',
      type: 'web',
      image: 'https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwwfHx8fDE3NjEzOTUxMDh8MA&ixlib=rb-4.1.0&q=85',
      description: 'Immersive storytelling website for an award-winning indie game',
      link: '#'
    },
    {
      id: 4,
      title: 'Wayfinder',
      category: 'Navigation',
      type: 'mobile',
      image: 'https://images.unsplash.com/photo-1502810190503-8303352d0dd1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwwfHx8fDE3NjEzOTUxMDh8MA&ixlib=rb-4.1.0&q=85',
      description: 'Modern navigation app with intuitive interface and real-time updates',
      link: '#'
    }
  ];

  const filters = ['all', 'web', 'design', 'mobile'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Our Featured Work</h2>
          <p className="section-description">
            Explore our recent projects and see how we've helped businesses achieve their digital goals
          </p>
        </div>

        <div className="portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-image-wrapper">
                <img src={project.image} alt={project.title} className="portfolio-image" />
                <div className="portfolio-overlay">
                  <Button className="view-project-btn">
                    <ExternalLink size={20} />
                  </Button>
                </div>
              </div>
              <div className="portfolio-content">
                <span className="portfolio-category">{project.category}</span>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
