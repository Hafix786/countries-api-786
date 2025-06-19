import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ name, flag, population, region, capital, country }) => {
  
  return (
    <Link className="country-card" to={`./${name}`} state={country}>
      <img src={flag} alt="flag" />
      <div className="country-content">
        <h2>{name} </h2>
        <p>
          <b>Population: </b>
          {population}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
  