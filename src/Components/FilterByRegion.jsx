import React from "react";

const FilterByRegion = ({setQuery}) => {
  return (
    <div className="filter-by-region">
      <select onChange={(e) => setQuery(e.target.value.toLowerCase())}>
        <option hidden="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Antarctic">Antarctic</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default FilterByRegion;
