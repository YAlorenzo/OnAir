
import Header from './components/Header'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchNewMovies, fetchNewSeriesTV, fetchPopularMovies, fetchPopularSeriesTV } from './redux/moviesOperotion';
import Bottom from './components/Bottom';

import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import MoviePage from './pages/MoviePage';
import ScrollToTopOnMount from './components/ScroollToTopMount';
import SearchPage from './pages/SearchPage';
import MoviesPage from './pages/MoviesPage';
import SeriesPage from './pages/SeriesPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewMovies());
    dispatch(fetchNewSeriesTV());
    dispatch(fetchPopularMovies());
    dispatch(fetchPopularSeriesTV());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ScrollToTopOnMount />
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/series' element={<SeriesPage/>} />
          <Route path="/:category/:movieId" element={<MoviePage />} />
          <Route path="/search/multi/:name" element={<SearchPage />} />
          <Route path='#' element={<HomePage />} />
        </Routes>
      <Bottom/>
    </>
  )
}

export default App