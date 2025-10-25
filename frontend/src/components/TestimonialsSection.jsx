import React from 'react';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      image: 'https://images.unsplash.com/photo-1655988940601-7702d8685f95?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwwfHx8fDE3NjEzOTUxMDh8MA&ixlib=rb-4.1.0&q=85',
      text: 'AsperoWeb transformed our online presence completely. Their attention to detail and creative approach exceeded all expectations. Our conversion rate increased by 150%!',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder, Creative Studios',
      image: 'https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHw0fHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwwfHx8fDE3NjEzOTUxMDh8MA&ixlib=rb-4.1.0&q=85',
      text: 'Working with AsperoWeb was an absolute pleasure. They understood our vision and brought it to life with stunning design and flawless functionality.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director, GrowthLab',
      image: 'https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwwfHx8fDE3NjEzOTUxMDh8MA&ixlib=rb-4.1.0&q=85',
      text: 'Professional, responsive, and incredibly talented. AsperoWeb delivered a website that not only looks amazing but performs exceptionally well.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-description">
            Don't just take our word for it—hear from businesses we've helped succeed
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <Quote className="quote-icon" size={40} />
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
