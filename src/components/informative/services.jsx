import { useState, useEffect } from 'react';
import './services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const services = [
    {
        icon: ['fas', 'laptop-code'],
        title: 'Custom Web Development',
        desc: 'Tailored websites and web apps built to your business needs using modern technologies.'
    },
    {
        icon: ['fas', 'palette'],
        title: 'UX & UI Design',
        desc: 'Intuitive, user-centered interfaces that delight and engage your audience.'
    },
    {
        icon: ['fas', 'mobile-alt'],
        title: 'Mobile Responsiveness',
        desc: 'Seamless experiences across all devices, ensuring your site looks great everywhere.'
    },
    {
        icon: ['fas', 'tools'],
        title: 'Maintenance and Support',
        desc: 'Ongoing updates, monitoring, and support to keep your site secure and running smoothly.'
    },
    {
        icon: ['fas', 'magnifying-glass'],
        title: 'SEO Optimization',
        desc: 'Boost your visibility with our SEO strategies that help you rank higher in search results.'
    },
];

export default function Services() {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        // Enable scrolling animation on tablet and up (min-width: 640px)
        const checkWidth = () => setIsScrolling(window.innerWidth >= 640);
        checkWidth();
        window.addEventListener('resize', checkWidth);
        return () => window.removeEventListener('resize', checkWidth);
    }, []);

    // Duplicate the cards for seamless infinite scroll
    const scrollingCards = isScrolling ? [...services, ...services] : services;
    return (
        <section className="services-section" id='services'>
            <div className="services-container">
                <h2 className="services-title">Our Services</h2>
                <div className="services-list">
                    <div className="services-list__scroll">
                        {scrollingCards.map((service, idx) => (
                            <div className="service-card" key={idx}>
                                <span className="service-icon">
                                    <FontAwesomeIcon icon={service.icon} />
                                </span>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}