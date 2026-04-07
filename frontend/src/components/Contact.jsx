import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://portfolio-backend-y17e.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }

    setTimeout(() => {
      if (status !== 'loading') setStatus('idle');
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 inline-block">Get In <span className="text-primary-500 glow-text">Touch</span></h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full glow-effect"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hiring? Have a project in mind? Let's connect and create something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 md:p-12 rounded-3xl border border-primary-500/20 shadow-[0_0_30px_rgba(59,130,246,0.05)] relative overflow-hidden"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all resize-none dark:text-white"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-4 px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto self-end"
            >
              {status === 'loading' ? (
                <span className="animate-pulse">Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} />
                </>
              )}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center text-green-500 justify-end mt-4">
                <CheckCircle size={20} className="mr-2" />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center text-red-500 justify-end mt-4">
                <AlertCircle size={20} className="mr-2" />
                <span>Oops! Something went wrong. Please try again.</span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
