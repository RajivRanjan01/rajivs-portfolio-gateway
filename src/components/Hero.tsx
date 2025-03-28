
import React from 'react';
import { ArrowDown, GitHub, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            Rajiv Ranjan
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}></div>
          <h2 className="text-2xl md:text-3xl font-medium text-foreground/80 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            Java & Kotlin Android Developer
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70 mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
            Passionate about building innovative mobile applications with elegant UI and robust functionality
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
            <a href="#projects" className="btn-primary flex items-center justify-center gap-2">
              View My Projects
            </a>
            <a href="#contact" className="btn-outline flex items-center justify-center gap-2">
              Contact Me
            </a>
          </div>
          
          <div className="flex justify-center gap-6 animate-fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
            <a 
              href="https://github.com/RajivRanjan01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <GitHub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rajiv-ranjan-6680b8255/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
