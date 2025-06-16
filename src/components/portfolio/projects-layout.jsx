import SectionHeader from '../global/section-header';
import './projects-layout.css';

export default function ProjectsLayout({projects}) {
    return (
        <>
            <SectionHeader
                super='All Projects'
                headline='Explore Our Latest Projects'
                padding = '2rem 0 1rem 0'
            />
            <div className="projects-layout-container">
                {projects.map((item, idx) => (
                    <a href={`portfolio/${item.slug}`} key={idx}>
                        <div className="individual-project">
                            <img src={item.image} alt={item.title}/>
                            <div className="project-details">
                                <h4>{item.title}</h4>
                                <div className="project-tags">
                                    {item.tags.map((tag, idx) => (
                                        <p key={idx}>{tag || ''}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </>
    )
}