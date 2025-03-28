
import React from 'react';
import { Phone, Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container bg-secondary/50">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p className="mb-6 text-lg">
            I'm currently looking for new opportunities in Android and Mobile Development. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-6">
            <a 
              href="tel:9508403824" 
              className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone size={20} className="text-primary" />
              </div>
              <span>+91 9508403824</span>
            </a>
            
            <a 
              href="mailto:rajivranjan12142@gmail.com" 
              className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail size={20} className="text-primary" />
              </div>
              <span>rajivranjan12142@gmail.com</span>
            </a>
            
            <a 
              href="https://github.com/RajivRanjan01" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <Github size={20} className="text-primary" />
              </div>
              <span>github.com/RajivRanjan01</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/rajiv-ranjan-6680b8255/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <Linkedin size={20} className="text-primary" />
              </div>
              <span>linkedin.com/in/rajiv-ranjan-6680b8255</span>
            </a>
          </div>
        </div>
        
        <div className="bg-card rounded-lg shadow-lg p-6">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="Your Name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
