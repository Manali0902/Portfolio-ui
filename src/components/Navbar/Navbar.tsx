import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    const location = useLocation();

    // Close drawer automatically on route change
    React.useEffect(() => {
        setIsDrawerOpen(false);
    }, [location.pathname]);

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    return (
        <header className={`navbar ${visible ? 'navbar--visible' : ''} ${isDarkMode ? 'dark' : ''}`}>
            <Link to="/" className="navbar__brand" aria-label="Home">
                <img
                    src={isDarkMode ? '/logo-white.png' : '/logo-black.png'}
                    alt="Manali Gandhi Logo"
                    className="navbar__logo"
                />
                <span className="navbar__name">Manali Gandhi</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="navbar__links desktop-only">
                {/* <Link to="/projects" className="navbar__link">Projects</Link> */}
                <Link to="/experiences" className="navbar__link">Experiences</Link>
                <Link to="/academics" className="navbar__link">Academics</Link>
                <Link to="/contact" className="navbar__link">Contact Me</Link>
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
                    {/* <Link to="/projects" className="navbar__drawer-link">Projects</Link> */}
                    <Link to="/experiences" className="navbar__drawer-link">Experiences</Link>
                    <Link to="/academics" className="navbar__drawer-link">Academics</Link>
                    <Link to="/contact" className="navbar__drawer-link">Contact Me</Link>
                </nav>
            </div>
        </header>
    );
}
