// src/pages/UpcomingMoviesPage.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUpcomingMovies } from "../redux/movieSlice";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";

const UpcomingMoviesPage = () => {
  const dispatch = useDispatch();
  const { upcomingMovies, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getUpcomingMovies());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-4">Upcoming Movies</h2>
          <MovieList movies={upcomingMovies} />
          <Pagination
            currentPage={1}
            totalPages={10}
            onPageChange={(page) => dispatch(getUpcomingMovies(page))}
          />
        </>
      )}
    </div>
  );
};

export default UpcomingMoviesPage;
