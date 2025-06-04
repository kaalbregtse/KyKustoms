import React from 'react';
import HeroSection from '../components/banners/hero-section';
import '../styles/page-styles/home.css';
import Services from '../components/informative/services';
import Portfolio from '../components/informative/portfolio';
import Process from '../components/informative/process';
import Testimonials from '../components/informative/testomonials';

export default function Home() {
    return (
        <div className="home-page">
            <HeroSection />
            <Services />
            <Portfolio />
            <Process />
            <Testimonials />
        </div>
    );
}