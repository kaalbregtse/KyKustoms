import './testomonials.css';

const testimonials = [
    {
        name: "Connor H.",
        company: "Rising Tide Learning LLC",
        text: "Kyczar delivered a platform that exceeded our expectations. The process was smooth, and the results speak for themselves!",
    },
];

export default function Testimonials() {
    return (
        <section className="testimonials-section" id="testimonials">
            {/* Top SVG wave */}
            <svg className="testimonials-wave" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,100 C480,0 960,100 1440,0 L1440,0 L0,0 Z" fill="var(--charcoal)" />
            </svg>
            <div className="testimonials-bg" aria-hidden="true"></div>
            <div className="testimonials-container">
                <h2 className="testimonials-title">What Clients Say</h2>
                <div className="testimonials-list">
                    {testimonials.map((t, idx) => (
                        <div className="testimonial-card" key={idx}>
                            <div className="testimonial-quote">“{t.text}”</div>
                            <div className="testimonial-author">
                                <span className="testimonial-name">{t.name}</span>
                                <span className="testimonial-company">{t.company}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Bottom SVG wave, not wrapped, sits at the very bottom */}
            <svg className="testimonials-wave-bottom" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" fill="var(--charcoal)" />
            </svg>
        </section>
    );
}