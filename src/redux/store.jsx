import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
