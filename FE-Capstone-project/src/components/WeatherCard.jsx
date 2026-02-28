import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";

function WeatherCard({ city, setCity }) {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError(null);

      // CURRENT WEATHER
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);

      // 5-DAY FORECAST (FREE API)
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );

      const forecastData = await forecastResponse.json();

      // Take one forecast per day (every 8 items = 24 hours)
      const dailyForecast = forecastData.list.filter(
        (item, index) => index % 8 === 0
      );

      setForecast(dailyForecast.slice(0, 5));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <ErrorMessage message={error} />;
  if (!weather) return null;

  return (
    <div
      className={`max-w-4xl mx-auto mt-10 shadow-xl rounded-xl p-8 transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      {/* DARK MODE BUTTON */}
      <div className="text-right mb-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* CURRENT WEATHER */}
      <h2 className="text-2xl font-bold text-center mb-6">
        Today's Weather: {weather.name}
      </h2>

      <div className="text-center mb-8">
        <div className="text-6xl mb-2">
          {weather.weather[0].main === "Clouds" && "☁️"}
          {weather.weather[0].main === "Clear" && "☀️"}
          {weather.weather[0].main === "Rain" && "🌧️"}
        </div>

        <p className="text-4xl font-semibold">
          {Math.round(weather.main.temp)}°C
        </p>

        <p className="opacity-70">
          {weather.weather[0].description}
        </p>
      </div>

      {/* WEATHER DETAILS */}
      <div className="grid grid-cols-3 gap-6 text-center mb-10">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <p className="text-2xl">💧</p>
          <p className="font-semibold">Humidity</p>
          <p>{weather.main.humidity}%</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <p className="text-2xl">💨</p>
          <p className="font-semibold">Wind</p>
          <p>{weather.wind.speed} km/h</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <p className="text-2xl">🌡️</p>
          <p className="font-semibold">Feels Like</p>
          <p>{Math.round(weather.main.feels_like)}°C</p>
        </div>
      </div>

      {/* 5-DAY FORECAST */}
      {forecast && (
        <div className="mt-10">
          <h3 className="text-xl font-bold text-center mb-6">
            Weather condition in the next 5 days
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {forecast.map((day, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center"
              >
                <p className="font-semibold">
                  {new Date(day.dt_txt).toLocaleDateString()}
                </p>

                <p className="text-2xl">
                  {day.weather[0].main === "Clouds" && "☁️"}
                  {day.weather[0].main === "Clear" && "☀️"}
                  {day.weather[0].main === "Rain" && "🌧️"}
                </p>

                <p>
                  {Math.round(day.main.temp_max)}° /
                  {Math.round(day.main.temp_min)}°
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* REFRESH BUTTON */}
      <div className="text-center mt-8">
        <button
          onClick={fetchWeather}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          🔄 Refresh
        </button>
      </div>

      {/* POPULAR CITIES */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-center mb-4">
          🌍 Popular Cities
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Addis Ababa",
            "Abuja",
            "Cairo",
            "Dodoma",
            "Pretoria",
            "Nairobi",
          ].map((c) => (
            <button
              key={c}
              onClick={() => setCity(c)}
              className="bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;