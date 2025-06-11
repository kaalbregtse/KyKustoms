import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './portfolio.css';
import Babblebot from '../../images/babblebot-screenshot.png';
import LIPAHero from '../../images/lipa-ss/LIPA-hero-ss.png';


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
];

export default function Portfolio() {
    return (
        <section className="portfolio-section" id="portfolio">
            <div className="portfolio-header">
                <h2>Discover Our Latest Work</h2>
                <p className="portfolio-subtext">
                    Browse a curated showcase of recent projects—each one designed with precision, purpose, and measurable impact.
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