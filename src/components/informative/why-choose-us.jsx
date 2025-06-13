import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeader from "../global/section-header";
import './why-choose-us.css';

export default function WhyChooseUs() {

    const key_highlights = [
        {
            icon: ['fas', 'laptop-code'],
            tagline: 'Custom Website & Web App Development',
            description: 'Professional web development tailored to your business goals using modern frameworks. Get scalable, fast, and secure custom websites that convert.'
        },
        {
            icon: ['fas', 'palette'],
            tagline: 'UI/UX Design for Web & Mobile',
            description: 'User-first interface and experience design that enhances usability and engagement. Designed to reflect your brand and optimized for conversions.'
        },
        {
            icon: ['fas', 'mobile-alt'],
            tagline: 'Mobile-Friendly & Responsive Design',
            description: 'Responsive website development that adapts perfectly to all screen sizes—mobile, tablet, and desktop—for a consistent user experience across devices.'
        },
        {
            icon: ['fas', 'tools'],
            tagline: 'Website Maintenance & Technical Support',
            description: 'Stay worry-free with ongoing website maintenance, updates, and support. Keep your site secure, fast, and error-free with expert care.'
        },
        {
            icon: ['fas', 'magnifying-glass'],
            tagline: 'SEO Optimization & Performance',
            description: 'Improve search engine rankings and drive organic traffic with on-page SEO, fast load times, and clean code. Built with SEO best practices from the ground up.'
        },
        {
            icon: ['fas', 'lock'],
            tagline: 'Web Security & Privacy Protection',
            description: 'Secure-by-default websites built with React and zero external dependencies. Your data stays protected with our privacy-first approach to web development.'
        }

    ]

    return (
        <section className="why-choose-us-container" id="services">
            <SectionHeader
                super='Key Highlights'
                headline='Why Choose KyKustoms?'
            />
            <div className="why-choose-us-cards">
                {key_highlights.map((item, idx) => (
                    <div key={idx} className="why-choose-us-card">
                        <FontAwesomeIcon icon={item.icon} className="choose-us-icon"/>
                        <h4>{item.tagline}</h4>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}