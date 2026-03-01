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

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setWeather(data);

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );

      const forecastData = await forecastResponse.json();

      const dailyForecast = forecastData.list.filter(
        (_, index) => index % 8 === 0
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

  if (loading)
    return <p className="text-center mt-10 text-lg">Loading...</p>;

  if (error) return <ErrorMessage message={error} />;

  if (!weather) return null;

  return (
    <div
      className={`max-w-5xl mx-auto mt-10 rounded-xl p-8 shadow-xl transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-white text-gray-900"
      }`}
    >
      {/* Dark Mode Toggle */}
      <div className="text-right mb-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded-lg transition ${
            darkMode
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Current Weather */}
      <h2 className="text-3xl font-bold text-center mb-8">
        Today's Weather: {weather.name}
      </h2>

      <div className="text-center mb-10">
        <div className="text-6xl mb-4">
          {weather.weather[0].main === "Clouds" && "☁️"}
          {weather.weather[0].main === "Clear" && "☀️"}
          {weather.weather[0].main === "Rain" && "🌧️"}
        </div>

        <p className="text-5xl font-semibold mb-2">
          {Math.round(weather.main.temp)}°C
        </p>

        <p className="opacity-70 capitalize">
          {weather.weather[0].description}
        </p>
      </div>

      {/* Weather Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: "💧",
            label: "Humidity",
            value: `${weather.main.humidity}%`,
          },
          {
            icon: "💨",
            label: "Wind",
            value: `${weather.wind.speed} km/h`,
          },
          {
            icon: "🌡️",
            label: "Feels Like",
            value: `${Math.round(weather.main.feels_like)}°C`,
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md text-center transition ${
              darkMode
                ? "bg-gray-800 border border-gray-700"
                : "bg-gray-100"
            }`}
          >
            <p className="text-3xl mb-2">{item.icon}</p>
            <p className="font-semibold">{item.label}</p>
            <p>{item.value}</p>
          </div>
        ))}
      </div>

      {/* 5-Day Forecast weather condition  */}
      {forecast && (
        <>
          <h3 className="text-2xl font-bold text-center mb-6">
            5-Day Forecast
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
            {forecast.map((day, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg text-center shadow-md transition ${
                  darkMode
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-gray-100"
                }`}
              >
                <p className="font-semibold mb-2">
                  {new Date(day.dt_txt).toLocaleDateString()}
                </p>

                <p className="text-2xl mb-2">
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
        </>
      )}

      {/* Refresh button */}
      <div className="text-center mb-8">
        <button
          onClick={fetchWeather}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
        >
          🔄 Refresh
        </button>
      </div>

      {/* Popular Cities */}
      <div>
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
              className={`px-4 py-2 rounded-lg transition ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
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