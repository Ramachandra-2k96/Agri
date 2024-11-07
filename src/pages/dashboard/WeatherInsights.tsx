import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Sun, Wind, Droplets, ThermometerSun } from 'lucide-react';
import axios from 'axios';

export function WeatherInsights() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [alert, setAlert] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Get the user's current location (latitude and longitude)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      }, (error) => {
        console.error('Error getting location', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    if (!location) return;

    const { latitude, longitude } = location;
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY; // Get API key from .env file
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

    // Fetch current weather
    axios.get(weatherUrl)
      .then((response) => {
        setCurrentWeather(response.data);
      })
      .catch((error) => {
        console.error('Error fetching current weather data', error);
      });

    // Fetch 7-day forecast
    axios.get(forecastUrl)
      .then((response) => {
        const dailyForecast = response.data.list.filter((item, index) => index % 8 === 0); // Every 8th entry is a daily forecast
        setForecast(dailyForecast.map((item) => ({
          day: new Date(item.dt * 1000).toLocaleString('en-us', { weekday: 'short' }),
          temp: Math.round(item.main.temp),
          icon: item.weather[0].main === 'Rain' ? Droplets : item.weather[0].main === 'Clear' ? Sun : Cloud,
          condition: item.weather[0].description,
        })));
      })
      .catch((error) => {
        console.error('Error fetching forecast data', error);
      });

    // Example of a weather alert (you can replace this with real alerts)
    setAlert('Strong winds expected tomorrow afternoon. Consider protecting sensitive crops.');
  }, [location]);

  if (!currentWeather || forecast.length === 0) return <div>Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <div className="flex items-center mb-6 space-x-2">
        <Cloud className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Weather Insights</h2>
      </div>

      {/* Current Weather */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="p-6 mb-6 text-white rounded-lg bg-gradient-to-r from-blue-500 to-blue-600"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-bold">{currentWeather.main.temp}°C</h3>
            <p className="text-blue-100">{currentWeather.weather[0].description}</p>
          </div>
          <Sun className="w-12 h-12" />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <Wind className="w-6 h-6 mx-auto mb-2" />
            <p className="text-sm">{currentWeather.wind.speed} km/h</p>
            <p className="text-xs text-blue-100">Wind</p>
          </div>
          <div className="text-center">
            <Droplets className="w-6 h-6 mx-auto mb-2" />
            <p className="text-sm">{currentWeather.main.humidity}%</p>
            <p className="text-xs text-blue-100">Humidity</p>
          </div>
          <div className="text-center">
            <ThermometerSun className="w-6 h-6 mx-auto mb-2" />
            <p className="text-sm">{currentWeather.main.feels_like}°C</p>
            <p className="text-xs text-blue-100">Feels like</p>
          </div>
        </div>
      </motion.div>

      {/* 7-Day Forecast */}
      <div className="overflow-x-auto">
        <div className="flex pb-4 space-x-4">
          {forecast.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-24 p-4 text-center rounded-lg bg-gray-50"
            >
              <p className="text-sm font-semibold text-gray-600">{day.day}</p>
              <day.icon className="w-8 h-8 mx-auto my-2 text-gray-600" />
              <p className="text-lg font-bold text-gray-800">{day.temp}°C</p>
              <p className="text-xs text-gray-500">{day.condition}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Weather Alert */}
      {alert && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="p-4 mt-6 border-l-4 border-yellow-400 bg-yellow-50"
        >
          <div className="flex">
            <div className="flex-shrink-0">
              <Wind className="w-5 h-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                {alert}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
