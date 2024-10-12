
import axios from 'axios';

const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'c45a857c193f6302f2b5061c3b85e743',
    language: 'en-US'
  }
});

export const fetchPopularMovies = (page = 1) => movieApi.get(`/movie/popular?page=${page}`);
export const fetchTopRatedMovies = (page = 1) => movieApi.get(`/movie/top_rated?page=${page}`);
export const fetchUpcomingMovies = (page = 1) => movieApi.get(`/movie/upcoming?page=${page}`);
export const fetchMovieDetails = (id) => movieApi.get(`/movie/${id}`);
export const fetchMovieCredits = (id) => movieApi.get(`/movie/${id}/credits`);
export const searchMovies = (query, page = 1) => movieApi.get(`/search/movie`, { params: { query, page } });
