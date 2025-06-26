export default function StepTwo({ form, handleChange, handleNext, handlePrev }) {
    return (
        <div className="step-two">
            <h2>Step 2: Project Details</h2>
            <label>
                Project Type:
                <input
                    type="text"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Budget:
                <input
                    type="text"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Timeline:
                <input
                    type="text"
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Additional Information:
                <textarea
                    name="additionalInfo"
                    value={form.additionalInfo}
                    onChange={handleChange}
                />
            </label>
            <div className="button-group">
                <button type="button" onClick={handlePrev}>Back</button>
                <button type="button" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}