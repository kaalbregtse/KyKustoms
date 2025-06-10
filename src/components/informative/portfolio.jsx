import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './portfolio.css';
import Babblebot from '../../images/babblebot-screenshot.png';
import Gym from '../../images/gym-site-screenshot.png';

const projects = [
    {
        image: Babblebot,
        title: 'BabbleBot - Education Platform',
        slug: 'education-platform'
    },
    {
        image: Gym,
        title: 'Gym Site Design',
        slug: 'gym-site-design'
    },
];

export default function Portfolio() {
    return (
        <section className="portfolio-section" id="portfolio">
            <div className="portfolio-header">
                <h2>Portfolio</h2>
                <p className="portfolio-subtext">
                    Explore a selection of our recent projects, each crafted with attention to detail and a focus on results.
                </p>
            </div>
            <div className="portfolio-grid">
                {projects.map((project, idx) => (
                    <a
                        key={idx}
                        href={`/portfolio/${project.slug}`}
                        className="portfolio-grid-item"
                        aria-label={`View details for ${project.title}`}
                    >
                        <img src={project.image} alt={project.title} />
                        <div className="portfolio-grid-overlay">
                            <span className="portfolio-grid-title">{project.title}</span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="portfolio-grid-icon" />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}