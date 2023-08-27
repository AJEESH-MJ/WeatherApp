import React, { useState, useEffect } from "react";
import {
  FaCloud,
  FaCloudRain,
  FaWind,
  FaTint,
  FaTemperatureHigh,
} from "react-icons/fa";

const WeatherDashboard = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city) {
      fetchWeatherData(city);
    }
  }, [city]);

  const fetchWeatherData = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1432873a6b659fbf99e62a100263209c&units=metric`
      );
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
        setError(null);
      } else {
        setError("City not found");
        setWeatherData(null);
      }
    } catch (error) {
      setError("An error occurred while fetching data");
      setWeatherData(null);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[715px] bg-gradient-to-b from-indigo-100 to-indigo-300 -z-10">
      <div className="w-full max-w-[800px] min-h-[400px] bg-white rounded-xl shadow-md -mt-32">
        {error && (
          <h1 className="text-gray-900 text-2xl font-bold mt-40">{error}</h1>
        )}
        {weatherData && (
          <div className="weather-info p-8">
            <h2 className="text-4xl text-gray-700 font-semibold mb-4">{weatherData.name}</h2>
            <div className="flex gap-4 mb-4 ml-20 md:ml-40 mt-10">
              <div className="icon">
                <FaTemperatureHigh size={24} className="text-orange-500" />
              </div>
              <p className="text-lg">Temperature: {weatherData.main.temp}°C</p>
            </div>
            <div className="flex gap-4 mb-4 ml-20 md:ml-40 mt-6">
              <div className="icon">
                <FaCloud size={24} className="text-blue-500" />
              </div>
              <p className="text-lg">
                Description: {weatherData.weather[0].description}
              </p>
            </div>
            <div className="flex gap-4 mb-4 ml-20 md:ml-40 mt-6">
              <div className="icon">
                <FaWind size={24} className="text-gray-500" />
              </div>
              <p className="text-lg">
                Wind Speed: {weatherData.wind.speed} km/h
              </p>
            </div>
            <div className="flex gap-4 ml-20 md:ml-40 mt-6">
              <div className="icon">
                <FaTint size={24} className="text-blue-400" />
              </div>
              <p className="text-lg">Humidity: {weatherData.main.humidity}%</p>
            </div>
          </div>
        )}
        {!error && !weatherData && (
          <div className="no-data p-8 flex items-center justify-center flex-col mt-16">
            <FaCloudRain size={64} color="#22345c" />
            <p className="text-gray-500 text-lg mt-8">Location: NewYork</p>
            <p className="text-gray-500 text-md mt-2">Weather: Rainy</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherDashboard;