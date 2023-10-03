import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const baseUrl = "https://api.themoviedb.org/3";

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async () => {
    const response = await axios.get(
      `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_original_language=en`
    );
    return response.data.results;
  }
);

export const fetchPopularSeriesTV = createAsyncThunk(
  "movies/fetchPopularSeriesTV",
  async () => {
    const response = await axios.get(
      `${baseUrl}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_original_language=en`
    );
    return response.data.results;
  }
);

export const fetchNewMovies = createAsyncThunk(
    "movies/fetchNewMovies",
   async () => {
     const response = await axios.get(
       `${baseUrl}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
     );
     return response.data.results;
    }
)
export const fetchNewSeriesTV = createAsyncThunk(
    "movies/fetchNewSeriesTV",
    async () => {
  const response = await axios.get(
      `${baseUrl}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1&with_origin_country=US`
  );
  return response.data.results;
});

export const fetchMoviesById = createAsyncThunk(
  "movies/fetchMoviesById",
  async (movieId) => {
    const response = await axios.get(
      `${baseUrl}/movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  }
)

export const fetchMovieReviewsById = createAsyncThunk(
  "movies/fetchMovieReviewsById",
  async (movieId) => {
    const response = await axios.get(
      `${baseUrl}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return response.data.results;
  }
);

export const fetchSerieById = createAsyncThunk(
  "movies/fetchSerieById",
  async (movieId) => {
    const response = await axios.get(
      `${baseUrl}/tv/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  }
);

export const fetchSerieReviewsById = createAsyncThunk(
  "movies/fetchSerieReviewsById",
  async (movieId) => {
    const response = await axios.get(
      `${baseUrl}/tv/${movieId}/reviews?api_key=${API_KEY}`
    );
    return response.data.results;
  }
);

export const fetchSearchMulti = createAsyncThunk(
  "search/fetchSearchMulti",
  async ( { query, page }) => {
    const response = await axios.get(
      `${baseUrl}/search/multi?query=${query}&api_key=${API_KEY}&page=${page}&items_per_page=24`
    );

    // console.log(response.data);
    const data = {
      response: response.data,
      page: page
    }
    return data;
  }
);

export const getGenresMovies = createAsyncThunk(
  "movies/getGenersMovies",
  async () => {
    const response = await axios.get(
      `${baseUrl}/genre/movie/list?api_key=${API_KEY}`
    );
    // console.log(response.data);
    return response.data.genres;
  }
);

export const fetchMoviesFilter = createAsyncThunk(
  "movies/fetchMoviesAll",
  async({genreId, page}) => {
    let response;
    if (genreId === 0) {
    response = await axios.get(`
    ${baseUrl}/discover/movie?api_key=${API_KEY}&page=${page}`);
    } 
    else {
    response = await axios.get(`
    ${baseUrl}/discover/movie?api_key=${API_KEY}&page=${page}&with_genres=${genreId}`);
    }
  //  console.log(response.data);
  const data = {
    response: response.data,
    page: page,
    genreId,
  };
  return data;
  }
);

export const getGenersSeries = createAsyncThunk("movies/getGenersSeries",
  async () => {
  const response = await axios.get(
    `${baseUrl}/genre/tv/list?api_key=${API_KEY}`
  );
  console.log(response.data);
  return response.data.genres;
  });


  export const fetchSeriesFilter = createAsyncThunk(
    "movies/fetchSeriesAll",
    async ({ genreId, page }) => {
      let response;
      if (genreId === 0) {
        response = await axios.get(`
    ${baseUrl}/discover/tv?api_key=${API_KEY}&page=${page}`);
      } else {
        response = await axios.get(`
    ${baseUrl}/discover/tv?api_key=${API_KEY}&page=${page}&with_genres=${genreId}`);
      }
       console.log(response.data);
      const data = {
        response: response.data,
        page: page,
        genreId,
      };
      return data;
    }
  );