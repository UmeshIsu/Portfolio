import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GitHubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0 1 12 6.796a11.52 11.52 0 0 1 3.004.404c2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);
import swapUpImg from '../assets/Swap-up.jpeg';
import educoImg from '../assets/Screenshot 2026-03-23 203203.png';
import cbcImg from '../assets/logo2.png';
import {
  headingContainer, headingTitle, headingUnderline, headingSubtext,
  staggerGrid, cardItem,
} from '../utils/animations';

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
          variants={headingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2 variants={headingTitle} className="text-3xl md:text-5xl font-bold mb-4 inline-block">
            Featured <span className="text-primary-500 glow-text">Projects</span>
          </motion.h2>
          <motion.div
            variants={headingUnderline}
            style={{ originX: '50%' }}
            className="w-24 h-1 bg-primary-500 mx-auto rounded-full glow-effect"
          />
          <motion.p variants={headingSubtext} className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent works. I focus on aesthetic UI design and robust backend performance.
            (Data to be added later)
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardItem}
              whileHover={{ y: -7, transition: { duration: 0.22 } }}
              className="glass-panel rounded-2xl overflow-hidden group border border-primary-500/10 hover:border-primary-500/40 transition-all hover:shadow-[0_0_28px_rgba(234,179,8,0.12)] flex flex-col"
            >
              {/* Image area */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-75 pointer-events-none transition-opacity duration-500 group-hover:opacity-45" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-transparent to-transparent group-hover:from-primary-500/10 pointer-events-none transition-all duration-500" />
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
                    <GitHubIcon size={18} /> <span className="ml-2">Code</span>
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/UmeshIsu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full border border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all font-medium"
          >
            See more on GitHub <ExternalLink size={16} className="ml-2" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
