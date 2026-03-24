import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Highlights from './components/Highlights';
import Academics from './components/Academics';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <>
      <CustomCursor />

      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <div id="home">
          <Hero />
        </div>
        <Highlights />
        <AboutMe />
        <Experience />
        <Academics />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
