import React, { useState } from "react";
import logo from '../../images/kykustoms-logo-icon.png';
import './nav-footer.css';

export default function NavMobile() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="nav-mobile">
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
            <div className={`nav-mobile-menu${open ? " open" : ""}`}>
                <ul>
                    <li><a href="/" onClick={() => setOpen(false)}>Home</a></li>
                    <li><a href="/#services" onClick={() => setOpen(false)}>Services</a></li>
                    <li><a href="/#portfolio" onClick={() => setOpen(false)}>Past Work</a></li>
                    <li><a href="/#process" onClick={() => setOpen(false)}>Our Process</a></li>
                    <li><a href="/#testimonials" onClick={() => setOpen(false)}>Testimonials</a></li>
                </ul>
                <a href="/contact" className="nav-mobile-cta" onClick={() => setOpen(false)}>Contact</a>
            </div>
        </nav>
    );
}