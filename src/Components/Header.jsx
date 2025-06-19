import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContexts";
import useTheme from "../hooks/useTheme";

const Header = () => {
const [isDark, setIsDark] = useTheme()
  return (
    <header className={`header-container ${isDark? 'dark-mode': ''}`}>
      <div className="header-content">
        <h3>
          <a href="/">Where in the world?</a>
        </h3>
        <p className="change-theme" onClick={() =>{
          setIsDark(!isDark)
          localStorage.setItem('isDark', !isDark)
        }}>
          <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`} />
          <span>&nbsp;&nbsp;{`${isDark ? 'Light': 'Dark'}`} Mode</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
