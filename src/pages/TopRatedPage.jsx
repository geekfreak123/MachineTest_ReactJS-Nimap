// src/pages/TopRatedPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopRatedMovies } from '../redux/movieSlice';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const TopRatedPage = () => {
  const dispatch = useDispatch();
  const { topRatedMovies, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-4">Top Rated Movies</h2>
          <MovieList movies={topRatedMovies} />
          <Pagination currentPage={1} totalPages={10} onPageChange={(page) => dispatch(getTopRatedMovies(page))} />
        </>
      )}
    </div>
  );
};

export default TopRatedPage;
