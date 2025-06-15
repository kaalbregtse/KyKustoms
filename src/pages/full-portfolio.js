import Babblebot from '../images/babblebot-screenshot.png';
import LIPAHero from '../images/lipa-ss/LIPA-hero-ss.png';
import PersonalPortfolio from '../images/portfolio-ss/personal-portfolio-ss.png';
import CustomHero from '../components/banners/custom-hero.jsx';

import '../styles/page-styles/full-portfolio.css';
import ProjectsLayout from '../components/portfolio/projects-layout.jsx';


export default function FullPortfolio() {

    const projects = [
        {
            image: Babblebot,
            title: 'BabbleBot - Education Platform',
            tags: ['Full Stack', 'Education', 'Website'],
            slug: 'education-platform'
        },
        {
            image: LIPAHero,
            title: 'Lafayette Indiana Pickleball Association',
            tags: ['Redesign', 'Club', 'Sports'],
            slug: 'lafayette-indiana-pickleball-association-redesign'
        },
        {
            image: PersonalPortfolio,
            title: 'Personal Portfolio',
            tags: ['Personal', 'Portfolio', 'Website'],
            slug: 'kyczar-personal-portfolio'
        }
    ];

    return(
        <section className="full-portfolio-page">
            <CustomHero 
                headline = 'Bringing Ideas to Life'
                highlight = 'Through Design'
                subtext = 'Take a look at our work that blends strategy, aesthetics, and functionality—built to inspire, engage, and perform.'
            />
            <div className='gradient-background'>
                <ProjectsLayout projects={projects}/>
            </div>
        </section>
    )
}