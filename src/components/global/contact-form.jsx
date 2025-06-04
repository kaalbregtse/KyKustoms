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
            </div>
        </section>
    );
}