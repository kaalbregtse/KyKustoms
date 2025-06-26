export default function StepThree({ form, handlePrev }) {
    return (
        <div className="step-three">
            <h2>Step 3: Review and Submit</h2>
            <div className="review-details">
                <p><strong>Name:</strong> {form.name}</p>
                <p><strong>Email:</strong> {form.email}</p>
                <p><strong>Project Type:</strong> {form.projectType}</p>
                <p><strong>Budget:</strong> {form.budget}</p>
                <p><strong>Timeline:</strong> {form.timeline}</p>
                <p><strong>Additional Information:</strong> {form.additionalInfo}</p>
            </div>
            <div className="button-group">
                <button type="button" onClick={handlePrev}>Back</button>
                <button type="submit">Submit</button>
            </div>
        </div>
    );
}