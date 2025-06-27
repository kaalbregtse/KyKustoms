import SectionHeader from '../global/section-header';
import './process.css';
import StepsDropdown from './steps-dropdown';

export default function Process() {
    return (
        <section className="process-section" id='process'>
            <SectionHeader super='Our Process' headline='Design. Build. Launch.'/>
            <div className='process-container'>
                <div className='process-info'>
                    <p>
                        Our process is designed to ensure your project is a success from start to finish. We follow a structured approach that does not move forward until each step is completed to your satisfaction. 
                    </p>
                    <p style={{marginBottom: '2rem'}}>
                        This ensures that we fully understand your needs and deliver a product that exceeds your expectations.
                    </p>
                    <a href='/#quote' className='get-quote-button'>Get Started with a Quote</a>
                </div>
                <StepsDropdown />
            </div>
        </section>
    );
}