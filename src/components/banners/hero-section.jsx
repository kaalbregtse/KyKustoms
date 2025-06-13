import './hero-section.css';
import HeroBkg from '../../images/hero-banner-bkg.png';

export default function HeroSection() {
    return (
        <section className="hero-section" style={{ backgroundImage: `url(${HeroBkg})`, backgroundSize: 'cover' }}>
            <div>
                <div className='hero-tags'>
                    <p>Web Designer.</p>
                    <p>Creative Mind.</p>
                    <p>Solution Seeker.</p>
                </div>
                <h1>
                    Custom Web Design & Development
                    <span className="hero-highlight"> That Grows Your Business</span>
                </h1>
                <p>Freelance web developer from Lafayette, Indiana.</p>
                <a href="/contact">
                    Schedule a Call
                </a>
            </div>
        </section>
    );
}