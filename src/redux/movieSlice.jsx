// src/redux/slices/movieSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  fetchSearchResults,
} from "../utils/api"; // Ensure you import fetchSearchedMovies

// Async Thunks for Movie Fetching
export const getPopularMovies = createAsyncThunk(
  "movies/getPopularMovies",
  async (page = 1) => {
    const response = await fetchPopularMovies(page);
    return response.data.results;
  }
);

export const getTopRatedMovies = createAsyncThunk(
  "movies/getTopRatedMovies",
  async (page = 1) => {
    const response = await fetchTopRatedMovies(page);
    return response.data.results;
  }
);

export const getUpcomingMovies = createAsyncThunk(
  "movies/getUpcomingMovies",
  async (page = 1) => {
    const response = await fetchUpcomingMovies(page);
    return response.data.results;
  }
);

// New Async Thunk for Searching Movies
export const searchMovie = createAsyncThunk(
  "movies/searchMovie",
  async (query) => {
    const response = await fetchSearchResults(query);
    return response.data.results;
  }
);

// Movie Slice
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    searchedMovies: [], 
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Popular Movies
      .addCase(getPopularMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.popularMovies = action.payload;
        state.loading = false;
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      // Top Rated Movies
      .addCase(getTopRatedMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTopRatedMovies.fulfilled, (state, action) => {
        state.topRatedMovies = action.payload;
        state.loading = false;
      })
      .addCase(getTopRatedMovies.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      // Upcoming Movies
      .addCase(getUpcomingMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUpcomingMovies.fulfilled, (state, action) => {
        state.upcomingMovies = action.payload;
        state.loading = false;
      })
      .addCase(getUpcomingMovies.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      // Search Movies
      .addCase(searchMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchMovie.fulfilled, (state, action) => {
        state.searchedMovies = action.payload; // Store searched movies in state
        state.loading = false;
      })
      .addCase(searchMovie.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default movieSlice.reducer;
