import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import './steps-dropdown.css';

// Steps data (copied from process.jsx)
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

export default function StepsDropdown() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleDropdown = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div className="steps-dropdown modern-dropdown">
            {steps.map((step, idx) => (
                <div className={`dropdown-step modern-step${openIndex === idx ? " open" : ""}`} key={idx}>
                    <button
                        className="dropdown-toggle modern-toggle"
                        onClick={() => toggleDropdown(idx)}
                        aria-expanded={openIndex === idx}
                        aria-controls={`dropdown-panel-${idx}`}
                    >
                        <span className="dropdown-icon modern-icon">
                            <FontAwesomeIcon icon={step.icon} />
                        </span>
                        <span className="dropdown-title modern-title">{step.title}</span>
                        <span className="dropdown-plusminus modern-plusminus">
                            <FontAwesomeIcon icon={openIndex === idx ? faMinus : faPlus} />
                        </span>
                    </button>
                    {openIndex === idx && (
                        <div className="dropdown-panel modern-panel" id={`dropdown-panel-${idx}`}>
                            <p>{step.desc}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}