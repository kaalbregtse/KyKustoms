import logo from '../../images/kykustoms-logo-icon.png';
import './nav-footer.css';

export default function Nav() {
    return (
        <nav>
            <div>
                <a href='/'><img src={logo} alt="Kycars Logo" className="nav-logo-img" /></a>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#services">Services</a></li>
                    <li><a href="/#portfolio">Past Work</a></li>
                    <li><a href="/#process">Our Process</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                </ul>
                <div>
                    <a href='/contact'>Contact</a>
                </div>
            </div>
        </nav>
    );
}