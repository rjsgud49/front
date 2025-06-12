import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Drawer from './Drawer';
import gbswLogo from '../assets/img/gbsw_logo.png';
import './styles/Header.css'

const Header = () => {
  const [navVisible, setNavVisible] = useState(false);

  return (
    <>
      <div className="header">
        <div className="menu-icon" onMouseEnter={() => setNavVisible(true)}>
          <Menu size={28} />
        </div>
        <div className="school-branding">
          <img src={gbswLogo} alt="학교 로고" />
        </div>
        <div className='login-text'>로그인</div>
      </div>
      {navVisible && <Drawer onClose={() => setNavVisible(false)} />}
    </>
  );
};

export default Header;
