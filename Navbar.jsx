import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import logo from '../assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    React.useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled glass-dark' : 'transparent'}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo-link">
                    <img src={logo} alt="Amat Consulting" className="navbar-logo-img" />
                    <span className="navbar-logo-text">amatconsulting.com</span>
                </Link>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
                <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <li>
                        <NavLink to="/" onClick={toggleMenu}>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={toggleMenu}>À Propos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" onClick={toggleMenu}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" onClick={toggleMenu}>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={toggleMenu} className="btn btn-primary">Contact</NavLink>
                    </li>
                    <li className="navbar-theme-toggle">
                        <DarkModeToggle />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
