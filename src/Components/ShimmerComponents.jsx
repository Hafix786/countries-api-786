import React from "react";
import { Link } from "react-router-dom";

const ShimmerComponents = () => {
  
  return (
    <div className="countries-container">
      {Array.from({ length: 30 }).map((el, index) => {
        return (
          <Link key={index} className="country-card shimmer-card" to="/">
            <div className="img"></div>
            <div className="country-content">
              <h2></h2>
              <p>
                <b></b>
              </p>
              <p>
                <b></b>
              </p>
              <p>
                <b></b>
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ShimmerComponents;
