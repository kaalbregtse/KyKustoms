import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// Babblebot Images
import Babblebot from "../images/babblebot-screenshot.png";
import StudentDash from '../images/student-dash-screenshot.png';
import TeacherDash from '../images/teacher-dash-screenshot.png';
// LIPA Images
import LIPAHero from '../images/lipa-ss/LIPA-hero-ss.png';
import LIPADiscover from '../images/lipa-ss/lipa-discover-ss.png';
import LIPAFooter from '../images/lipa-ss/lipa-footer-ss.png';
// Winding Roads Images
import WindingRoadsHero from '../images/winding-roads/WR_hero-ss.png';
import WindingRoadsCTA from '../images/winding-roads/WR_cta-ss.png';
import WindingRoadsServices from '../images/winding-roads/WR_services-ss.png';
import "../styles/page-styles/portfolio-project.css";
// Autumn Rose Designs
import ARDHero from '../images/autumn-rose-designs/ARD-hero.png';
import ARDAbout from '../images/autumn-rose-designs/ARD-about.png';
import ARDOccasions from '../images/autumn-rose-designs/ARD-occasions.png';
// Brew & Bloom
import BBHero from '../images/brew-and-bloom/B&B_hero.png';
import BBMenu from '../images/brew-and-bloom/B&B_menu.png';
import BBVisit from '../images/brew-and-bloom/B&B_visit.png';
// Dusk
import DuskHero from '../images/dusk/Dusk_hero.png';
import DuskProduct from '../images/dusk/Dusk_product.png';
import DuskReview from '../images/dusk/Dusk-reviews.png';

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
        image: LIPAHero,
        image2: LIPADiscover,
        image3: LIPAFooter,
        title: "Lafayette Indiana Pickleball Association",
        subtitle: "Landing Page Redesign",
        slug: "lafayette-indiana-pickleball-association-redesign",
        description: "This project is a redesign of the Lafayette Indiana Pickleball Association's landing page. The goal was to create a modern, responsive design that enhances user experience and provides easy access to information about the association's activities, events, and membership options. The design was crafted in Figma, focusing on usability and accessibility.",
        background: "The Lafayette Indiana Pickleball Association (LIPA) needed a fresh, modern look for their landing page to better engage with the community and promote their activities. The goal was to create a user-friendly interface that would attract new members and provide essential information about the association.",
        challenge: "The main challenge was to create a visually appealing and functional landing page that could effectively communicate the association's offerings. Additionally, ensuring the site was responsive and accessible across various devices was crucial. We overcame these challenges by using modern web technologies and following best practices in UI/UX design.",
        solution: "The solution involved designing a responsive web application using Figma. The design features a clean, modern layout with sections for events, membership information, and community engagement. The site is optimized for both desktop and mobile devices, ensuring a seamless user experience. The design also incorporates accessibility features to cater to all users.",
        result: "The project was successfully completed, meeting all requirements and delivering a high-quality user experience. This is a personal practice project and was not commissioned by the Lafayette Indiana Pickleball Association. It serves as a showcase of my design and development skills, demonstrating my ability to create modern, responsive web applications that enhance user experience.",
        tech: ["Figma"],
        link: "https://www.figma.com/proto/eVDgh46zZj5afMlNvjmPQQ/LIPA-Redesign?t=5a2M00CPukVPmFQb-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=1-7&starting-point-node-id=1%3A7"
    },
    {
        image: WindingRoadsHero,
        image2: WindingRoadsCTA,
        image3: WindingRoadsServices,
        title: 'Winding Roads Counseling - Redesign',
        subtitle: 'Counseling Business Site Redesign',
        slug: 'winding-roads-counseling-redesign',
        description: 'Winding Roads Counseling is an all encompassing counseling business. Their services range from individual therapy to couples counseling and more.',
        background: 'This project was one of many in my series of local company site redesigns. I find companies in my area that have sites that may be in need of a revamp. I use their existing brand colors, images and identity, and incorporate them in my redesign.',
        challenge: 'The main challenge of this project, becasue it is a counseling service, was trying to create a site that brought out feelings of comfort and care.',
        solution: 'Using bright colors and joyful images, this redesign brings a better user-experience as well as a more comforting feel when entering the site. ',
        results: 'The result is a more inviting and comforting redesign of Winding Roads Counseling. This project was not funded or commmissioned by the Winding Roads Entity. This was a personal project to demonstrate my design talents and hone them.',
        tech: ['Figma'],
        link: ''
    },
    {
        image: ARDHero,
        image2: ARDAbout,
        image3: ARDOccasions,
        title: 'Autumn Rose Designs - Redesign',
        subtitle: 'Custom Jewelry Vendor Site Design',
        slug: 'autumn-rose-designs-proposal',
        description: 'This was a personal practice project focused on redesigning the website for Autumn Rose Designs—a fictional representation of a small, family-owned jewelry business based in Lafayette, Indiana. The goal was to sharpen design skills, practice content structuring, and explore SEO-focused storytelling in a real-world context.',
        background: 'Autumn Rose Designs was conceptualized as a mom-and-pop jewelry store with nearly a decade of experience creating handcrafted pieces sold at local malls and farmers markets. The existing site (imagined for this exercise) was outdated, lacked clear messaging, and didn’t reflect the warmth or personality of the brand. This made it the perfect subject for a practice redesign centered on clarity, storytelling, and user experience.',
        challenge: 'The main challenge in this project was to treat the redesign as if it were for a real client while working within the boundaries of personal practice. This included thinking critically about how to modernize a homepage, write compelling copy, and structure the site in a way that would serve both new visitors and returning customers. Additional challenges included creating SEO-optimized content that still felt warm and authentic, and designing for both desktop and mobile experiences with no real customer feedback to guide decisions.',
        solution: 'To solve these challenges, I created a clean, modern homepage layout that emphasized visual hierarchy and user flow. I wrote original, SEO-friendly copy for sections such as About Us, Where to Find Us, and themed product categories like Birthdays, Anniversaries, and Just Because. The language was crafted to reflect the voice of a warm, family-owned brand while incorporating keywords relevant to small business jewelry shops. I also integrated clear call-to-action ideas throughout the page and focused on organizing the content in a way that would guide visitors naturally toward discovering products, learning about the business, or getting in touch.',
        results: 'Although this was a practice project, the result was a polished, portfolio-ready homepage concept that demonstrated my ability to combine content strategy, copywriting, and design thinking. I gained hands-on experience in shaping the tone and structure of a small business site, practiced writing with both conversion and SEO in mind, and strengthened my confidence in approaching similar real-world freelance projects. The process helped me think like both a designer and a business owner, making it a valuable exercise in creative problem-solving and user-centered design.',
        tech: ['Figma'],
        link: 'https://www.figma.com/proto/INvxQvCAqFQjsIWUFicezg/Autumn-Rose-Designs?node-id=1-2&t=cAeczrcfB9iR2irH-1'
    },
    {
        image: BBHero,
        image2: BBMenu,
        image3: BBVisit,
        title: 'Brew & Bloom - Case Study',
        subtitle: 'Coffee Shop & Florist Site Design',
        slug: 'brew-and-bloom-case-study',
        description: 'Brew & Bloom is a fictional coffee shop and florist business based in Lafayette, Indiana. This project involved creating a case study that showcases the design process, from initial research to final implementation, focusing on user experience and visual design.',
        background: 'Brew & Bloom was conceptualized as a local coffee shop and florist that wanted to enhance its online presence. The goal was to create a website that not only showcased their products but also provided an engaging user experience for both coffee lovers and plant enthusiasts.',
        challenge: 'The main challenge was to design a site that effectively combined two distinct business areas—coffee and plants—while ensuring a cohesive brand identity. Additionally, the site needed to be user-friendly, visually appealing, and optimized for both desktop and mobile devices.',
        solution: 'The solution involved conducting user research to understand the target audience and their needs. Based on the findings, I designed a clean, modern layout that highlighted the unique offerings of Brew & Bloom. The site features sections for coffee products, unique plant-life, and an interactive map to increase foot traffic in the store. The design incorporates vibrant colors and high-quality images to create an inviting atmosphere.',
        result: 'The project resulted in a comprehensive case study that demonstrates my design process, problem-solving skills, and ability to create a user-centered website. The Brew & Bloom site serves as a portfolio piece that showcases my capabilities in web design and development, with a focus on enhancing user experience and brand identity.',
        tech: ['Figma', 'HTML', 'CSS'],
        link: 'https://www.figma.com/proto/Vy5dtdTfeTy69tjJKdLflw/Brew---Bloom?node-id=0-1&t=yAAGsoS0F02lvXxB-1'
    },
    {
        image: DuskHero,
        image2: DuskProduct,
        image3: DuskReview,
        title: 'Dusk - Case Study',
        subtitle: 'E-commerce Site Design',
        slug: 'dusk-case-study',
        description: 'Dusk is a fictional e-commerce site that specializes in selling high-quality scents and fragrences. This project involved creating a case study that showcases the design process, from initial research to final implementation, focusing on user experience and visual design.',
        background: 'Dusk was conceptualized as a premium e-commerce brand that wanted to create an online presence that reflected its high-quality products. The goal was to design a website that not only showcased the products but also provided an engaging user experience for customers.',
        challenge: 'The main challenge was to design a site that effectively communicated the brand’s luxury image while ensuring a seamless shopping experience. Additionally, the site needed to be user-friendly, visually appealing, and optimized for both desktop and mobile devices.',
        solution: 'The solution involved conducting user research to understand the target audience and their needs. Based on the findings, I designed a clean, modern layout that highlighted the unique offerings of Dusk. The site features sections for product categories, customer reviews, and an easy-to-navigate shopping experience. The design incorporates elegant colors and high-quality images to create a sophisticated atmosphere.',
        result: 'The project resulted in a comprehensive case study that demonstrates my design process, problem-solving skills, and ability to create a user-centered e-commerce website. The Dusk site serves as a portfolio piece that showcases my capabilities in web design and development, with a focus on enhancing user experience and brand identity.',
        tech: ['Figma', 'HTML', 'CSS'],
        link: 'https://www.figma.com/proto/6qZq3Cz6joJP6hyAaH2TVP/Dusk?node-id=0-1&t=P7pBIyjFm9qq86tQ-1'
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
                <Link to="/portfolio" className="back-link">
                    <FontAwesomeIcon icon={faArrowLeft} /> Back to Portfolio
                </Link>
            </div>
        );
    }

    return (
        <>
            <section className="portfolio-project-banner">
                <div className="portfolio-project-banner-content">
                    <Link to="/portfolio" className="back-link">
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