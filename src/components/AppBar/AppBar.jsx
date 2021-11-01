import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import authSelectors from '../../redux/auth/auth-selectors';

import s from '../AppBar/AppBar.module.css';

export default function AppBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <header>
      {(toggleMenu || screenWidth > 500) && (
        <div className={s.nav}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      )}
      <button onClick={toggleNav} className={s.btn}>
        Menu
      </button>
    </header>
  );
}
