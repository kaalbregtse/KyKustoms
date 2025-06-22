import Babblebot from '../images/babblebot-screenshot.png';
import WindingRoads from '../images/winding-roads/WR_hero-ss.png';
import LIPAHero from '../images/lipa-ss/LIPA-hero-ss.png';
import PersonalPortfolio from '../images/portfolio-ss/personal-portfolio-ss.png';
import ARDHero from '../images/autumn-rose-designs/ARD-hero.png';
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
            image: WindingRoads,
            title: 'Winding Roads Counseling: Redesign',
            tags: ['Redesign', 'Health', 'Business'],
            slug: 'winding-roads-counseling-redesign'
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
        },
        {
            image: ARDHero,
            title: 'Autumn Rose Designs: Redesign',
            tags: ['Mom&Pop', 'Redesign', 'Jewelry'],
            slug: 'autumn-rose-designs-proposal'
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