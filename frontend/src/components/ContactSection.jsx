import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be replaced with backend integration
    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. We\'ll get back to you soon!',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contact Us</span>
          <h2 className="section-title">Let's Build Something Amazing Together</h2>
          <p className="section-description">
            Have a project in mind? We'd love to hear from you. Get in touch and let's create something extraordinary.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3 className="contact-info-title">Get in Touch</h3>
            <p className="contact-info-text">
              Ready to start your project? Reach out to us and let's discuss how we can help bring your vision to life.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <Mail className="contact-icon" size={24} />
                <div>
                  <div className="contact-label">Email</div>
                  <a href="mailto:aspero455@gmail.com" className="contact-value">aspero455@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <Phone className="contact-icon" size={24} />
                <div>
                  <div className="contact-label">Phone</div>
                  <a href="tel:+919179284903" className="contact-value">+91 9179284903</a>
                </div>
              </div>

              <div className="contact-item">
                <MapPin className="contact-icon" size={24} />
                <div>
                  <div className="contact-label">Location</div>
                  <div className="contact-value">India</div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={6}
                required
                className="form-textarea"
              />
            </div>

            <Button type="submit" size="lg" className="submit-button">
              Send Message
              <Send size={20} className="ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
