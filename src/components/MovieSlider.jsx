import React from "react";
import { getImageUrl } from "../utils/api";

// MovieDetail component to display detailed information about a movie
const MovieDetail = ({ movie }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <img
        className="w-full md:w-1/3"
        src={getImageUrl(movie.poster_path)}
        alt={movie.title}
      />
      <div className="p-4">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="mt-2">{movie.overview}</p>
        <p className="mt-2">Release Date: {movie.release_date}</p>
        <p className="mt-2">Rating: {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
