import './hero-section.css';

export default function HeroSection() {
    return (
        <section className="hero-section">
            <span className="section-gradient" aria-hidden="true"></span>
            <div>
                <h1>
                    Custom Web Design & Development
                    <span className="hero-highlight"> That Grows Your Business</span>
                </h1>
                <p>Freelance web development & design by Kyczar.</p>
                <a href="/contact">
                    Get Started
                </a>
            </div>
            {/* Decorative SVGs */}
            <svg className="hero-wave" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" fill="var(--pure-white)" />
            </svg>
            <svg className="hero-svg" viewBox="0 0 400 400" fill="none" aria-hidden="true">
                {/* Main blob shape */}
                <path
                    d="M320,120 Q340,200 260,260 Q180,320 100,260 Q20,200 80,120 Q140,40 220,60 Q300,80 320,120 Z"
                    fill="url(#heroGradient)"
                    style={{ animation: "heroBlobFloat 7s ease-in-out infinite" }}
                />
                {/* Animated circle */}
                <circle
                    cx="320"
                    cy="80"
                    r="32"
                    fill="url(#heroCircleGrad)"
                    style={{ animation: "heroCirclePulse 4s ease-in-out infinite" }}
                    opacity="0.7"
                />
                {/* Small moving dot */}
                <circle
                    cx="70"
                    cy="70"
                    r="10"
                    fill="var(--green, #06D6A0)"
                    style={{ animation: "heroDotMove 5s ease-in-out infinite" }}
                    opacity="0.7"
                />
                {/* Accent triangle */}
                <polygon
                    points="350,200 370,230 330,230"
                    fill="var(--light-blue, #00b4d8)"
                    opacity="0.25"
                />
                <defs>
                    <linearGradient id="heroGradient" x1="80" y1="40" x2="320" y2="320" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00b4d8" />
                        <stop offset="1" stopColor="#06D6A0" />
                    </linearGradient>
                    <radialGradient id="heroCircleGrad" cx="0.5" cy="0.5" r="0.5" fx="0.6" fy="0.4">
                        <stop offset="0%" stopColor="#06D6A0" />
                        <stop offset="100%" stopColor="#00b4d8" />
                    </radialGradient>
                </defs>
            </svg>
        </section>
    );
}