// src/pages/HomePage.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../redux/movieSlice";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";

const HomePage = () => {
  const dispatch = useDispatch();
  const { popularMovies, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-4">Popular Movies</h2>
          <MovieList movies={popularMovies} />
          <Pagination
            currentPage={1}
            totalPages={10}
            onPageChange={(page) => dispatch(getPopularMovies(page))}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
