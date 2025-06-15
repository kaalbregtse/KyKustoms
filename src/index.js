import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './components/layouts/layout';
import Home from './pages/home';
import Contact from './pages/contact';
import './utils/fontawesome.js';
import PoliciesPage from './pages/documents/policies.js';
import Sitemap from './pages/documents/sitemap.js';
import Pricing from './pages/pricing.js';
import PortfolioProject from './pages/portfolio-project.js';
import FullPortfolio from './pages/full-portfolio.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<div>Page Not Found</div>} />
          <Route path="policies" element={<PoliciesPage />} />
          <Route path='sitemap' element={<Sitemap />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='portfolio' element={<FullPortfolio />} />
          <Route path="portfolio/:slug" element={<PortfolioProject />} />
          {/* Add more routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
