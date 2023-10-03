import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;
