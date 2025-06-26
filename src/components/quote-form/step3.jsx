export default function StepThree({ form, handlePrev, handleNext }) {
    return (
        <div className="step-three form-step">
            <h2>Review and Submit</h2>
            <div className="input-container">
                <div className="review-details">
                    <p><strong>Name:</strong> {form.name}</p>
                    <p><strong>Email:</strong> {form.email}</p>
                    <p><strong>Business Name:</strong> {form.businessName}</p>
                    <p><strong>Domain:</strong> {form.domain || "N/A"}</p>
                    <p><strong>Project Type:</strong> {form.services}</p>
                    <p><strong>Budget:</strong> {form.budget}</p>
                    <p><strong>Additional Information:</strong> {form.additionalInfo}</p>
                </div>
                <div className="button-group">
                    <button type="button" className="prev-step-button" onClick={handlePrev}>Back</button>
                    <button type="submit" className="next-step-button">Submit</button>
                </div>
            </div>
        </div>
    );
}