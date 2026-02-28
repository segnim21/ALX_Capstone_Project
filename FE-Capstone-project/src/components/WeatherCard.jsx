import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";

function WeatherCard({ city, setCity}) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async () => {
  try {
    setLoading(true);
    setError(null);

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    setWeather(data);
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
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-xl rounded-xl p-8">
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

        <p className="text-gray-500">
          {weather.weather[0].description}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 text-center mb-8">
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-2xl">💧</p>
          <p className="font-semibold">Humidity</p>
          <p>{weather.main.humidity}%</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-2xl">💨</p>
          <p className="font-semibold">Wind</p>
          <p>{weather.wind.speed} km/h</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-2xl">🌡️</p>
          <p className="font-semibold">Feels Like</p>
          <p>{Math.round(weather.main.feels_like)}°C</p>
        </div>
      </div>
      <div className="text-center mb-6">
  <button
    onClick={fetchWeather}
    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
  >
    🔄 Refresh
  </button>
</div>
<div className="mt-8">
  <h3 className="text-xl font-bold text-center mb-4">
    🌍 Popular Cities
  </h3>

  <div className="flex flex-wrap justify-center gap-4">
    {["Addis Ababa", "Abuja", "Cairo", "Dodoma", "Pretoria", "Nairobi"].map((c) => (
      <button
        key={c}
        onClick={() => setCity(c)}
        className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
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