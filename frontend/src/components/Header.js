import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';
import logo from '../images/Logo.jpg';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <header className="header">
            <div className="button-container">
                <nav>
                    <button><Link to="/register">Register</Link></button>
                    <button><Link to="/login">Login</Link></button>
                </nav>
            </div>
            <div className="header-container">
                <img src={logo} alt="Logo" className="logo" />
                <h1>DigiSoulTech</h1>
                <nav>
                    <div className={`hamburger${menuOpen ? ' open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                        <li><Link to="/service" onClick={() => setMenuOpen(false)}>Services</Link></li>
                        <li><Link to="/team" onClick={() => setMenuOpen(false)}>Team</Link></li>
                        <li><Link to="/career" onClick={() => setMenuOpen(false)}>Careers</Link></li>
                        <li><Link to="/score" onClick={() => setMenuOpen(false)}>Score Center</Link></li>
                        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
