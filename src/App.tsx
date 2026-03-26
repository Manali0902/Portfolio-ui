import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Highlights from './components/Highlights';
import Academics from './components/Academics';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import LetterGlitch from './components/react-bits/LetterGlitch';

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

  const currentPath = window.location.pathname;
  if (currentPath !== '/' && currentPath !== '/index.html') {
    return (
      <>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main style={{ position: 'relative', zIndex: 1, minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.3 }}>
            <LetterGlitch
              glitchColors={['#60a5fa', '#c084fc', '#a78bfa']}
              glitchSpeed={50}
              centerVignette={true}
              outerVignette={true}
              smooth={true}
            />
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h1 style={{ fontSize: '8rem', margin: '0', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 800 }}>404</h1>
            <h2 style={{ fontSize: '2rem', margin: '1rem 0', color: 'var(--text-primary)' }}>Page Not Found</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '500px' }}>
              Oops! The page you are looking for doesn't exist or has been moved.
            </p>
            <a href="/" className="btn" style={{ textDecoration: 'none' }}>Go Back Home</a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
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
