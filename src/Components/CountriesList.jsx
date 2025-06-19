import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import ShimmerComponents from "./ShimmerComponents";

import './ShimmerComponents.css'
import useTheme from "../hooks/useTheme";

const CountriesList = ({ query }) => {
    const [isDark] = useTheme();

  const fields = [
    "name",
    "flags",
    "population",
    "region",
    "subregion",
    "capital",
    "tld",
    "currencies",
    "languages",
    "borders",
  ];
  const [CountriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/all?fields=${fields.join(",")}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      })
      .catch((err) => {
        console.log("Failed to load api", err);
      });
  }, []);

  return (
    <>
      
      {CountriesData.length === 0? <ShimmerComponents/> :
      <div className="countries-container">
        {CountriesData.filter((country) => {
          return country.name.common.toLowerCase().includes(query) || country.region.toLowerCase() === query
        }).map((country, i) => {
          // console.log(country);
          return (
            <CountryCard
              key={i}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population.toLocaleString("en-US")}
              region={country.region}
              capital={country.capital}
              country={country}
              
              ></CountryCard>
            );
        })}
      </div>}
    </>
  );
};

export default CountriesList;
