// src/pages/SearchPage.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie } from "../redux/movieSlice"; 
import MovieList from "../components/MovieList";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const searchedMovies = useSelector((state) => state.movies.searchedMovies);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);

  const handleSearch = () => {
    if (query) {
      dispatch(searchMovie(query)); // Dispatch the searchMovie action
    }
  };

  useEffect(() => {
    // This can be used to clear results on component unmount or query change
    return () => {
      setQuery("");
    };
  }, []);

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        className="border p-2 rounded w-full"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded mt-2"
      >
        Search
      </button>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <MovieList movies={searchedMovies} />{" "}
      {/* Pass the searched movies to MovieList */}
    </div>
  );
};

export default SearchPage;
