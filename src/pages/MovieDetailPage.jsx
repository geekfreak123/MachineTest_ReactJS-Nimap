// src/pages/MovieDetailPage.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieById, fetchMovieCredits } from "../utils/api";
import CastSlider from "../components/CastSlider";
import { IMAGE_BASE_URL } from "../utils/constants";

const MovieDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [movie, setMovie] = React.useState(null);
  const [cast, setCast] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movieResponse = await fetchMovieById(id);
      const castResponse = await fetchMovieCredits(id);
      setMovie(movieResponse.data);
      setCast(castResponse.data.cast);
    };

    fetchData();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="relative mb-8">
        <img
          className="w-full rounded-lg"
          src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
          alt={movie.title}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 p-5 text-white">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="text-lg mt-2">{movie.overview}</p>
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-4">Cast</h2>
      <CastSlider cast={cast} />
    </div>
  );
};

export default MovieDetailPage;
