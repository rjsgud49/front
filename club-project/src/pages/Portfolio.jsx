import React from 'react';
import PortfolioStats from '../components/PortfolioStats.jsx';
import FilterSection from '../components/FilterSection.jsx';
import PortfolioBox from '../components/PortfolioBox.jsx';
import './styles/Portfolio.css';
import { Portfoliodata } from '../data/Portfoliodata'; 
import Header from '../components/Header';
import Footer from '../components/Footer';


const Portfolio = () => {
  return (
    <div>
      <Header />
      <div className="portfolio-container">
        <PortfolioStats />
        <FilterSection />
        <div className="portfolio-list">
          {Portfoliodata.map((item, index) => (
            <PortfolioBox key={index} data={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default Portfolio;