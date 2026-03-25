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

        <div className="relative border-l-2 md:border-l-0 border-primary-500/30 ml-3 md:ml-0 md:pl-0">
          
          {/* Desktop Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary-500/30 -translate-x-1/2"></div>

          {/* Education Item 1 */}
          <div className="mb-12 relative flex flex-col md:flex-row md:justify-center pl-8 md:pl-0">
            {/* Dot */}
            <div className="absolute w-6 h-6 bg-cyan-500 rounded-full left-[-11px] md:left-1/2 md:-translate-x-1/2 top-1 md:top-6 border-4 border-bg-color shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10"></div>
            
            {/* Left Content */}
            <div className="w-full md:w-1/2 md:pr-12 order-2 md:order-1 pt-2 md:pt-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-panel p-6 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/40 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] text-left"
              >
                <span className="text-sm text-cyan-500 font-bold tracking-wider mb-2 block">2023 - Present</span>
                <h3 className="text-xl font-bold mb-1">Informatics Institute of Technology</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  BSc (Hons) in Computer Science in University of Westminster<br className="hidden md:block" /> Affiliated with Informatics Institute of Technology
                </p>
                <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  <div className="font-semibold mb-2">Modules :-</div>
                  <ul className="list-none space-y-1.5 flex flex-col items-start">
                    <li className="flex gap-2"><span>•</span><span>Object-Oriented Programming (OOP)</span></li>
                    <li className="flex gap-2"><span>•</span><span>Software Developmnet Group Project (SDGP)</span></li>
                    <li className="flex gap-2"><span>•</span><span>Information Technology Security (ITS)</span></li>
                    <li className="flex gap-2"><span>•</span><span>Database Systems</span></li>
                    <li className="flex gap-2"><span>•</span><span>Web Design and Development</span></li>
                  </ul>
                </div>
              </motion.div>
            </div>
            
            {/* Right Empty */}
            <div className="hidden md:block w-full md:w-1/2 order-1 md:order-2"></div>
          </div>

          {/* Education Item 2 */}
          <div className="mb-12 relative flex flex-col md:flex-row md:justify-center pl-8 md:pl-0">
            {/* Dot */}
            <div className="absolute w-6 h-6 bg-cyan-500 rounded-full left-[-11px] md:left-1/2 md:-translate-x-1/2 top-1 md:top-6 border-4 border-bg-color shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10"></div>
            
            {/* Left Empty */}
            <div className="hidden md:block w-full md:w-1/2 md:pr-12 order-1"></div>
            
            {/* Right Content */}
            <div className="w-full md:w-1/2 md:pl-12 order-2 pt-2 md:pt-0">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-panel p-6 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/40 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] text-left"
              >
                <span className="text-sm text-cyan-500 font-bold tracking-wider mb-2 block">2023 - 2024</span>
                <h3 className="text-xl font-bold mb-1">Foundation Course - IIT</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Distintion Pass with 80+ marks.</p>
                <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  <div className="font-semibold mb-2">Modules :-</div>
                  <ul className="list-none space-y-1.5 flex flex-col items-start">
                    <li className="flex gap-2"><span>•</span><span>Python</span></li>
                    <li className="flex gap-2"><span>•</span><span>Mathematics</span></li>
                    <li className="flex gap-2"><span>•</span><span>Database Systems</span></li>
                    <li className="flex gap-2"><span>•</span><span>English</span></li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Education Item 3 */}
          <div className="mb-12 relative flex flex-col md:flex-row md:justify-center pl-8 md:pl-0">
            {/* Dot */}
            <div className="absolute w-6 h-6 bg-cyan-500 rounded-full left-[-11px] md:left-1/2 md:-translate-x-1/2 top-1 md:top-6 border-4 border-bg-color shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10"></div>
            
            {/* Left Content */}
            <div className="w-full md:w-1/2 md:pr-12 order-2 md:order-1 pt-2 md:pt-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-panel p-6 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/40 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] text-left"
              >
                <span className="text-sm text-cyan-500 font-bold tracking-wider mb-2 block">2017 - 2023</span>
                <h3 className="text-xl font-bold mb-1">Ananda Maithreya Central College</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">G.C.E. Ordinary Level (O/L)</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Achieved 5 'A' passes, including Maths, English, and Science.
                </p>
              </motion.div>
            </div>
            
            {/* Right Empty */}
            <div className="hidden md:block w-full md:w-1/2 order-1 md:order-2"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
