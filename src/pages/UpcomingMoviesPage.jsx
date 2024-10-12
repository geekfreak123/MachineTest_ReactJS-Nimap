import  { useEffect, useState } from "react";
import { fetchUpcomingMovies } from "../utils/api";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";

const UpcomingMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchUpcomingMovies(currentPage).then((response) => {
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    });
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h2 className="text-white text-2xl p-4">Upcoming Movies</h2>
      <MovieList movies={movies} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default UpcomingMoviesPage;
