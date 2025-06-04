import React from 'react';
import './policies.css';

export default function Policies() {
  return (
    <section className="policies-section">
      <div className="policies-container">
        <h1 className="policies-title">Privacy Policy & Terms of Service</h1>

        <div className="policy-block">
          <h2>Privacy Policy</h2>
          <p>
            At KyKustoms, your privacy is important. This site collects minimal personal data, such as your name, email, and project details, only when you choose to provide them via a contact form or email.
          </p>
          <p>
            Any information you submit is used solely to communicate with you about your project and will never be sold, rented, or shared with third parties without your consent, unless required by law.
          </p>
          <p>
            This site may use cookies or analytics tools to understand general usage and improve the experience. You can disable cookies in your browser if you prefer.
          </p>
          <p>
            For questions or data requests, email me{' '}
            <a className="policy-email-link" href="mailto:kyczaraalbregtse@gmail.com">here</a>.
          </p>
        </div>

        <div className="policy-block">
          <h2>Terms of Service</h2>
          <p>
            By contacting or hiring KyKustoms for freelance web development or design services, you agree to discuss and define the project scope, timeline, and cost prior to beginning work.
          </p>
          <p>
            A deposit or signed agreement may be required to start a project. All work remains the intellectual property of KyKustoms until payment is made in full, after which the final product is yours.
          </p>
          <p>
            I strive to provide high-quality, custom solutions and will work with you to ensure your satisfaction. However, I am not liable for issues arising from third-party services (e.g., hosting providers, CMS platforms).
          </p>
          <p>
            These terms may be updated as needed. Please reach out with any questions or concerns.
          </p>
        </div>
      </div>
    </section>
  );
}
