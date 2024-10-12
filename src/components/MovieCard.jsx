import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="card bg-gray-800 text-white m-2 p-2 transition-transform duration-300 transform hover:scale-105">
        <img
          src={imageUrl}
          alt={movie.title}
          className="w-full h-60 object-cover"
        />
        <div className="p-2">
          <h3 className="text-lg font-semibold">{movie.title}</h3>
          <p>Rating: {Number(movie.vote_average).toFixed(1)}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
