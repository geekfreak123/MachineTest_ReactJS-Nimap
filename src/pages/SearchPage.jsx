
import { useEffect, useState } from "react";
import { searchMovies } from "../utils/api"; 
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination"; 
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("q");
    if (query) {
      searchMovies(query, currentPage).then((response) => {
        setSearchResults(response.data.results);
        setTotalPages(response.data.total_pages); 
      });
    }
  }, [location.search, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page); 
  };

  return (
    <div className="p-4">
      <h2 className="text-white text-2xl mb-4">Search Results</h2>
      {searchResults.length > 0 ? (
        <>
          <MovieList movies={searchResults} /> 
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <p className="text-white">No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;
