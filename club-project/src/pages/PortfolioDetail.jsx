import React from 'react';
import { useParams } from 'react-router-dom';
import './styles/PortfolioDetail.css';
import { Portfoliodata } from '../data/Portfoliodata';

const PortfolioDetail = () => {
    const { id } = useParams();
    const portfolio = Portfoliodata.find((item) => item.id === parseInt(id));

    if (!portfolio) {
        return <div className="portfolio-detail">해당 포트폴리오를 찾을 수 없습니다.</div>;
    }

    return (
        <div className="portfolio-container">
            <aside className="sidebar">
                <div className="profile-box">
                    <div className="profile-img" />
                    <p><strong>이름:</strong> {portfolio.name}</p>
                    <p><strong>학년:</strong> {portfolio.grade}</p>
                    <p><strong>학과:</strong> {portfolio.classname}</p>
                    <hr />
                    <p>한줄 자기소개</p>
                    <hr />
                    <div className="link-list">
                        <p><span className="label">📁 Github</span><br /><span>{portfolio.github}</span></p>
                        <p><span className="label">✉️ Email</span><br /><span>{portfolio.email}</span></p>
                        <p><span className="label">📌 Notion</span><br /><span>{portfolio.notion}</span></p>
                        <p><span className="label">📝 Velog</span><br /><span>{portfolio.velog}</span></p>
                    </div>
                </div>
            </aside>

            <main className="portfolio-content">
                <p className="guide-text">마크다운 형식으로 자유롭게 구성한 포트폴리오 영역</p>
            </main>
        </div>
    );
};

export default PortfolioDetail;
