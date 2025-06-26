export default function StepOne({ form, handleChange, handleNext }) {
    return (
        <div className="step-one form-step">
            <h2>Your Information</h2>
            <div className="quote-text-input">
                <label>
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                />
            </div>
            <div className="quote-text-input">
                <label>
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                />
            </div>
            <button className='next-step-button' type="button" onClick={handleNext}>Next</button>
        </div>
    );
}