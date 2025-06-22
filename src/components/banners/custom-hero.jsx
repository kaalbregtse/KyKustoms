import './hero-section.css';
import HeroBkg from '../../images/hero-banner-bkg.png';

export default function CustomHero(props) {
    return (
        <section className="hero-section" style={{ backgroundImage: `url(${HeroBkg})`, backgroundSize: 'cover' }}>
            <div>
                <h1>
                    { props.headline }
                    <span className="hero-highlight"> {props.highlight}</span>
                </h1>
                <p>{props.subtext}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" className='hero-bottom-svg'>
                <path
                    fill="var(--obsidian)"
                    fillOpacity="1"
                    d="M0,160L80,130C160,100,320,60,480,59C640,59,800,100,960,130C1120,160,1280,160,1360,160L1440,160L1440,200L1360,200C1280,200,1120,200,960,200C800,200,640,200,480,200C320,200,160,200,80,200L0,200Z"
                />
            </svg>
        </section>
    );
}