import './hero-section.css';

export default function HeroSection() {
    return (
        <section>
            <span className="section-gradient" aria-hidden="true"></span>
            <div>
                <h1>
                    Inspiring brands <span className="hero-highlight">through digital mediums.</span>
                </h1>
                <p>Freelance web development & design by Kyczar. </p>
                <a href="/contact">
                    Get Started
                </a>
            </div>
            {/* Decorative SVG */}
            <svg className="hero-wave" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" fill="var(--charcoal)" />
            </svg>
        </section>
    );
}