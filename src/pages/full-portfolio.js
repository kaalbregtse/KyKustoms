import Babblebot from '../images/babblebot-screenshot.png';
import WindingRoads from '../images/winding-roads/WR_hero-ss.png';
import LIPAHero from '../images/lipa-ss/LIPA-hero-ss.png';
import ARDHero from '../images/autumn-rose-designs/ARD-hero.png';
import BBHero from '../images/brew-and-bloom/B&B_hero.png';
import DuskHero from '../images/dusk/Dusk_hero.png';
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
            image: ARDHero,
            title: 'Autumn Rose Designs: Redesign',
            tags: ['Business', 'Redesign', 'Jewelry'],
            slug: 'autumn-rose-designs-proposal'
        },
        {
            image: BBHero,
            title: 'Brew & Bloom: Case Study',
            tags: ['Case Study', 'Business', 'Website'],
            slug: 'brew-and-bloom-case-study'
        },
        {
            image: DuskHero,
            title: 'Dusk: Case Study',
            tags: ['Case Study', 'Business', 'Website'],
            slug: 'dusk-case-study'
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