import React, { useContext, useState } from 'react'

import Search from "./Search";
import FilterByRegion from "./FilterByRegion";
import CountriesList from "./CountriesList";
import ShimmerComponents from "./ShimmerComponents";
import { ThemeContext } from '../contexts/ThemeContexts';

const Home = () => {
        const [query, setQuery] = useState("");
        const [isDark] = useContext(ThemeContext);
    
  return (
    <>
        <main className={`${isDark ? "dark-mode" : ""}`}>
        <div className="search-and-filter">
        <Search setQuery={setQuery} />
          <FilterByRegion setQuery={setQuery}/>
        </div>

        {query === "unmount" ? (
          " "
        ) : (
          <CountriesList query={query} />
        )}
      </main>
    </>
  )
}

export default Home