import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import swapUpImg from '../assets/Swap-up.jpeg';
import educoImg from '../assets/Screenshot 2026-03-23 203203.png';
import cbcImg from '../assets/logo2.png';

const projects = [
  {
    id: 1,
    title: 'Swap-Up',
    type: 'Full Stack',
    description: 'SwapUp is a comprehensive mobile app designed specifically for hotel shift management. Developed as our Software Development Group Project (SDGP) at the Informatics Institute of Technology (IIT), this application streamlines scheduling, attendance, and communication between hotel staff. It features strict role-based access, ensuring managers and employees only interact with the tools specific to their roles.',
    tech: ['React native', 'Node.js', 'Express', 'TypeScript', 'Supabase', 'API'],
    github: 'https://github.com/UmeshIsu/SwapUp',
    demo: '#',
    image: swapUpImg,
  },
  {
    id: 2,
    title: 'EDUCO',
    type: 'Frontend',
    description: 'This website is dedicated to promoting Sustainable Development Goal 4 (SDG 4): Quality Education, as outlined by the United Nations. Our mission is to create a platform that raises awareness and encourages action towards ensuring inclusive and equitable quality education for all.',
    tech: ['HTML', 'Tailwind CSS', 'Javascript'],
    github: 'https://github.com/UmeshIsu/EDUCO',
    demo: '#',
    image: educoImg,
  },
  {
    id: 3,
    title: 'CBC Crystal Beauty',
    type: 'Full Stack',
    description: 'An fullstack E-commerce web application for cosmetics items and appoitment scheduling for saloon.Building the backend API using Express.js to handle appointment scheduling, client management and services listings.Responsive frontend using React allowing clients to book appoinments and view services online.',
    tech: ['React', 'Express.js', 'API', 'MongoDB'],
    github: 'https://github.com/UmeshIsu/cdc-frontend',
    demo: '#',
    image: cbcImg,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
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
              {/* ── Image area ── */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Bottom fade into card */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-75 pointer-events-none transition-opacity duration-500 group-hover:opacity-45" />
                {/* Subtle gold tint on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-transparent to-transparent group-hover:from-primary-500/10 pointer-events-none transition-all duration-500" />
                {/* Project Type Badge */}
                {project.type && (
                  <span className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg backdrop-blur-sm ${
                    project.type === 'Full Stack'
                      ? 'bg-emerald-500/80 text-white shadow-emerald-500/30'
                      : 'bg-sky-500/80 text-white shadow-sky-500/30'
                  }`}>
                    {project.type}
                  </span>
                )}
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