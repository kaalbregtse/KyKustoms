import React, { useState, useEffect } from "react";
import logo from '../../images/kykustoms-logo-icon.png';
import './nav-footer.css';

export default function NavMobile() {
    const [open, setOpen] = useState(false);
    
    useEffect(() => {
            const handleScroll = () => {
                const nav = document.getElementById('nav-mobile');
                if (window.scrollY > 100) {
                    nav.classList.add('stickyNavMobile');
                } else {
                    nav.classList.remove('stickyNavMobile');
                }
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (

        <nav className="nav-mobile" id="nav-mobile">
            <div className="nav-mobile-header">
                <a href="/"><img src={logo} alt="DoD Logo" /></a>
                <button
                    className={`nav-mobile-toggle${open ? " open" : ""}`}
                    aria-label="Toggle menu"
                    onClick={() => setOpen(!open)}
                >
                    <span className="nav-mobile-bar"></span>
                    <span className="nav-mobile-bar"></span>
                    <span className="nav-mobile-bar"></span>
                </button>
            </div>
            <div className={`nav-mobile-menu${open ? " open" : " close"}`}>
                <ul>
                    <li><a href="/" onClick={() => setOpen(false)}>Home</a></li>
                    <li><a href="/#services" onClick={() => setOpen(false)}>Services</a></li>
                    <li><a href="/#portfolio" onClick={() => setOpen(false)}>Past Work</a></li>
                    <li><a href="/#process" onClick={() => setOpen(false)}>Our Process</a></li>
                    <li><a href="/pricing" onClick={() => setOpen(false)}>Pricing</a></li>
                </ul>
                <a href="/contact" className="nav-mobile-cta" onClick={() => setOpen(false)}>Contact</a>
            </div>
        </nav>
    );
}