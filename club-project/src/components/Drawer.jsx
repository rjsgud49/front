import React from 'react';
import { Home, Layers, FolderKanban, BarChart2} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './styles/Header.css'

const Drawer = ({ onClose }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  }

  return (
    <div className="navigation-bar">
      <ul className="nav-list">
        <li onClick={() => handleNavigate('/')}><Home size={18} /> <span>메인페이지</span></li>
        <li onClick={() => handleNavigate('/club')}><Layers size={18} /> <span>전공동아리</span></li>
        <li onClick={() => handleNavigate('/portfolio')}><FolderKanban size={18} /> <span>포트폴리오</span></li>
        <li><BarChart2 size={18} /> <span>통계</span></li>
      </ul>
    </div>
  );
};

export default Drawer;
