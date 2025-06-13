import React from 'react';
import HeroSection from '../components/banners/hero-section';
import '../styles/page-styles/home.css';
import Process from '../components/informative/process';
import Testimonials from '../components/informative/testomonials';
import PortfolioCarousel from '../components/informative/portfolio-carousel';
import WhyChooseUs from '../components/informative/why-choose-us';
import FiftyFiftyPortfolio from '../components/informative/fifty-fifty-portfolio';

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
        </div>
    );
}