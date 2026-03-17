import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-dark-bg transition-colors">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <a href="#home" className="text-2xl font-[Cormorant_Garamond] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-yellow-200 glow-text inline-block mb-2">
            Umesh.<span className="text-primary-500">Isu</span>
          </a>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Crafting elegant solutions with clean code.
          </p>
        </div>

        <div className="flex space-x-6 mb-6 md:mb-0">
          <a href="https://github.com/UmeshIsu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/umesh-isuranga/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:umeshisuranga414@gmail.com" className="text-gray-400 hover:text-primary-500 transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-center md:text-right text-gray-500 dark:text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Umesh Isuranga.</p>
          <p>Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
