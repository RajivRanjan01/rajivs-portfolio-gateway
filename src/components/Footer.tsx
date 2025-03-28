
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-foreground/70">
              &copy; {currentYear} Rajiv Ranjan. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-foreground/70">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
