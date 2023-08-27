import React, { useState } from "react";
import weather from "../assets/weather-app.png";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-indigo-100 shadow-md z-10">
      <h1 className="text-4xl font-bold my-4 text-gray-700 mb-10">
        Weather Dashboard
      </h1>
      <div className="flex-grow flex flex-col sm:flex-row items-center justify-center md:gap-20">
        <div className="flex-grow sm:flex-shrink-0 p-2">
          <img src={weather} alt="" className="h-16 w-16" />
        </div>
        <div className="flex-grow sm:flex-grow-0">
          <div className="flex flex-row items-center">
            <input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full sm:w-64 h-10 border-none text-gray-700 px-2 mr-2 text-lg rounded-md"
            />
            <button
              onClick={handleSearch}
              className="h-10 bg-gray-700 text-white px-4 sm:px-8 text-md rounded-md mt-2 sm:mt-0"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;