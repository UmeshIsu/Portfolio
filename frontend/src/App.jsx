import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <ThemeProvider>
      <div className="font-sans min-h-screen selection:bg-primary-500/30">
        <ParticleBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <Analytics />
      </div>
    </ThemeProvider>
  );
}

export default App;
