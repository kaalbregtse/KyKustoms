import './portfolio.css';
import Babblebot from '../../images/babblebot-screenshot.png';
import Gym from '../../images/gym-site-screenshot.png'

const projects = [
    {
        image: Babblebot,
        title: 'Education Platform',
        customer: 'Rising Tide Learning LLC',
        ask: 'Create a custom educational platform for interactive learning through generative AI to increase data driven decision making.',
        Timeline: '1 year',
        tags: ['React', 'Node.js', 'Firebase', 'OpenAI', 'ChartJS', 'Google Analytics'],
    },
    {
        image: Gym,
        title: 'Gym Site Design',
        customer: 'Personal Design',
        ask: 'Create a gym landing page with a bold design. Site should grab user attention but keep a simple and easy to navigate layout.',
        Timeline: '1 Week',
        tags: ['Figma', 'HTML', 'CSS', 'Responsive Design'],
    },
];

export default function Portfolio() {
    return (
        <section className="portfolio-section" id='portfolio'>
            {/* SVG Wave at the top */}
            <svg className="portfolio-wave" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,100 C480,0 960,100 1440,0 L1440,0 L0,0 Z" fill="var(--pure-white)" />
            </svg>
            <div className="portfolio-bg-accent" aria-hidden="true"></div>
            <div className="portfolio-container">
                <h2 className="portfolio-title">Past Work</h2>
                <div className="portfolio-list-alt">
                    {projects.map((project, idx) => (
                        <div
                            className={`portfolio-row${idx % 2 === 1 ? ' reverse' : ''}`}
                            key={idx}
                        >
                            <div className="portfolio-image-side">
                                <img src={project.image} alt={project.title} className="portfolio-image-alt" />
                            </div>
                            <div className="portfolio-info-side">
                                <h3 className="portfolio-project-title">{project.title}</h3>
                                <div className="portfolio-meta">
                                    <div><strong>Customer:</strong> {project.customer}</div>
                                    <div><strong>Ask:</strong> {project.ask}</div>
                                    <div><strong>Timeline:</strong> {project.Timeline}</div>
                                </div>
                                <div className="portfolio-tags">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span className="portfolio-tag" key={tagIdx}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <svg className="portfolio-wave-bottom" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" fill="var(--pure-white)" />
            </svg>
        </section>
    );
}