import '../styles/page-styles/pricing.css';
import PricingOptions from '../components/pricing-page/pricing-options.jsx';
import PricingFeatures from '../components/pricing-page/pricing-features.jsx';
import PricingCTA from '../components/pricing-page/pricing-cta.jsx';

export default function Pricing() {
    return (
        <>
            <div className="pricing-header">
                <h1 className="pricing-title">Find the <span>Perfect Plan</span> for your Needs</h1>
                <p>Unsure what to choose? Schedule a meeting with me to go over your scope together!</p>
            </div>
            <PricingOptions />
            <PricingFeatures />
            <PricingCTA />
        </>
    )
}