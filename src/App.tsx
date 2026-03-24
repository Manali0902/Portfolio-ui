import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Experiences from './components/Experiences/Experiences';
import Academics from './components/Academics/Academics';
import Contact from './components/Contact/Contact';
import { motion } from 'framer-motion';

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isButton, setIsButton] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      
      const hoverable = target.closest('a, button, input, [role="button"], .hoverable, p, h1, h2, h3, h5, span');
      setIsHovering(!!hoverable);
      
      const btn = target.closest('button, .custom-button, a');
      setIsButton(!!btn);
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div 
      className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isButton ? 'hovering-button' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}

function SectionReveal({ children, id }: { children: React.ReactNode, id: string }) {
  return (
    <motion.section 
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ minHeight: "100vh", padding: "100px 20px" }}
    >
      {children}
    </motion.section>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); // User wants dark mode/pretty
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 5);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : ''}`}>
      <CustomCursor />
      
      <Navbar visible={true} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main>
        <div id="home">
            <Home hasScrolled={hasScrolled} />
        </div>
        
        <div className={`continuous-content visible`} style={{ marginTop: hasScrolled ? '0' : '100px' }}>
          <SectionReveal id="experiences">
            <Experiences />
          </SectionReveal>

          <SectionReveal id="academics">
            <Academics />
          </SectionReveal>

          <SectionReveal id="contact">
            <Contact />
          </SectionReveal>
        </div>
      </main>
    </div>
  );
}

export default App;
