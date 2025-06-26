export default function StepOne({ form, handleChange, handleNext }) {
    return (
        <div className="step-one form-step">
            <h2>Step 1: Your Information</h2>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="button" onClick={handleNext}>Next</button>
        </div>
    );
}