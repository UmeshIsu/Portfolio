import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 inline-block">Education & <span className="text-primary-500 glow-text">Experience</span></h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full glow-effect"></div>
        </motion.div>

        <div className="relative border-l-2 border-primary-500/30 ml-3 md:ml-0 md:pl-0">
          
          {/* Experience Item 1 */}
          <div className="mb-12 relative pl-8 md:pl-0">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 md:pr-12 md:text-right"
            >
               <div className="absolute w-6 h-6 bg-primary-500 rounded-full left-[-11px] md:left-[calc(50%-12px)] top-1 border-4 border-bg-color shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10"></div>
            </motion.div>
            
            <div className="md:w-1/2 md:ml-auto md:pl-12">
               <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5 }}
                 className="glass-panel p-6 rounded-2xl border border-primary-500/10 hover:border-primary-500/40 transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] relative"
               >
                 <span className="text-sm text-primary-500 font-bold tracking-wider mb-2 block">PRESENT</span>
                 <h3 className="text-xl font-bold mb-1">Full Stack Developer</h3>
                 <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Your Company / Freelance</p>
                 <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                   Currently available for opportunities. Actively building dynamic web applications, learning modern architectures, and contributing to open source projects.
                 </p>
               </motion.div>
            </div>
          </div>

          {/* Education Item 1 */}
          <div className="mb-12 relative pl-8 md:pl-0">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 md:pr-12 md:text-right md:absolute md:left-0"
            >
               <div className="absolute w-6 h-6 bg-cyan-500 rounded-full left-[-11px] md:right-[-12px] md:left-auto top-1 border-4 border-bg-color shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10"></div>
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5 }}
                 className="glass-panel p-6 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/40 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]"
               >
                 <span className="text-sm text-cyan-500 font-bold tracking-wider mb-2 block">2020 - 2024</span>
                 <h3 className="text-xl font-bold mb-1">BSc in Computer Science</h3>
                 <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">University Name</p>
                 <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                   Details about your degree, major achievements, and relevant coursework will be added here.
                 </p>
               </motion.div>
            </motion.div>
            <div className="md:w-1/2 md:ml-auto md:pl-12 hidden md:block opacity-0 h-40">
              {/* Spacer for desktop layout */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
