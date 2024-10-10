// src/utils/api.js
import axios from 'axios';
import { API_BASE_URL, API_KEY } from './constants';

export const fetchPopularMovies = (page = 1) => {
  return axios.get(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
};

export const fetchTopRatedMovies = (page = 1) => {
  return axios.get(`${API_BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`);
};

export const fetchUpcomingMovies = (page = 1) => {
  return axios.get(`${API_BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`);
};

export const fetchMovieById = (id) => {
  return axios.get(`${API_BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
};

export const fetchMovieCredits = (id) => {
  return axios.get(`${API_BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
};

export const fetchSearchResults = (query) => {
  return axios.get(`${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
};
