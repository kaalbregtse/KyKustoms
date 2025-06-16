import { useEffect, useRef, useState } from 'react';
import './fifty-fifty-portfolio.css';
import Babblebot from '../../images/babblebot-screenshot.png';
import LIPAHero from '../../images/lipa-ss/LIPA-hero-ss.png';
import PersonalPortfolio from '../../images/portfolio-ss/personal-portfolio-ss.png';
import WindingRoadsHero from '../../images/winding-roads/WR_hero-ss.png';
import SectionHeader from '../global/section-header';

const images = [Babblebot, LIPAHero, PersonalPortfolio, WindingRoadsHero];

export default function FiftyFiftyPortfolio() {
    const [current, setCurrent] = useState(0);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isDesktop) {
            timeoutRef.current = setTimeout(() => {
                setCurrent((prev) => (prev + 1) % images.length);
            }, 3000);
            return () => clearTimeout(timeoutRef.current);
        }
    }, [current, isDesktop]);

    return (
        <>
            <SectionHeader super='Portfolio' headline='View Examples of Our Work' />
            <section className="fifty-fifty-portfolio" id='portfolio'>
                <div className='text-and-btn'>
                    <div>
                        <p>
                            Our portfolio showcases <a href='/portfolio'>diverse web designs</a>, each aligned with the unique needs and goals of our clients.
                        </p>
                        <p>
                            Discover the power of strategic, custom web design through real projects that speak for themselves.
                        </p>
                    </div>
                    <a href='/portfolio' className='portfolio-btn'>Review our Portfolio</a>
                </div>
                <div className="laptop-svg-frame">
                    <svg viewBox="0 0 800 520" className="laptop-svg" width="100%" height="100%" style={{ display: 'block' }}>
                        {/* Laptop body */}
                        <rect x="40" y="40" width="720" height="400" rx="28" fill="#222" stroke="#444" strokeWidth="4" />
                        {/* Laptop screen area */}
                        <foreignObject x="60" y="60" width="680" height="360">
                            <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                                {isDesktop ? (
                                    <div
                                        className="carousel-track"
                                        style={{
                                            display: 'flex',
                                            transition: 'transform 0.7s cubic-bezier(.4,0,.2,1)',
                                            transform: `translateX(-${current * 680}px)`,
                                            height: '360px',
                                        }}
                                    >
                                        {images.map((img, idx) => (
                                            <div className="carousel-slide" key={idx} style={{ minWidth: '680px', height: '360px' }}>
                                                <img
                                                    src={img}
                                                    alt={`Portfolio ${idx + 1}`}
                                                    className="laptop-img"
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        borderRadius: '14px',
                                                        background: '#111',
                                                        display: 'block',
                                                    }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <img
                                        src={Babblebot}
                                        alt="Babblebot"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'top',
                                            borderRadius: '14px',
                                            background: '#111',
                                            display: 'block',
                                        }}
                                    />
                                )}
                            </div>
                        </foreignObject>
                        {/* Laptop base */}
                        <rect x="0" y="460" width="800" height="40" rx="12" fill="#333" />
                        {/* Touchpad */}
                        <rect x="370" y="480" width="60" height="12" rx="6" fill="#444" />
                    </svg>
                </div>
            </section>
        </>
    );
}