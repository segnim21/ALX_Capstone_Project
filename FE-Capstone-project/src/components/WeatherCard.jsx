function WeatherCard() {
  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-xl rounded-xl p-8">

      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-6">
        Today's Weather: London
      </h2>

      {/* Main Weather */}
      <div className="text-center mb-8">
        <div className="text-6xl mb-2">☁️</div>
        <p className="text-4xl font-semibold">15°C</p>
        <p className="text-gray-500">Mostly Cloudy</p>
      </div>

      {/* Weather Details */}
      <div className="grid grid-cols-3 gap-6 text-center mb-8">

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-2xl">💧</p>
          <p className="font-semibold">Humidity</p>
          <p>72%</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-2xl">💨</p>
          <p className="font-semibold">Wind</p>
          <p>12 km/h</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-2xl">🌡️</p>
          <p className="font-semibold">Feels Like</p>
          <p>13°C</p>
        </div>

      </div>

      {/* Refresh Button */}
      <div className="text-center mb-8">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          🔄 Refresh
        </button>
      </div>

      {/* Popular Cities */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-center">
          Popular Cities
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">

          <div className="bg-gray-100 p-4 rounded-lg">
            New York ☀️ 24°
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            Tokyo ☁️ 18°
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            Paris 🌧️ 14°
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            Dubai ☀️ 35°
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            Sydney ⛅ 22°
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            Moscow ❄️ -2°
          </div>

        </div>
      </div>

    </div>
  );
}

export default WeatherCard;