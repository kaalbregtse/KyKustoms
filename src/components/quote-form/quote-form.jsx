import React, { useState } from "react";
import StepOne from './step1';
import StepTwo from './step2';
import StepThree from './step3';
import "./quote-form.css"; // Ensure you have the appropriate CSS for styling

export default function QuoteForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [form, setForm] = useState({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        timeline: "",
        additionalInfo: ""
    });
    const [status, setStatus] = useState({ loading: false, success: null, error: null });

    const FORM_ENDPOINT = "https://formspree.io/f/mgvyvell";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleNext = () => setCurrentStep((prev) => prev + 1);
    const handlePrev = () => setCurrentStep((prev) => prev - 1);

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
                setForm({
                    name: "",
                    email: "",
                    projectType: "",
                    budget: "",
                    timeline: "",
                    additionalInfo: ""
                });
                setCurrentStep(1);
            } else {
                throw new Error("Failed to send message.");
            }
        } catch (err) {
            setStatus({ loading: false, success: null, error: "Something went wrong. Please try again later." });
        }
    };

    return (
        <section className="quote-form-section">
            <div className="quote-form-container">
                <h2 className="quote-form-title">Get a Quote</h2>
                <form className="quote-form" onSubmit={handleSubmit}>
                    {currentStep === 1 && (
                        <StepOne
                            form={form}
                            handleChange={handleChange}
                            handleNext={handleNext}
                        />
                    )}
                    {currentStep === 2 && (
                        <StepTwo
                            form={form}
                            handleChange={handleChange}
                            handleNext={handleNext}
                            handlePrev={handlePrev}
                        />
                    )}
                    {currentStep === 3 && (
                        <StepThree
                            form={form}
                            handlePrev={handlePrev}
                        />
                    )}
                    {status.loading && <p>Loading...</p>}
                    {status.success && <p className="success-message">{status.success}</p>}
                    {status.error && <p className="error-message">{status.error}</p>}
                </form>
            </div>
        </section>
    );
}