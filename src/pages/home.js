import React from 'react';
import HeroSection from '../components/banners/hero-section';
import '../styles/page-styles/home.css';
import Process from '../components/informative/process';
import PortfolioCarousel from '../components/informative/portfolio-carousel';
import WhyChooseUs from '../components/informative/why-choose-us';
import FiftyFiftyPortfolio from '../components/informative/fifty-fifty-portfolio';
import QuoteForm from '../components/quote-form/quote-form';

export default function Home() {
    return (
        <div className="home-page">
            <HeroSection />
            <div className='home-gradient-background'>
                <PortfolioCarousel />
                <WhyChooseUs />
                <FiftyFiftyPortfolio />
            </div>
            <Process />
            <QuoteForm />
        </div>
    );
}