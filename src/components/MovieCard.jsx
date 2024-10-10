// src/components/MovieCard.js
import React from "react";
import { IMAGE_BASE_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        className="rounded-md w-full"
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
      />
      <h3 className="text-lg font-bold text-center mt-2">{movie.title}</h3>
    </div>
  );
};

export default MovieCard;
