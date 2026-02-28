import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

function Home() {
  // Default city 
  const [city, setCity] = useState("Addis Ababa");

  return (
    <div className="min-h-screen bg-[#ced1d3]  transition-colors p-4">
      <SearchBar setCity={setCity} />
      <WeatherCard city={city} setCity={setCity} />
    </div>
  );
}

export default Home;