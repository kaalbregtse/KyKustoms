import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './portfolio-carousel.css';
import Babblebot from '../../images/babblebot-screenshot.png';
import LIPAHero from '../../images/lipa-ss/LIPA-hero-ss.png';
import WindingRoadsHero from '../../images/winding-roads/WR_hero-ss.png';
import ARDHero from '../../images/autumn-rose-designs/ARD-hero.png'
import BBHero from '../../images/brew-and-bloom/B&B_hero.png';
import DuskHero from '../../images/dusk/Dusk_hero.png';

const projects = [
    {
        image: Babblebot,
        title: 'BabbleBot - Education Platform',
        slug: 'education-platform'
    },
    {
        image: LIPAHero,
        title: 'Lafayette Indiana Pickleball Association - Redesign',
        slug: 'lafayette-indiana-pickleball-association-redesign'
    },
    {
        image: WindingRoadsHero,
        title: 'Winding Roads Counseling - Redesign',
        slug: 'winding-roads-counseling-redesign'
    },
    {
        image: ARDHero,
        title: 'Autumn Rose Designs - Redesign',
        slug: 'autumn-rose-designs-proposal'
    },
    {
        image: BBHero,
        title: 'Brew & Bloom - Case Study',
        slug: 'brew-and-bloom-case-study'
    },
    {
        image: DuskHero,
        title: 'Dusk - Case Study',
        slug: 'dusk-case-study'
    }
];

export default function PortfolioCarousel() {
     const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            <section className='portfolio-carousel'>
                <div className='carousel-container'>
                    <button className="carousel-arrow left" onClick={prevSlide} aria-label="Previous project">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <div className="carousel-slide">
                        <a
                            href={`/portfolio/${projects[current].slug}`}
                            className="carousel-image-link"
                            aria-label={`View details for ${projects[current].title}`}
                        >
                            <img src={projects[current].image} alt={projects[current].title} className="carousel-image" />
                        </a>
                    </div>
                    <button className="carousel-arrow right" onClick={nextSlide} aria-label="Next project">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                    <div className="carousel-dots">
                        {projects.map((_, idx) => (
                            <button
                                key={idx}
                                className={`carousel-dot${current === idx ? ' active' : ''}`}
                                onClick={() => setCurrent(idx)}
                                aria-label={`Go to project ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
                <p className='project-titles'>{projects[current].title}</p>
            </section>
        </>
    );
   
}