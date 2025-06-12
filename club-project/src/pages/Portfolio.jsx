import React from 'react';
import PortfolioStats from '../components/PortfolioStats.jsx';
import FilterSection from '../components/FilterSection.jsx';
import PortfolioBox from '../components/PortfolioBox.jsx';
import './styles/Portfolio.css';
import { Portfoliodata } from '../data/Portfoliodata'; 


const Portfolio = () => {
  return (
      <div>
        <h1 className="text-3xl font-bold mb-6">포트폴리오</h1>
            <PortfolioStats />
          <FilterSection />
          <div className="portfolio-list">
              {Portfoliodata.map((item, index) => (
                  <PortfolioBox key={index} data={item} />
              ))}
          </div>
    </div>
  );
};

export default Portfolio;