import { createSlice } from "@reduxjs/toolkit";
import {
  fetchMovieReviewsById,
  fetchMoviesById,
  fetchMoviesFilter,
  fetchNewMovies,
  fetchNewSeriesTV,
  fetchPopularMovies,
  fetchPopularSeriesTV,
  fetchSearchMulti,
  fetchSerieById,
  fetchSerieReviewsById,
  fetchSeriesFilter,
  getGenersSeries,
  getGenresMovies
} from "./moviesOperotion";

const initialState = {
  popularMovies: [],
  popularSeries: [],
  newMovies: [],
  newSeries: [],
  movieById: {},
  serieById: {},
  movieReviews: [],
  serieReviews: [],
  searchMulti: [],
  searchTotalPage: 1,
  searchCurrentPage: 1,
  moviesGeners: [],
  moviesFilter: [],
  moviesFilterTotalPage: 1,
  moviesFilterCurrentPage: 1,
  moviesFilterCurrentGenre: 0,
  seriesGeners: [],
  seriesFilter: [],
  seriesFilterTotalPage: 1,
  seriesFilterCurrentPage: 1,
  seriesFilterCurrentGenre: 0
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.popularMovies = action.payload;
      })
      .addCase(fetchPopularSeriesTV.fulfilled, (state, action) => {
        state.popularSeries = action.payload;
      })
      .addCase(fetchNewMovies.fulfilled, (state, action) => {
        state.newMovies = action.payload;
      })
      .addCase(fetchNewSeriesTV.fulfilled, (state, action) => {
        state.newSeries = action.payload;
      })
      .addCase(fetchMoviesById.fulfilled, (state, action) => {
        state.movieById = action.payload;
      })
      .addCase(fetchMovieReviewsById.fulfilled, (state, action) => {
        state.movieReviews = action.payload;
      })
      .addCase(fetchSerieById.fulfilled, (state, action) => {
        state.serieById = action.payload;
      })
      .addCase(fetchSerieReviewsById.fulfilled, (state, action) => {
        state.serieReviews = action.payload;
      })
      .addCase(fetchSearchMulti.fulfilled, (state, action) => {
        state.searchMulti = action.payload.response.results;
        state.searchTotalPage = action.payload.response.total_pages;
        state.searchCurrentPage = action.payload.page;
      })
      .addCase(getGenresMovies.fulfilled, (state, action) => {
        state.moviesGeners = action.payload
      })
      .addCase(fetchMoviesFilter.fulfilled, (state, action) => {
        state.moviesFilter = action.payload.response.results;
        state.moviesFilterTotalPage = action.payload.response.total_pages;
        state.moviesFilterCurrentPage = action.payload.page;
        state.moviesFilterCurrentGenre = action.payload.genreId;
      })
      .addCase(getGenersSeries.fulfilled, (state, action) => {
        state.seriesGeners = action.payload;
      })
      .addCase(fetchSeriesFilter.fulfilled, (state, action) => {
        state.seriesFilter = action.payload.response.results;
        state.seriesFilterTotalPage = action.payload.response.total_pages;
        state.seriesFilterCurrentPage = action.payload.page;
        state.seriesFilterCurrentGenre = action.payload.genreId;
      })
  },
});

export default moviesSlice.reducer;
