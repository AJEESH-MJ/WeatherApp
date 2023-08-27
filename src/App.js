import React, { useState } from 'react';
import './App.css';
import SearchBar from  './components/searchBar';
import WeatherDashboard from './components/weatherDashboard';

function App() {
  const [searchedCity, setSearchedCity] = useState('');

  const handleSearch = (city) => {
    setSearchedCity(city);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <WeatherDashboard city={searchedCity} />
    </div>
  );
}

export default App;