import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TopRatedPage from "./pages/TopRatedPage";
import UpcomingMoviesPage from "./pages/UpcomingMoviesPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results); // Update search results state
  };

  return (
    <Router>
      <Navbar onSearch={handleSearchResults} />
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route
            path="/search"
            element={<SearchPage searchResults={searchResults} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
