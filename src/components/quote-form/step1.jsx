export default function StepOne({ form, handleChange, handleNext }) {
    return (
        <div className="step-one form-step">
            <h2>Your Information</h2>
                <div className="input-container">
                <div className={`quote-text-input${form.name ? " filled" : ""}`}>
                    <label>
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={`quote-text-input${form.email ? " filled" : ""}`}>
                    <label>
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <h2>Business Information</h2>
                <div className={`quote-text-input${form.businessName ? " filled" : ""}`}>
                    <label>
                        Business Name
                    </label>
                    <input
                        type="text"
                        name="businessName"
                        value={form.businessName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={`quote-text-input${form.domain ? " filled" : ""}`}>
                    <label>
                        Domain (if applicable)
                    </label>
                    <input
                        type="text"
                        name="domain"
                        value={form.domain}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button className='next-step-button' disabled={!form.name || !form.email || !form.businessName} type="button" onClick={handleNext}>Next</button>
        </div>
    );
}