import Logo from '../../images/kykustoms-logo-icon.png';
import './nav-footer.css';

export default function Footer() {
    return (
        <>
        <footer>
            <div className='footer-logo'>
                <img src={Logo} alt='kykustoms logo' />
                <h1>KyKustoms</h1>
            </div>
            <div className='footer-links-container'>
                <div className='links-list'>
                    <p>Site Links</p>
                    <ul>
                       <li><a href='/'>Home</a></li>
                       <li><a href='/#services'>Our Services</a></li>
                       <li><a href='/#portfolio'>Portfolio Examples</a></li>
                       <li><a href='/portfolio'>Full Portfolio</a></li>
                       <li><a href='/#process'>Our Process</a></li>  
                    </ul>
                </div>
            
                <div className='links-list'>
                    <p>Policies</p>
                    <ul>
                       <li><a href='/policies'>Privacy Policy</a></li>
                       <li><a href='/policies'>Terms of Service</a></li>
                    </ul>
                </div>

                <div className='links-list'>
                    <p>Contact</p>
                    <ul>
                       <li><a href='mailto: kyczar@kykustoms.net'>kyczar@kykustoms.net</a></li>
                       <li><a href='tel: +17654300066'>+1 (765)430-0066</a></li>
                       <li><a href='https://calendly.com/kyczar-kykustoms/30min?month=2025-06' target='_blank' rel='noopener noreferrer'>Calendly Meeting</a></li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className='copyright'>© KyKustoms 2025 - All Rights Reserved</div>
        </>
    );
}