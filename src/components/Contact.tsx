import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-tech">
            <span className="gradient-text">Let's Create Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4 p-4 bg-card/30 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-accent/30 transition-all duration-300">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">aishi@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-card/30 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-accent/30 transition-all duration-300">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-card/30 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-accent/30 transition-all duration-300">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Follow me</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-3 bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-accent/30 hover:bg-primary/10 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/30 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 hover:border-accent/20 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-foreground placeholder-muted-foreground"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-foreground placeholder-muted-foreground"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-foreground placeholder-muted-foreground resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 px-6 rounded-lg hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2 font-medium hover:scale-[1.02]"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-primary/20 text-center">
          <p className="text-muted-foreground">
            © 2024 Aishi Mukhopadhyay. Crafted with care and attention to detail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
