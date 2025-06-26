import React, { useState } from "react";
import StepOne from './step1';
import StepTwo from './step2';
import StepThree from './step3';
import "./quote-form.css"; // Ensure you have the appropriate CSS for styling
import { TailChase } from 'ldrs/react'
import 'ldrs/react/TailChase.css'

export default function QuoteForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [form, setForm] = useState({
        name: "",
        email: "",
        businessName: "",
        domain: "",
        budget: "",
        services: [],
        timeline: "",
        additionalInfo: ""
    });
    const [status, setStatus] = useState({ loading: false, success: null, error: null });

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
                    businessName: "",
                    domain: "",
                    budget: "",
                    services: [],
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
                    <div className="progress-indicator">
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: `${(currentStep - 1) * 50}%`}}
                            ></div>
                        </div>
                        <div className="steps">
                            <div className={`step ${currentStep === 1 ? "active" : "" 
                                }`}>1</div>
                            <div className={`step ${currentStep === 2 ? "active" : ""  
                                }`}>2</div>
                            <div className={`step ${currentStep === 3 ? "active" : ""
                                }`}>3</div>
                        </div>
                    </div>
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
                                handleChange={handleChange}
                                handleNext={handleNext}
                                handlePrev={handlePrev}
                            />
                        )}
                        {status.loading &&
                            <TailChase
                                size="40"
                                speed="1.75"
                                color="blue" 
                            />}
                        {status.success && <p className="success-message">{status.success}</p>}
                        {status.error && <p className="error-message">{status.error}</p>}
                    </form>
                </div>
        </section>
    );
}