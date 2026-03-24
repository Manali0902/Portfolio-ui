import React, { useState } from 'react';
import './Navbar.css';
import MoonIcon from '../../Icons/MoonIcon';
import SunIcon from '../../Icons/SunIcon';
import MenuIcon from '../../Icons/MenuIcon';
import CloseIcon from '../../Icons/CloseIcon';

interface NavbarProps {
    visible: boolean;
    isDarkMode: boolean;
    toggleTheme: () => void;
}

export default function Navbar({ visible, isDarkMode, toggleTheme }: NavbarProps) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        setIsDrawerOpen(false);
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`navbar ${visible ? 'navbar--visible' : ''} ${isDarkMode ? 'dark' : ''}`}>
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="navbar__brand" aria-label="Home">
                <img
                    src={isDarkMode ? '/logo-white.png' : '/logo-black.png'}
                    alt="Manali Gandhi Logo"
                    className="navbar__logo"
                />
                <span className="navbar__name">Manali Gandhi</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="navbar__links desktop-only">
                <a href="#experiences" onClick={(e) => handleLinkClick(e, 'experiences')} className="navbar__link">Experiences</a>
                <a href="#academics" onClick={(e) => handleLinkClick(e, 'academics')} className="navbar__link">Academics</a>
                <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="navbar__link">Contact Me</a>
            </nav>

            <div className="navbar__actions">
                <button
                    className="navbar__icon-btn"
                    onClick={toggleTheme}
                    aria-label="Toggle Theme"
                >
                    {isDarkMode ? <SunIcon /> : <MoonIcon />}
                </button>
                <button
                    className="navbar__icon-btn mobile-only hamburger-btn"
                    onClick={toggleDrawer}
                    aria-label="Toggle Menu"
                >
                    <MenuIcon />
                </button>
            </div>

            {/* Mobile Drawer Overlay */}
            {isDrawerOpen && (
                <div className="navbar__drawer-overlay" onClick={toggleDrawer} aria-hidden="true"></div>
            )}

            {/* Mobile Drawer */}
            <div className={`navbar__drawer ${isDrawerOpen ? 'navbar__drawer--open' : ''} ${isDarkMode ? 'dark' : ''}`}>
                <div className="navbar__drawer-header">
                    <span className="navbar__drawer-title">Menu</span>
                    <button className="navbar__icon-btn" onClick={toggleDrawer} aria-label="Close Menu">
                        <CloseIcon />
                    </button>
                </div>
                <nav className="navbar__drawer-links">
                    <a href="#experiences" onClick={(e) => handleLinkClick(e, 'experiences')} className="navbar__drawer-link">Experiences</a>
                    <a href="#academics" onClick={(e) => handleLinkClick(e, 'academics')} className="navbar__drawer-link">Academics</a>
                    <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="navbar__drawer-link">Contact Me</a>
                </nav>
            </div>
        </header>
    );
}
