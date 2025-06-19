import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { data, Link, useLocation, useParams } from "react-router-dom";
import ShimmerCountry from "./ShimmerCountry";
import { ThemeContext } from "../contexts/ThemeContexts";

const Country = () => {
  const params = useParams();
  const { state } = useLocation();
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDark')) ?? false)


  const countryName = params.country;
  const [countryData, setCountryData] = useState({});
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

  const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(
    countryName
  )}?fullText=true&fields=${fields.join(",")}`;

  function updateCountryData(country) {
    setCountryData({
      name: country.name.common,
      flag: country.flags.svg,
      nativeName: country.name.nativeName 
        ? Object.values(country.name.nativeName)[0]?.common
        : country.name.common,
      population: country.population,
      region: country.region,
      subRegion: country.subregion,
      capital: country.capital,

      topLevelDomain: country.tld,
      currencies: Object.values(country.currencies).map(
        (currency) => currency.name
      ),
      languages: Object.values(country.languages),
      borders: [],
    });

    if (!country.borders) {
      country.borders = [];
    }
    Promise.all(
      country.borders.map((border) => {
        return fetch(
          `https://restcountries.com/v3.1/alpha/${border}?fields=name`
        )
          .then((res) => res.json())
          .then((borderCountry) => {
            return borderCountry.name.common;
          });
      })
    ).then((borders) => {
      setTimeout(() => {
        setCountryData((prevState) => ({ ...prevState, borders }));
      });
    });
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }
    fetch(url)
      .then((res) => res.json())
      .then(([country]) => {
        updateCountryData(country);
      });
  }, [countryName]);

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      <Header/>
      {countryData.name == undefined ? (
        <ShimmerCountry />
      ) : (
        <main className={`${isDark? 'dark-mode': ''}`}>
          <div className="main-div">
            <div className="back-btn" onClick={() => history.back()}>
              <i className="fa-solid fa-arrow-left"></i>
              &nbsp;&nbsp;&nbsp;Back
            </div>
            <div className="card">
              <div className="flag">
                <img src={countryData.flag} alt="flag" />
              </div>
              <div className="country-content">
                <h2 className="country-name">{countryData.name}</h2>
                <div className="info">
                  <div className="basic-info">
                    <div className="native-name">
                      Native Name: <span>{countryData.nativeName}</span>
                    </div>
                    <div className="population">
                      Population:{" "}
                      <span>
                        {countryData.population?.toLocaleString("en-US")}
                      </span>
                    </div>
                    <div className="region">
                      Region: <span>{countryData.region}</span>
                    </div>
                    <div className="sub-region">
                      Sub Region: <span>{countryData.subRegion}</span>
                    </div>
                    <div className="capital">
                      Capital: <span>{countryData.capital?.join(", ")}</span>
                    </div>
                  </div>
                  <div className="more-info">
                    <div className="domain">
                      Top Level Domain:{" "}
                      <span>{countryData.topLevelDomain?.join(", ")}</span>
                    </div>
                    <div className="currencies">
                      Currencies:{" "}
                      <span>{countryData.currencies?.join(", ")}</span>
                    </div>
                    <div className="languages">
                      Languages:{" "}
                      <span>{countryData.languages?.join(", ")}</span>
                    </div>
                  </div>
                </div>
                {Array.isArray(countryData.borders) &&
                  countryData.borders.length > 0 && (
                    <div className="border-countries">
                      <h5>Border Countries:</h5>&nbsp;
                      {countryData.borders.map((border) => (
                        <Link
                          className="neighbor"
                          key={border}
                          to={`/${border}`}
                        >
                          {border}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          </div>
        </main>
      )}
    </ThemeContext.Provider>
  );
};

export default Country;
