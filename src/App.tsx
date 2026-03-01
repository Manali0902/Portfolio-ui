import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Button/Button';
import MoonIcon from './Icons/MoonIcon';
import SunIcon from './Icons/SunIcon';
import Projects from './components/Projects/Projects';
import Experiences from './components/Experiences/Experiences';
import Academics from './components/Academics/Academics';
import Contact from './components/Contact/Contact';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    const onScroll = () => {
      // If we scroll down past 5px on Home it triggers Frame 2 transition
      setHasScrolled(window.scrollY > 5);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Call ONCE right away to set scroll state correctly if restoring scroll position
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  // If not on Home page, always show the Navbar
  const isNavbarVisible = !isHome || hasScrolled;

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : ''}`}>
      {/* Fixed navbar — visible when off hero OR on any other page entirely */}
      <Navbar visible={isNavbarVisible} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={<Home hasScrolled={hasScrolled} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
