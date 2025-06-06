import { useState } from "react";
import "./contact-form.css";

const SERVICE_OPTIONS = [
    "Custom Web Development",
    "UX/UI Design",
    "Mobile Responsiveness",
    "Maintenance and Support",
    "SEO Optimization"
];

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        services: []
    });
    const [status, setStatus] = useState({ loading: false, success: null, error: null });

    // Replace this with your actual endpoint or email service (e.g., EmailJS, Formspree, custom API)
    const FORM_ENDPOINT = "https://formspree.io/f/mgvyvell";

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === "services") {
            setForm((prev) => {
                let updated = [...prev.services];
                if (checked) {
                    updated.push(value);
                } else {
                    updated = updated.filter((s) => s !== value);
                }
                return { ...prev, services: updated };
            });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: null, error: null });

        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus({ loading: false, success: "Message sent! I'll get back to you soon.", error: null });
                setForm({ name: "", email: "", message: "", services: [] });
            } else {
                throw new Error("Failed to send message.");
            }
        } catch (err) {
            setStatus({ loading: false, success: null, error: "Something went wrong. Please try again later." });
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-bg-svg" aria-hidden="true">
                <svg viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Animated blob */}
                    <g>
                        <ellipse
                            cx="1200"
                            cy="200"
                            rx="220"
                            ry="120"
                            fill="url(#contactBlobGrad)"
                        >
                            <animate attributeName="rx" values="220;200;220" dur="8s" repeatCount="indefinite" />
                            <animate attributeName="ry" values="120;140;120" dur="8s" repeatCount="indefinite" />
                        </ellipse>
                        <ellipse
                            cx="300"
                            cy="700"
                            rx="180"
                            ry="90"
                            fill="url(#contactBlobGrad2)"
                            opacity="0.7"
                        >
                            <animate attributeName="rx" values="180;160;180" dur="10s" repeatCount="indefinite" />
                            <animate attributeName="ry" values="90;110;90" dur="10s" repeatCount="indefinite" />
                        </ellipse>
                    </g>
                    {/* Floating circles */}
                    <circle cx="200" cy="200" r="40" fill="var(--light-blue)" opacity="0.18">
                        <animate attributeName="cy" values="200;230;200" dur="7s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="1240" cy="700" r="30" fill="var(--green)" opacity="0.13">
                        <animate attributeName="cy" values="700;670;700" dur="6s" repeatCount="indefinite" />
                    </circle>
                    {/* Subtle triangle */}
                    <polygon points="1300,850 1350,900 1250,900" fill="var(--primary)" opacity="0.08" />
                    <defs>
                        <linearGradient id="contactBlobGrad" x1="1000" y1="100" x2="1400" y2="300" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00A8E8" />
                            <stop offset="1" stopColor="#007EA7" />
                        </linearGradient>
                        <linearGradient id="contactBlobGrad2" x1="200" y1="600" x2="400" y2="800" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#007EA7" />
                            <stop offset="1" stopColor="#00A8E8" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="contact-container">
                <h2 className="contact-title">Contact Me</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            autoComplete="name"
                        />
                    </label>
                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                        />
                    </label>
                    <div className="contact-services-label">Which service(s) are you interested in?</div>
                    <div className="contact-services-options">
                        {SERVICE_OPTIONS.map((service) => (
                            <label className="contact-service-option" key={service}>
                                <input
                                    type="checkbox"
                                    name="services"
                                    value={service}
                                    checked={form.services.includes(service)}
                                    onChange={handleChange}
                                />
                                {service}
                            </label>
                        ))}
                    </div>
                    <label>
                        Message
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                        />
                    </label>
                    <button type="submit" disabled={status.loading}>
                        {status.loading ? "Sending..." : "Send Message"}
                    </button>
                    {status.success && <div className="contact-success">{status.success}</div>}
                    {status.error && <div className="contact-error">{status.error}</div>}
                </form>
                <div className="contact-direct-email">
                    <span>Prefer email?  Email me directly at</span>{" "}
                    <a href="mailto:kyczaraalbregtse@gmail.com" className="contact-direct-email-link">
                        kyczaraalbregtse@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
}