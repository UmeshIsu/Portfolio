import { motion } from 'framer-motion';
import uniImg from '../assets/uni-img.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 inline-block">About <span className="text-primary-500 glow-text">Me</span></h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full glow-effect"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden glass-panel flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-500">
              <img src={uniImg} alt="Umesh Isuranga at University" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border-2 border-primary-500/30 rounded-2xl glow-effect pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Passionate Full Stack Developer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I am a dedicated Full Stack Developer with a strong foundation in both frontend and backend technologies. I specialize in building robust, modern web applications and mobile applications from the ground up, ensuring seamless user experiences and high-performance server logic.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              My approach focuses on writing clean, scalable code and turning complex problems into elegant, professional solutions. I love implementing smooth animations, glowing effects, and responsive designs that captivate users.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass-panel p-5 rounded-xl border border-primary-500/20 hover:border-primary-500/50 transition-colors group cursor-default">
                <h4 className="font-bold text-primary-500 text-3xl mb-1 group-hover:scale-110 transform transition-transform origin-left">Passion</h4>
                <p className="text-sm text-gray-500 dark:text-gray-300">For Innovation</p>
              </div>
              <div className="glass-panel p-5 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-colors group cursor-default">
                <h4 className="font-bold text-cyan-400 text-3xl mb-1 group-hover:scale-110 transform transition-transform origin-left">Quality</h4>
                <p className="text-sm text-gray-500 dark:text-gray-300">Clean Code Focus</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
