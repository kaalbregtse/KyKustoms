import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PricingFeatures() {

    const features = [
        {
            title: 'Responsive Design',
            description: 'Ensures your website looks great on all devices, from desktops to smartphones.',
            basic: true,
            standard: true
        },
        {
            title: 'Custom Design',
            description: 'Tailored designs that match your brand identity and business goals.',
            basic: true,
            standard: true
        },
        {
            title: 'Custom Domain',
            description: 'Get a personalized domain name that reflects your brand.',
            basic: true,
            standard: true
        },
        {
            title: 'SEO Optimization',
            description: 'Improves your site’s visibility on search engines to attract more visitors.',
            basic: false,
            standard: true
        },
        {
            title: 'Analytics Integration',
            description: 'Track your website’s performance with integrated analytics tools.',
            basic: false,
            standard: true
        },
        {
            title: 'Continuous Support',
            description: 'Ongoing support to ensure your website runs smoothly and stays updated.',
            basic: false,
            standard: true
        },
        {
            title: 'Page Count',
            description: 'Number of pages included in the plan.',
            basic: 1,
            standard: 5
        }

    ];
    
    return (
        <>
        {/* Gradient header for tablet and mobile */}
        <div className="planComparisonHeader">Plan Comparison</div>
        <div className="pricingFeaturesSection">
            <div className="featureList">
                <div className="featureList__header">
                    <h2 style={{color: 'var(--pure-white)', margin: '0'}}>test</h2>
                </div>
                <div className="featureList__titles">
                    {features.map((feature, idx) => (
                        <div key={idx} className="featureList__title">
                            <p>{feature.title}</p>
                            <span className="featureList__infoIcon">
                                <FontAwesomeIcon icon="circle-info" style={{height: '0.75rem'}}/>
                                <span className="featureList__descriptionTooltip">
                                    {feature.description}
                                </span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="boolsContainer">
                <div className="bools">
                    <div className="featureList__header">
                        <h2>Basic</h2>
                    </div>
                    <div className="featureList__bools">
                        {features.map((feature, idx) => (
                            <div key={idx} className="featureList__bool">
                                {typeof feature.basic === "boolean" ? (
                                    <FontAwesomeIcon
                                        icon={feature.basic ? "circle-check" : "minus"}
                                        style={{ color: feature.basic ? "#4BB543" : "#bbb" }}
                                    />
                                ) : (
                                    <span className="featureList__value">{feature.basic}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bools">
                    <div className="featureList__header">
                        <h2>Standard</h2>
                    </div>
                    <div className="featureList__bools">
                        {features.map((feature, idx) => (
                            <div key={idx} className="featureList__bool">
                                {typeof feature.standard === "boolean" ? (
                                    <FontAwesomeIcon
                                        icon={feature.standard ? "circle-check" : "minus"}
                                        style={{ color: feature.standard ? "#4BB543" : "var(--gray)" }}
                                    />
                                ) : (
                                    <span className="featureList__value">{feature.standard}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}