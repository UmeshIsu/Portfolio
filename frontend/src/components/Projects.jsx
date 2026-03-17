import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution featuring secure payments, user authentication, and admin dashboard. Empty data placeholder for now.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/UmeshIsu',
    demo: '#',
    image: 'https://via.placeholder.com/600x400/1e293b/3b82f6?text=Project+1',
  },
  {
    id: 2,
    title: 'Task Management System',
    description: 'A responsive web application for managing tasks, teams, and projects with real-time updates. Empty data placeholder.',
    tech: ['React', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/UmeshIsu',
    demo: '#',
    image: 'https://via.placeholder.com/600x400/1e293b/06b6d4?text=Project+2',
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard aggregating data from various social platforms with beautiful charting and light/dark mode.',
    tech: ['JavaScript', 'HTML/CSS', 'Python', 'PostgreSQL'],
    github: 'https://github.com/UmeshIsu',
    demo: '#',
    image: 'https://via.placeholder.com/600x400/1e293b/8b5cf6?text=Project+3',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 inline-block">Featured <span className="text-primary-500 glow-text">Projects</span></h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full glow-effect"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent works. I focus on aesthetic UI design and robust backend performance.
            (Data to be added later)
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel rounded-2xl overflow-hidden group border border-primary-500/10 hover:border-primary-500/40 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] flex flex-col"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-auto border-t border-gray-200 dark:border-gray-700 pt-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium hover:text-primary-500 transition-colors"
                  >
                    <Github size={18} className="mr-2" /> Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium hover:text-cyan-500 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="https://github.com/UmeshIsu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full border border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all font-medium"
          >
            See more on GitHub <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
