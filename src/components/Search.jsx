import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ onResults }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 2) {
      const delayDebounce = setTimeout(() => {
        onResults(query);
        navigate(`/search?q=${query}`);
      }, 300);

      return () => clearTimeout(delayDebounce);
    }
  }, [query, onResults, navigate]);

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input bg-gray-700 text-white px-4 py-2 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
      />
      <button
        type="button"
        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition-all"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
