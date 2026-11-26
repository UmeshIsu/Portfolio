import { motion } from 'framer-motion';
import {
  headingContainer, headingTitle, headingUnderline, headingSubtext,
} from '../utils/animations';

const SectionHeading = ({ title, highlight, subtitle }) => (
  <motion.div
    variants={headingContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-100px' }}
    className="text-center mb-14 md:mb-16"
  >
    <motion.h2 variants={headingTitle} className="text-3xl md:text-5xl font-bold mb-4 inline-block">
      {title} <span className="text-primary-500 glow-text">{highlight}</span>
    </motion.h2>
    <motion.div
      variants={headingUnderline}
      style={{ originX: '50%' }}
      className="w-24 h-1 bg-primary-500 mx-auto rounded-full glow-effect"
    />
    {subtitle && (
      <motion.p variants={headingSubtext} className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);

export default SectionHeading;
