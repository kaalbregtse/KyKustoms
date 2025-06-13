import SectionHeader from '../global/section-header';
import './process.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const steps = [
    {
        icon: ['fas', 'magnifying-glass'],
        title: 'Discovery',
        desc: 'We learn about your goals, audience, and requirements to set a strong foundation for your project.'
    },
    {
        icon: ['fas', 'palette'],
        title: 'Design',
        desc: 'We craft intuitive, engaging interfaces and user experiences tailored to your brand and users.'
    },
    {
        icon: ['fas', 'laptop-code'],
        title: 'Development',
        desc: 'We build robust, scalable solutions using modern technologies like React and industry best practices.'
    },
    {
        icon: ['fas', 'rocket'],
        title: 'Launch',
        desc: 'We deploy your project, ensure everything runs smoothly, and celebrate your new digital presence.'
    },
    {
        icon: ['fas', 'tools'],
        title: 'Support',
        desc: 'We provide ongoing support, updates, and improvements to keep your project thriving and customers coming.'
    }
];

export default function Process() {
    return (
        <section className="process-section" id='process'>
            <SectionHeader super='Our Process' headline='Design. Build. Launch.'/>
            <div className="process-container">
                <div className="process-steps">
                    {steps.map((step, idx) => (
                        <div className="process-step" key={idx}>
                            <span className="process-icon">
                                <FontAwesomeIcon icon={step.icon} />
                            </span>
                            <h3 className="process-step-title">{step.title}</h3>
                            <p className="process-step-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}