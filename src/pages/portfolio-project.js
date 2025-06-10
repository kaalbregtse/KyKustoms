import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Babblebot from "../images/babblebot-screenshot.png";
import StudentDash from '../images/student-dash-screenshot.png';
import TeacherDash from '../images/teacher-dash-screenshot.png';
import Gym from "../images/gym-site-screenshot.png";
import "../styles/page-styles/portfolio-project.css";

// Example project data (should match your slugs)
const projects = [
    {
        image: Babblebot,
        image2: StudentDash,
        image3: TeacherDash,
        title: "BabbleBot",
        subtitle: "Interactive Education Platform",
        slug: "education-platform",
        description: "BabbleBot is an online education platform used to learn and teach phonemes and basic sounds to early readers. It features AI-powered stories, practice lessons, and progress tracking to enhance the learning experience. It is designed to be engaging and interactive, making learning fun for children.",
        background: "BabbleBot started as a university project and has evolved into a full-fledged platform. The goal was to create an educational tool that combines technology with early childhood education, making learning accessible and enjoyable.",
        challenge: "The main challenge was to create an intuitive user interface that appeals to both children and educators. Additionally, integrating AI for personalized learning experiences required careful planning and execution. We also had to ensure the platform was scalable and secure, given the sensitive nature of working with children. We overcame these challenges by using modern web technologies and following best practices in UI/UX design.",
        solution: "The solution involved developing a responsive web application using React for the frontend and Node.js for the backend. We utilized the OpenAI API to generate interactive stories and quizzes, making learning dynamic and engaging. Firebase was used for real-time data storage and user authentication, ensuring a secure environment for users. The design was crafted in Figma, focusing on usability and accessibility.",
        result: "The project was successfully completed, meeting all requirements and delivering a high-quality user experience. It has received positive feedback from users and stakeholders, demonstrating its effectiveness in solving the identified problem. The platform is now live and being used by educators and students, with plans for future enhancements based on user feedback. The project has also been recognized for its innovative approach to early childhood education, and we are exploring opportunities for further development and expansion.",
        tech: ["React", "Node.js", "OpenAI API", "Firebase", "Figma", "Google Analytics"],
        link: "https://www.babblebot.xyz"
    },
    {
        image: Gym,
        title: "Gym Site Design",
        slug: "gym-site-design",
        description: "A modern, responsive website for a local gym, featuring class schedules, trainer bios, and online membership sign-up.",
        tech: ["React", "Sass", "Netlify"],
        link: "https://gym-site.example.com"
    }
];

export default function PortfolioProject() {
    // If using react-router-dom v6+
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return (
            <div className="portfolio-project-section">
                <h2>Project Not Found</h2>
                <Link to="/#portfolio" className="back-link">
                    <FontAwesomeIcon icon={faArrowLeft} /> Back to Portfolio
                </Link>
            </div>
        );
    }

    return (
        <>
            <section className="portfolio-project-banner">
                <div className="portfolio-project-banner-content">
                    <Link to="/#portfolio" className="back-link">
                        <FontAwesomeIcon icon={faArrowLeft} /> Back to Portfolio
                    </Link>
                    <h1>{project.title}</h1>
                    <h2 className="portfolio-project-subtitle">
                        {project.subtitle || "Project Subtitle Here"}
                    </h2>
                    <p className="portfolio-project-description">{project.description}</p>
                </div>
                <div className="portfolio-project-banner-tags">
                    <span>Technologies Used:</span>
                    <div className="portfolio-project-tags-list">
                        {project.tech.map((tag, i) => (
                            <span className="portfolio-project-tag" key={i}>{tag}</span>
                        ))}
                    </div>
                </div>
                {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio-project-banner-link">
                        See It Live <FontAwesomeIcon icon="arrow-up-right-from-square" />
                    </a>
                )}
            </section>

            {/* Background Section */}
            <section className="portfolio-project-background">
                <div className="portfolio-project-background-content">
                    <div>
                        <h2>Background</h2>
                        <p>
                            {project.background || "This project was developed to address a specific need or problem. It showcases the use of modern web technologies and design principles to create an engaging user experience."}
                        </p>
                    </div>
                    <div className="portfolio-project-background-image">
                        <div className="portfolio-project-ipad-frame">
                            <img src={project.image} alt={`${project.title} screenshot`} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="portfolio-project-background">
                <div className="portfolio-project-background-content">
                    <div>
                        <h2>Challenge</h2>
                        <p>
                            {project.challenge || "This project was developed to address a specific need or problem. It showcases the use of modern web technologies and design principles to create an engaging user experience."}
                        </p>
                    </div>
                    <div className="portfolio-project-background-image">
                        <div className="portfolio-project-ipad-frame">
                            <img src={project.image2 || project.image} alt={`${project.title} screenshot`} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="portfolio-project-background portfolio-project-background-alt">
                <div className="portfolio-project-background-content">
                    <div>
                        <h2>Solution</h2>
                        <p>
                            {project.solution || "This project was developed to address a specific need or problem. It showcases the use of modern web technologies and design principles to create an engaging user experience."}
                        </p>
                    </div>
                    <div className="portfolio-project-background-image">
                        <div className="portfolio-project-ipad-frame">
                            <img src={project.image3 || project.image} alt={`${project.title} screenshot`} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="portfolio-project-result">
                <div className="portfolio-project-result-content">
                    <div className="portfolio-project-result-left">
                        <h2>Result</h2>
                        <p>
                            {project.result || "The project was successfully completed, meeting all requirements and delivering a high-quality user experience. It has received positive feedback from users and stakeholders, demonstrating its effectiveness in solving the identified problem."}
                        </p>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio-project-result-link">
                                See It Live <FontAwesomeIcon icon="arrow-up-right-from-square" />
                            </a>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}