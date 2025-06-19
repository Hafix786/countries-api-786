
import React, { useContext, useState } from 'react'
import './ShimmerCountry.css'
import { ThemeContext } from '../contexts/ThemeContexts'

const ShimmerCountry = () => {
  const [isDark] = useContext(ThemeContext)
  
  return (
      <main className={`${isDark? 'dark-mode': ''}`}>
        <div className="main-div shimmer-main-div">
          <div className="back-btn" >
            <i className=""></i>
            &nbsp;&nbsp;&nbsp;
          </div>
          <div className="card">
            <div className="flag">
              <div></div>
            </div>
            <div className="country-content">
              <h2 className="country-name"></h2>
              <div className="info">
                <div className="basic-info">
                  <div className="native-name">
                    <span></span>
                  </div>
                  <div className="population">
                    
                    <span>
                    </span>
                  </div>
                  <div className="region">
                     <span></span>
                  </div>
                  <div className="sub-region">
                    <span></span>
                  </div>
                  <div className="capital">
                    <span></span>
                  </div>
                </div>
                <div className="more-info">
                  <div className="domain">
                    
                    <span></span>
                  </div>
                  <div className="currencies">
                    <span></span>
                  </div>
                  <div className="languages">
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="border-countries">
                <h5></h5>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default ShimmerCountry