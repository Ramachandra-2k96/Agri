import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Droplets,
  MapPin,
  Cloud,
  Thermometer,
  Wind,
  Sun,
  TrendingUp,
  Calendar
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import axios from 'axios';

export function Overview() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [uvIndex, setUvIndex] = useState<number | null>(null); // Store UV index data
  const [location, setLocation] = useState<any>(null); // User's location
  const stats = [
    { icon: Droplets, label: 'Soil Moisture', value: '65%' },
    { icon: Thermometer, label: 'Temperature', value: '24°C' },
    { icon: Wind, label: 'Wind Speed', value: '12 km/h' },
    { icon: Sun, label: 'UV Index', value: 'Moderate' },
  ];

  // Hardcoded data for Crop Yield Prediction
  const yieldData = [
    { name: 'Week 1', yield: 60 },
    { name: 'Week 2', yield: 62 },
    { name: 'Week 3', yield: 65 },
    { name: 'Week 4', yield: 70 },
    { name: 'Week 5', yield: 75 },
  ];

  // Hardcoded data for Plant Growth Tracker
  const growthData = [
    { name: 'Day 1', growth: 10 },
    { name: 'Day 2', growth: 15 },
    { name: 'Day 3', growth: 20 },
    { name: 'Day 4', growth: 25 },
    { name: 'Day 5', growth: 30 },
  ];

  // Fetch weather data from OpenWeather API
  useEffect(() => {
    // Get user's current location (latitude and longitude)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          // Fetch weather data using latitude and longitude
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          console.error('Error fetching location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  // Fetch weather and UV index data
  const fetchWeatherData = async (latitude: number, longitude: number) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

    if (!apiKey) {
      console.error('Weather API key is missing');
      return;
    }

    try {
      // Fetch current weather data
      const weatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      );
      setWeatherData(weatherRes.data);

      // Fetch UV index data
      const uvRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/uvi?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      );
      setUvIndex(uvRes.data.value); // Assuming UV index data is stored in 'value'
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="space-y-6 bg-white">
      {/* Header Section */}
      <div className="flex items-center justify-between p-6 bg-green-200 shadow-md rounded-t-xl">
        <h1 className="text-3xl font-semibold text-gray-800">Farm Dashboard Overview</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar className="w-5 h-5" />
          <span>{new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* Weather Info at the top */}
      {weatherData && (
        <div className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-4">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 transition-shadow duration-300 shadow-lg bg-gray-50 rounded-xl hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="mt-1 text-2xl font-semibold text-gray-800">{weatherData.name}</p>
              </div>
              <MapPin className="w-8 h-8 text-green-600" />
            </div>
          </motion.div>

          {/* Temperature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 transition-shadow duration-300 shadow-lg bg-gray-50 rounded-xl hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Temperature</p>
                <p className="mt-1 text-2xl font-semibold text-gray-800">{weatherData.main.temp}°C</p>
              </div>
              <Thermometer className="w-8 h-8 text-green-600" />
            </div>
          </motion.div>

          {/* Humidity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 transition-shadow duration-300 shadow-lg bg-gray-50 rounded-xl hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Humidity</p>
                <p className="mt-1 text-2xl font-semibold text-gray-800">{weatherData.main.humidity}%</p>
              </div>
              <Droplets className="w-8 h-8 text-green-600" />
            </div>
          </motion.div>

          {/* Weather */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 transition-shadow duration-300 shadow-lg bg-gray-50 rounded-xl hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Weather</p>
                <p className="mt-1 text-2xl font-semibold text-gray-800">{weatherData.weather[0].description}</p>
              </div>
              {/* Use appropriate icon based on weather description */}
              {weatherData.weather[0].description.includes('cloud') ? (
                <Cloud className="w-8 h-8 text-gray-600" />
              ) : (
                <Sun className="w-8 h-8 text-yellow-600" />
              )}
            </div>
          </motion.div>

          {/* UV Index */}
          {uvIndex && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 transition-shadow duration-300 shadow-lg bg-gray-50 rounded-xl hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">UV Index</p>
                  <p className="mt-1 text-2xl font-semibold text-gray-800">{uvIndex}</p>
                </div>
                {/* Change icon color based on UV index */}
                {uvIndex <= 2 ? (
                  <Sun className="w-8 h-8 text-green-600" />
                ) : uvIndex <= 5 ? (
                  <Sun className="w-8 h-8 text-yellow-600" />
                ) : uvIndex <= 7 ? (
                  <Sun className="w-8 h-8 text-orange-600" />
                ) : uvIndex <= 10 ? (
                  <Sun className="w-8 h-8 text-red-600" />
                ) : (
                  <Sun className="w-8 h-8 text-darkred-600" />
                )}
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Yield Prediction Section */}
      <div className="grid grid-cols-1 gap-6 px-6 lg:grid-cols-2">
        {/* Yield Prediction Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-6 transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Crop Yield Prediction</h2>
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <div className="flex items-center justify-center h-64 bg-white rounded-lg shadow-inner">
            {/* Recharts LineChart */}
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={yieldData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="yield" stroke="#4CAF50" fill="#4CAF50" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Recent Activities Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-6 transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl"
        >
          <h2 className="mb-4 text-lg font-semibold text-gray-800">Recent Activities</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center space-x-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Soil moisture level updated</span>
                <span className="text-gray-400">2h ago</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

    </div>
  );
}
