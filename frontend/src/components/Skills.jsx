import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Frontend',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Framer Motion'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Java', 'Python', 'REST APIs'],
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Supabase'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'NPM', 'Vite'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 inline-block">My <span className="text-primary-500 glow-text">Skills</span></h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full glow-effect"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, ranging from robust backend architectures to dynamic, pixel-perfect frontend experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-primary-500/10 hover:border-primary-500/30 group"
            >
              <h3 className="text-xl font-bold mb-6 text-primary-500 border-b border-gray-200 dark:border-gray-700 pb-2">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-primary-500 mr-3 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-shadow"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
