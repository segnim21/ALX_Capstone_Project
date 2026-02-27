import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

function Home() {
  const [city, setCity] = useState("London");

  return (
    <div>
      <SearchBar setCity={setCity} />
      <WeatherCard city={city} />
    </div>
  );
}

export default Home;