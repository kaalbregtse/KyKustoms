import logo from '../../images/kykustoms-logo-icon.png';
import './nav-footer.css';

export default function Nav() {

    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 10) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    return (
        <nav>
            <div>
                <div className='logo-container'>
                    <a href='/'><img src={logo} alt="Kycars Logo" className="nav-logo-img" /></a>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#services">Services</a></li>
                    <li><a href="/#portfolio">Past Work</a></li>
                    <li><a href="/#process">Our Process</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                </ul>
                <div className='nav-cta'>
                    <a href='https://calendly.com/kyczar-kykustoms/30min'>Schedule a Call</a>
                </div>
            </div>
        </nav>
    );
}