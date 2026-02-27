import { useState } from "react";

function SearchBar() {
    const [city, setCity] = useState("");

    const handleSearch = () => {
        console.log("Searching for:", city);

    };
    return (
        <div>
            <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border p-2 rounded w-64"

            />
            <button className="bg-green-600 text-white px-4 py-2 rounded">
            Search
            </button>

        
        </div>
    );
}

export default SearchBar;