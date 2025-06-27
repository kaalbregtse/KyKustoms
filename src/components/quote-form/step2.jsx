export default function StepTwo({ form, handleChange, handleNext, handlePrev }) {
    const SERVICE_OPTIONS = [
        "Site Redesign",
        "New Website",
        'UX/UI Design',
        "SEO Optimization",
        "Support/Maintenance",
        "Other"
    ];

    return (
        <div className="step-two form-step">
            <h2>Project Details</h2>
            <div className="input-container">
                <div className={`quote-text-input${form.budget ? " filled" : ""}`}>
                    <label>
                        Budget
                    </label>
                    <input
                        type="number"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        required
                    />
                </div>
                <p className="services-header">Project Type</p>
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
                <div className={`quote-text-input${form.additionalInfo ? " filled" : ""} quote-textarea`}>
                    <label>
                        Additional Information
                    </label>
                    <textarea
                        name="additionalInfo"
                        value={form.additionalInfo}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="button-group">
                <button type="button" className='prev-step-button' onClick={handlePrev}>Back</button>
                <button type="button" className="next-step-button" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}