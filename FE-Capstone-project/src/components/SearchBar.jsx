import { useState } from "react";

function SearchBar({ setCity }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() !== "") {
      setCity(input);
      setInput("");
    }
  };

  return (
    <div className="flex gap-2 justify-center mt-10">
      <input
        type="text"
        placeholder="Enter city..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 rounded w-64"
      />

      <button
        onClick={handleSearch}
        className="bg-green-500 hover:bg-blue-600 text-white px-4 py-2 m-2 rounded"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;