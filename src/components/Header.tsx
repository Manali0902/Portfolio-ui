import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import GooeyNav from './react-bits/GooeyNav';

interface HeaderProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Academics', href: '#academics' },
    { label: 'Contact', href: '#contact' },
];

export default function Header({ isDarkMode, toggleTheme }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = '';
        }
    }, [isMobileMenuOpen]);

    const scrollToSection = (id: string, e?: React.MouseEvent) => {
        if (e) e.preventDefault();
        setIsMobileMenuOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const handleGooeyNavClick = (item: { label: string; href: string }) => {
        const id = item.href.replace('#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const linkProps = {
        className: 'header-link',
        style: { fontSize: isMobileMenuOpen ? '1.5rem' : '1rem' }
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <a href="#home" onClick={(e) => scrollToSection('home', e)} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 100 }}>
                <img src={isDarkMode ? '/logo-white.png' : '/logo-black.png'} alt="Logo" style={{ height: '40px', filter: isDarkMode ? 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' : 'drop-shadow(0 0 10px rgba(0,0,0,0.1))' }} />
                <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '1px' }}>Manali Gandhi</span>
            </a>

            {/* Desktop Navigation - GooeyNav */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="header-nav">
                <GooeyNav
                    items={navItems}
                    initialActiveIndex={-1}
                    onItemClick={handleGooeyNavClick}
                />
                
                <button 
                    onClick={toggleTheme} 
                    className="theme-toggle"
                    aria-label="Toggle Theme"
                >
                    {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                </button>
            </div>

            {/* Hamburger Button */}
            <button 
                className="hamburger-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Mobile Menu"
            >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="mobile-menu"
                    >
                        <a href="#about" onClick={(e) => scrollToSection('about', e)} {...linkProps}>About</a>
                        <a href="#experiences" onClick={(e) => scrollToSection('experiences', e)} {...linkProps}>Experiences</a>
                        <a href="#academics" onClick={(e) => scrollToSection('academics', e)} {...linkProps}>Academics</a>
                        <a href="#contact" onClick={(e) => scrollToSection('contact', e)} {...linkProps}>Contact</a>
                        
                        <button 
                            onClick={toggleTheme} 
                            className="theme-toggle"
                            aria-label="Toggle Theme"
                            style={{ marginTop: '2rem' }}
                        >
                            {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
