import { motion } from 'framer-motion';
import {
  headingContainer, headingTitle, headingUnderline, headingSubtext,
  staggerGrid, cardItem,
} from '../utils/animations';

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
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'IntelliJ IDE'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">

        <motion.div
          variants={headingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2 variants={headingTitle} className="text-3xl md:text-5xl font-bold mb-4 inline-block">
            My <span className="text-primary-500 glow-text">Skills</span>
          </motion.h2>
          <motion.div
            variants={headingUnderline}
            style={{ originX: '50%' }}
            className="w-24 h-1 bg-primary-500 mx-auto rounded-full glow-effect"
          />
          <motion.p variants={headingSubtext} className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, ranging from robust backend architectures to dynamic, pixel-perfect frontend experiences.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillsData.map((group) => (
            <motion.div
              key={group.category}
              variants={cardItem}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              className="glass-panel p-6 rounded-2xl border border-primary-500/10 hover:border-primary-500/30 group transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-primary-500 border-b border-gray-200 dark:border-gray-700 pb-2">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.35 }}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary-500 mr-3 group-hover:shadow-[0_0_8px_rgba(234,179,8,0.8)] transition-shadow" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
