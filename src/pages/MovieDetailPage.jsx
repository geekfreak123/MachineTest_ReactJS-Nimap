import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, fetchMovieCredits } from "../utils/api";
import Slider from "react-slick";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    fetchMovieDetails(id).then((response) => {
      setMovie(response.data);
    });
    fetchMovieCredits(id).then((response) => {
      setCredits(response.data.cast);
    });
  }, [id]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative text-white w-full h-screen">
      {movie && (
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black bg-opacity-70 flex flex-col justify-between h-full">
            <div className="p-8">
              <h1 className="text-4xl font-bold">{movie.title}</h1>
              <h2 className="font-bold text-2xl my-2 text-red-500">
                Rating: {movie.vote_average}
              </h2>
              <div className="mb-3">
                <span className="border border-red-500 rounded-md m-2 p-1">
                  {movie.runtime} min
                </span>
                <span className="text-red-400">
                  {movie.genres.map((genre) => genre.name).join(", ")}
                </span>
              </div>
              <h2 className="text-3xl font-bold">Overview:</h2>
              <p className="mt-2 ">{movie.overview}</p>
            </div>
            <div className="p-8">
              <h2 className="text-2xl mb-2">Cast</h2>
              <Slider {...settings}>
                {credits.map((cast, index) => (
                  <div key={index} className="p-2">
                    <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                      <img
                        src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                        alt={cast.name}
                        className="w-full h-56 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <p className="text-lg font-semibold text-center">
                          {cast.name}
                        </p>
                        <p className="text-sm text-gray-400 text-center">{`Character: ${cast.character}`}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailPage;
