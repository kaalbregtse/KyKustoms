import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PricingOptions() {
    return (
        <div className="pricingOptionsSection">
            <div className="pricingOptionsText">
                <div className="stars">
                    <FontAwesomeIcon className='star' icon={['fas', 'star']} />
                    <FontAwesomeIcon className='star' icon={['fas', 'star']} />
                    <FontAwesomeIcon className='star' icon={['fas', 'star']} />
                    <FontAwesomeIcon className='star' icon={['fas', 'star']} />
                    <FontAwesomeIcon className='star' icon={['fas', 'star']} />
                </div>
                <h2 className="pricingOptionsTitle">Select a KyKustoms plan that matches your goals!</h2>
                <p>Take control of your digital presence from start to finish. Never missing a step along the way.</p>
            </div>
            <div className="pricingOptionsCards">
                <div className="pricingOptionCard">
                    <div className="pricingOptionCard__header">
                        <div>
                            <h3>Basic</h3>
                            <p className='subtitle'>Best Seller</p>
                        </div>
                        <p></p>
                        <p className='price'>$ 500</p>
                    </div>
                    <div className="pricingOptionCard__features">
                        <div>
                            <h4>Useful for:</h4>
                            <p>Single-page websites (SPAs) are great for situations where simplicity, speed, and focus are key. </p>
                        </div>
                        <a href='https://calendly.com/kyczar-kykustoms/30min' target='_blank' rel='noreferrer'>Schedule a meeting</a>
                    </div>
                </div>
                <div className="pricingOptionCard">
                    <div className="pricingOptionCard__header">
                        <div>
                            <h3>Standard</h3>
                            <p className='subtitle'>Best Deal</p>
                        </div>
                        <p className='price'>$ 1000</p>
                    </div>
                    <div className="pricingOptionCard__features">
                        <div>
                            <h4>Useful for:</h4>
                            <p>Multi-page websites are ideal for projects that require depth, organization, and scalability—perfect for businesses with multiple services.</p>
                        </div>
                        <a href='https://calendly.com/kyczar-kykustoms/30min' target='_blank' rel='noreferrer'>Schedule a meeting</a>
                    </div>
                </div>
            </div>
        </div>
    )
}